
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  GraduationCap, 
  GamepadIcon,
  TrendingUp
} from "lucide-react";

const stats = [
  {
    title: "Jeux disponibles",
    value: "12",
    icon: GamepadIcon,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    change: "+2 ce mois"
  },
  {
    title: "Enseignants",
    value: "8", 
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    change: "Actifs"
  },
  {
    title: "Apprenants",
    value: "245",
    icon: Users,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    change: "+12 cette semaine"
  }
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-orange-200 bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <div className={`p-3 md:p-4 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform`}>
              <stat.icon className={`h-5 w-5 md:h-6 md:w-6 ${stat.textColor}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className={`text-xs md:text-sm font-medium ${stat.textColor} flex items-center gap-2`}>
              <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
              {stat.change}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
