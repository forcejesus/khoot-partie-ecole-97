
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  GraduationCap, 
  ArrowRight,
  Settings,
  Bell
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Gérer les apprenants",
      description: "Ajouter, modifier ou supprimer des apprenants",
      icon: Users,
      path: "/apprenants",
      color: "green"
    },
    {
      title: "Gérer les enseignants", 
      description: "Administrer l'équipe pédagogique",
      icon: GraduationCap,
      path: "/enseignants",
      color: "blue"
    },
    {
      title: "Paramètres",
      description: "Configurer votre établissement",
      icon: Settings,
      path: "/settings",
      color: "purple"
    },
    {
      title: "Notifications",
      description: "Voir toutes vos notifications",
      icon: Bell,
      path: "/notifications",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        hover: "group-hover:text-green-600"
      },
      blue: {
        bg: "bg-blue-50", 
        text: "text-blue-600",
        hover: "group-hover:text-blue-600"
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600", 
        hover: "group-hover:text-purple-600"
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        hover: "group-hover:text-orange-600"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Actions rapides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {actions.map((action, index) => {
          const colorClasses = getColorClasses(action.color);
          return (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-orange-200 cursor-pointer bg-white" 
              onClick={() => navigate(action.path)}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className={`p-3 md:p-4 ${colorClasses.bg} rounded-2xl group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <action.icon className={`h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 ${colorClasses.text}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold text-lg md:text-xl text-gray-900 ${colorClasses.hover} transition-colors mb-2`}>
                      {action.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {action.description}
                    </p>
                  </div>
                  <ArrowRight className={`h-5 w-5 md:h-6 md:w-6 text-gray-400 ${colorClasses.hover} group-hover:translate-x-2 transition-all flex-shrink-0`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
