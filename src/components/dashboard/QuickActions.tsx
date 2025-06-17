
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  GraduationCap, 
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-orange-200 cursor-pointer bg-white" onClick={() => navigate("/apprenants")}>
        <CardContent className="p-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-green-50 rounded-2xl group-hover:scale-110 transition-transform">
              <Users className="h-10 w-10 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                Gérer les apprenants
              </h3>
              <p className="text-gray-600">
                Ajouter, modifier ou supprimer des apprenants
              </p>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-green-600 group-hover:translate-x-2 transition-all" />
          </div>
        </CardContent>
      </Card>

      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-orange-200 cursor-pointer bg-white" onClick={() => navigate("/enseignants")}>
        <CardContent className="p-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-blue-50 rounded-2xl group-hover:scale-110 transition-transform">
              <GraduationCap className="h-10 w-10 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                Gérer les enseignants
              </h3>
              <p className="text-gray-600">
                Administrer l'équipe pédagogique
              </p>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
