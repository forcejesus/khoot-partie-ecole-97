import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LogOut, Users, GraduationCap } from "lucide-react";
import { ApprenantsList } from "@/components/ApprenantsList";
import { EnseignantsList } from "@/components/EnseignantsList";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const [totalApprenants, setTotalApprenants] = useState(0);
  const [totalEnseignants, setTotalEnseignants] = useState(0);

  const fetchTotalApprenants = async () => {
    try {
      const token = localStorage.getItem("token");
      const userDataStr = localStorage.getItem("user");

      if (!token || !userDataStr) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour voir les statistiques",
        });
        return;
      }

      const userData = JSON.parse(userDataStr);

      const response = await axios.get(
        "http://kahoot.nos-apps.com/api/apprenant",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        const filteredApprenants = response.data.data.filter(
          (apprenant: any) => apprenant.ecole._id === userData.ecole._id
        );
        setTotalApprenants(filteredApprenants.length);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des statistiques:", error);
    }
  };

  const fetchTotalEnseignants = async () => {
    try {
      const token = localStorage.getItem("token");
      const userDataStr = localStorage.getItem("user");

      if (!token || !userDataStr) {
        return;
      }

      const userData = JSON.parse(userDataStr);

      const response = await axios.get(
        "http://kahoot.nos-apps.com/api/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        const filteredEnseignants = response.data.data.filter(
          (enseignant: any) => 
            enseignant.ecole === userData.ecole._id && 
            enseignant.statut.toLowerCase() === "enseignant"
        );
        setTotalEnseignants(filteredEnseignants.length);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des statistiques:", error);
    }
  };

  useEffect(() => {
    fetchTotalApprenants();
    fetchTotalEnseignants();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">École</p>
                <p className="text-sm font-medium">{user?.ecole.libelle}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={logout}
                className="hover:bg-gray-100"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Enseignants</p>
                <p className="text-2xl font-bold">{totalEnseignants}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Apprenants</p>
                <p className="text-2xl font-bold">{totalApprenants}</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-8">
          <EnseignantsList onEnseignantChange={fetchTotalEnseignants} />
          <ApprenantsList onApprenantChange={fetchTotalApprenants} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;