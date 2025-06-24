
import React, { useState, useEffect } from "react";
import { DashboardLayoutWithSidebar } from "@/layouts/DashboardLayoutWithSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, CheckCircle, Info, AlertTriangle, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { notificationService, Notification } from "@/services/notificationService";
import { toast } from "sonner";
import { formatDistanceToNow, format } from "date-fns";
import { fr } from "date-fns/locale";

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'urgent':
      return AlertTriangle;
    case 'alerte':
      return AlertTriangle;
    case 'maintenance':
      return Settings;
    case 'info':
    default:
      return Info;
  }
};

const getNotificationColors = (type: string) => {
  switch (type) {
    case 'urgent':
      return {
        bg: 'bg-red-50',
        border: 'border-red-300',
        icon: 'text-red-600',
        badge: 'bg-red-100 text-red-800'
      };
    case 'alerte':
      return {
        bg: 'bg-orange-50',
        border: 'border-orange-300',
        icon: 'text-orange-600',
        badge: 'bg-orange-100 text-orange-800'
      };
    case 'maintenance':
      return {
        bg: 'bg-blue-50',
        border: 'border-blue-300',
        icon: 'text-blue-600',
        badge: 'bg-blue-100 text-blue-800'
      };
    case 'info':
    default:
      return {
        bg: 'bg-green-50',
        border: 'border-green-300',
        icon: 'text-green-600',
        badge: 'bg-green-100 text-green-800'
      };
  }
};

const NotificationItem = ({ notification, onMarkAsRead }: {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
}) => {
  const Icon = getNotificationIcon(notification.type);
  const colors = getNotificationColors(notification.type);
  const timeAgo = formatDistanceToNow(new Date(notification.date), { 
    addSuffix: true, 
    locale: fr 
  });
  const fullDate = format(new Date(notification.date), 'dd/MM/yyyy à HH:mm', { locale: fr });

  return (
    <div className={`p-6 border-l-4 ${colors.border} ${!notification.isRead ? colors.bg : 'bg-white'} hover:bg-orange-50/30 transition-colors`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl ${colors.bg} flex-shrink-0`}>
          <Icon className={`h-6 w-6 ${colors.icon}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-semibold text-gray-900 text-lg">{notification.titre}</h3>
                <Badge variant="secondary" className={colors.badge}>
                  {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                </Badge>
              </div>
              <p className="text-gray-600 leading-relaxed text-base mb-3">{notification.contenu}</p>
              <p className="text-xs text-gray-500" title={fullDate}>{timeAgo}</p>
            </div>
            <div className="flex-shrink-0 text-right">
              <div className="flex items-center gap-2 mb-2">
                {!notification.isRead ? (
                  <>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">Nouveau</Badge>
                    <Button
                      onClick={() => onMarkAsRead(notification.id)}
                      variant="outline"
                      size="sm"
                      className="text-xs hover:bg-orange-50"
                    >
                      Marquer comme lu
                    </Button>
                  </>
                ) : (
                  <div className="flex items-center gap-1 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-xs">Lu</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotificationsContent = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadNotifications = async () => {
    try {
      setLoading(true);
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
      await loadNotifications();
      toast.success('Notification marquée comme lue');
    } catch (error) {
      console.error('Erreur lors du marquage comme lu:', error);
      toast.error('Erreur lors du marquage comme lu');
    }
  };

  const markAllAsRead = async () => {
    try {
      await notificationService.markAllAsRead();
      await loadNotifications();
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
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 md:p-8 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-2xl flex items-center justify-center">
              <Bell className="h-8 w-8 md:h-10 md:w-10 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-bold mb-2">Notifications</h1>
              <p className="text-orange-100 text-sm md:text-lg">
                Restez informé des dernières activités de votre école
              </p>
            </div>
          </div>
          
          {unreadCount > 0 && (
            <div className="text-right">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <p className="text-2xl font-bold">{unreadCount}</p>
                <p className="text-sm text-orange-100">Non lues</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Card className="border-orange-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-orange-700 flex items-center gap-3">
              <Bell className="h-5 w-5" />
              Toutes les notifications ({notifications.length})
            </CardTitle>
            {unreadCount > 0 && (
              <Button
                onClick={markAllAsRead}
                variant="outline"
                className="hover:bg-orange-50"
              >
                Marquer tout comme lu ({unreadCount})
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-500">Chargement des notifications...</p>
            </div>
          ) : notifications.length === 0 ? (
            <div className="p-8 text-center">
              <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Aucune notification pour le moment</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {notifications.map((notification) => (
                <NotificationItem 
                  key={notification.id} 
                  notification={notification}
                  onMarkAsRead={markAsRead}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const Notifications = () => {
  return (
    <DashboardLayoutWithSidebar>
      <NotificationsContent />
    </DashboardLayoutWithSidebar>
  );
};

export default Notifications;
