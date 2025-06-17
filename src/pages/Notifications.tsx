
import React from "react";
import { DashboardLayoutWithSidebar } from "@/layouts/DashboardLayoutWithSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const NotificationItem = ({ icon: Icon, title, message, time, type, isRead }: {
  icon: any;
  title: string;
  message: string;
  time: string;
  type: 'info' | 'success' | 'warning';
  isRead: boolean;
}) => {
  const typeColors = {
    info: "from-blue-500 to-blue-600",
    success: "from-green-500 to-green-600", 
    warning: "from-orange-500 to-orange-600"
  };

  const bgColors = {
    info: "bg-blue-50",
    success: "bg-green-50",
    warning: "bg-orange-50"
  };

  return (
    <div className={`p-6 border-l-4 border-orange-300 ${!isRead ? 'bg-orange-50/50' : 'bg-white'} hover:bg-orange-50/30 transition-colors`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl ${bgColors[type]} flex-shrink-0`}>
          <Icon className="h-6 w-6 text-orange-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{message}</p>
            </div>
            <div className="flex-shrink-0 text-right">
              <p className="text-xs text-gray-500 mb-2">{time}</p>
              {!isRead && <Badge variant="secondary" className="bg-orange-100 text-orange-800">Nouveau</Badge>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotificationsContent = () => {
  const notifications = [
    {
      icon: CheckCircle,
      title: "Nouvel apprenant ajouté",
      message: "Jean Dupont a été ajouté avec succès à votre école.",
      time: "Il y a 2 heures",
      type: "success" as const,
      isRead: false
    },
    {
      icon: Info,
      title: "Mise à jour système",
      message: "AKILI a été mis à jour avec de nouvelles fonctionnalités pour améliorer votre expérience.",
      time: "Il y a 1 jour",
      type: "info" as const,
      isRead: false
    },
    {
      icon: AlertTriangle,
      title: "Limite d'apprenants atteinte",
      message: "Vous approchez de la limite de votre abonnement. Pensez à upgrader votre plan.",
      time: "Il y a 2 jours",
      type: "warning" as const,
      isRead: true
    },
    {
      icon: CheckCircle,
      title: "Import CSV réussi",
      message: "L'importation de 25 nouveaux apprenants s'est déroulée avec succès.",
      time: "Il y a 3 jours",
      type: "success" as const,
      isRead: true
    }
  ];

  return (
    <div className="space-y-6">
      {/* En-tête de la page */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 md:p-8 text-white shadow-lg">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-2xl flex items-center justify-center">
            <Bell className="h-8 w-8 md:h-10 md:w-10 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-2">Notifications</h1>
            <p className="text-orange-100 text-sm md:text-xl">
              Restez informé des dernières activités de votre école
            </p>
          </div>
        </div>
      </div>

      {/* Statistiques des notifications */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border-orange-200">
          <CardContent className="p-4 md:p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">2</div>
            <div className="text-xs md:text-sm text-gray-600">Non lues</div>
          </CardContent>
        </Card>
        <Card className="border-orange-200">
          <CardContent className="p-4 md:p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">2</div>
            <div className="text-xs md:text-sm text-gray-600">Succès</div>
          </CardContent>
        </Card>
        <Card className="border-orange-200">
          <CardContent className="p-4 md:p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">1</div>
            <div className="text-xs md:text-sm text-gray-600">Info</div>
          </CardContent>
        </Card>
        <Card className="border-orange-200">
          <CardContent className="p-4 md:p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">1</div>
            <div className="text-xs md:text-sm text-gray-600">Attention</div>
          </CardContent>
        </Card>
      </div>

      {/* Liste des notifications */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="text-xl text-orange-700 flex items-center gap-3">
            <Bell className="h-5 w-5" />
            Toutes les notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-100">
            {notifications.map((notification, index) => (
              <NotificationItem key={index} {...notification} />
            ))}
          </div>
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
