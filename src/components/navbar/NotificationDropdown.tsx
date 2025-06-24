
import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { notificationService, Notification } from "@/services/notificationService";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'urgent':
      return '🚨';
    case 'alerte':
      return '⚠️';
    case 'maintenance':
      return '🔧';
    case 'info':
    default:
      return 'ℹ️';
  }
};

const getNotificationColors = (type: string) => {
  switch (type) {
    case 'urgent':
      return {
        bg: 'bg-red-50',
        border: 'border-red-200',
        hover: 'hover:bg-red-100',
        dot: 'bg-red-500'
      };
    case 'alerte':
      return {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        hover: 'hover:bg-orange-100',
        dot: 'bg-orange-500'
      };
    case 'maintenance':
      return {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        hover: 'hover:bg-blue-100',
        dot: 'bg-blue-500'
      };
    case 'info':
    default:
      return {
        bg: 'bg-green-50',
        border: 'border-green-200',
        hover: 'hover:bg-green-100',
        dot: 'bg-green-500'
      };
  }
};

const NotificationDropdown = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadNotifications = async () => {
    try {
      const response = await notificationService.getMyNotifications();
      setNotifications(response.data);
      setUnreadCount(response.nonLues);
    } catch (error) {
      console.error('Erreur lors du chargement des notifications:', error);
      toast.error('Erreur lors du chargement des notifications');
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (notificationId: string) => {
    try {
      await notificationService.markAsRead(notificationId);
      await loadNotifications(); // Recharger les notifications
      toast.success('Notification marquée comme lue');
    } catch (error) {
      console.error('Erreur lors du marquage comme lu:', error);
      toast.error('Erreur lors du marquage comme lu');
    }
  };

  const markAllAsRead = async () => {
    try {
      await notificationService.markAllAsRead();
      await loadNotifications(); // Recharger les notifications
      toast.success('Toutes les notifications marquées comme lues');
    } catch (error) {
      console.error('Erreur lors du marquage de toutes comme lues:', error);
      toast.error('Erreur lors du marquage comme lues');
    }
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full relative hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 dark:hover:bg-gradient-to-r dark:hover:from-orange-900/30 dark:hover:to-red-900/30 border-2 border-orange-200/60 hover:border-orange-400/60 transition-all duration-300 overflow-hidden group animate-baobab-sway"
        >
          <div className="absolute inset-0 bg-tribal-dots opacity-10 group-hover:opacity-20 transition-opacity"></div>
          
          <Bell className="h-[1.4rem] w-[1.4rem] text-orange-600 relative z-10" />
          
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-tribal-pulse border-2 border-white flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">{unreadCount > 9 ? '9+' : unreadCount}</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-ping"></span>
            </span>
          )}
          
          <div className="absolute top-1 left-1 w-1 h-1 bg-african-gold rounded-full opacity-60"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-african-terracotta rounded-full opacity-60"></div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-80 border-2 border-orange-200 bg-gradient-to-br from-orange-50/95 to-red-50/95 backdrop-blur-xl shadow-african max-h-96 overflow-y-auto"
      >
        <div className="px-4 py-3 font-medium border-b-2 border-orange-200 bg-gradient-to-r from-orange-100 to-red-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-tribal-dots opacity-10"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center animate-tribal-pulse">
                <Bell className="h-3 w-3 text-white" />
              </div>
              <span className="font-african text-lg">🔔 Notifications AKILI</span>
            </div>
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                {unreadCount}
              </span>
            )}
          </div>
        </div>

        {unreadCount > 0 && (
          <div className="p-2 border-b border-orange-100">
            <Button
              onClick={markAllAsRead}
              variant="outline"
              size="sm"
              className="w-full text-xs hover:bg-orange-50"
            >
              Marquer tout comme lu
            </Button>
          </div>
        )}

        {loading ? (
          <div className="p-4 text-center">
            <span className="text-sm text-gray-500">Chargement...</span>
          </div>
        ) : notifications.length === 0 ? (
          <div className="p-4 text-center">
            <span className="text-sm text-gray-500">Aucune notification</span>
          </div>
        ) : (
          notifications.map((notification) => {
            const colors = getNotificationColors(notification.type);
            const timeAgo = formatDistanceToNow(new Date(notification.date), { 
              addSuffix: true, 
              locale: fr 
            });

            return (
              <DropdownMenuItem 
                key={notification.id}
                className={`p-4 ${colors.hover} border-b border-orange-100 cursor-pointer ${
                  !notification.isRead ? colors.bg : 'bg-white'
                }`}
                onClick={() => !notification.isRead && markAsRead(notification.id)}
              >
                <div className="flex items-start gap-3 w-full">
                  <div className={`w-3 h-3 ${colors.dot} rounded-full mt-1 ${
                    !notification.isRead ? 'animate-pulse' : 'opacity-50'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className={`text-sm font-medium flex items-center gap-1 ${
                          !notification.isRead ? 'text-gray-900' : 'text-gray-600'
                        }`}>
                          <span>{getNotificationIcon(notification.type)}</span>
                          {notification.titre}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {notification.contenu}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">{timeAgo}</p>
                        {!notification.isRead && (
                          <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-1"></span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </DropdownMenuItem>
            );
          })
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropdown;
