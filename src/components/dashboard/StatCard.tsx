
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { StatConfig } from "@/config/statsConfig";

interface StatCardProps {
  stat: StatConfig;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-orange-200 bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-medium text-gray-600">
          {stat.title}
        </CardTitle>
        <div className={`p-3 md:p-4 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform`}>
          <stat.icon className={`h-5 w-5 md:h-6 md:w-6 ${stat.textColor}`} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {stat.value}
        </div>
        <div className={`text-xs md:text-sm font-medium ${stat.textColor} flex items-center gap-2`}>
          <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
          {stat.change}
        </div>
      </CardContent>
    </Card>
  );
};
