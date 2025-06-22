import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Calendar,
  Clock,
  Users,
  Filter,
  GamepadIcon,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { config } from "@/config/hosts";

interface Ecole {
  _id: string;
  libelle: string;
  adresse: string;
  ville: string;
  telephone: string;
  email: string;
  fichier: string;
  pays: string;
  apprenants: any[];
  abonnementActuel: string;
  abonnementHistorique: any[];
  __v: number;
}

interface Jeu {
  _id: string;
  titre: string;
  image: string | null;
  createdBy: any | null;
  planification: any[];
  questions: any[];
  ecole: Ecole;
  date: string;
  __v: number;
}

export const JeuxCards = () => {
  const [jeux, setJeux] = useState<Jeu[]>([]);
  const [filteredJeux, setFilteredJeux] = useState<Jeu[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterPlanifie, setFilterPlanifie] = useState<boolean | null>(null);
  const [sortBy, setSortBy] = useState<string>("date");
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const { toast } = useToast();

  const fetchJeux = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour voir la liste des jeux",
        });
        return;
      }

      const response = await axios.get(`${config.api.baseUrl}/api/jeux`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      if (response.data.success) {
        setJeux(response.data.data);
        setFilteredJeux(response.data.data);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des jeux:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de récupérer la liste des jeux",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJeux();
  }, []);

  useEffect(() => {
    let result = [...jeux];

    // Filtrer par planification
    if (filterPlanifie !== null) {
      result = result.filter(jeu => 
        filterPlanifie 
          ? jeu.planification && jeu.planification.length > 0
          : !jeu.planification || jeu.planification.length === 0
      );
    }

    // Trier
    result.sort((a, b) => {
      switch (sortBy) {
        case "titre":
          return a.titre.localeCompare(b.titre);
        case "questions":
          return (b.questions?.length || 0) - (a.questions?.length || 0);
        case "date":
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    setFilteredJeux(result);
  }, [jeux, filterPlanifie, sortBy]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getRandomGradient = () => {
    const gradients = [
      "from-purple-500 to-indigo-500",
      "from-blue-500 to-teal-400",
      "from-green-500 to-emerald-500",
      "from-pink-500 to-rose-500",
      "from-amber-500 to-orange-500",
      "from-red-500 to-rose-500",
      "from-emerald-500 to-green-500",
      "from-cyan-500 to-blue-500"
    ];
    
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Liste des jeux</h1>
          <p className="text-gray-600 mt-1">
            Total: {filteredJeux.length} jeu{filteredJeux.length > 1 ? "x" : ""}
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <Label htmlFor="planification" className="text-sm">Affichage:</Label>
            <Tabs value={viewType} onValueChange={(v) => setViewType(v as "grid" | "list")}>
              <TabsList className="h-8">
                <TabsTrigger value="grid" className="px-2 h-7">Grille</TabsTrigger>
                <TabsTrigger value="list" className="px-2 h-7">Liste</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="flex items-center gap-2">
            <Label htmlFor="planification" className="text-sm">Planifié:</Label>
            <Select 
              value={filterPlanifie === null ? "tous" : filterPlanifie ? "oui" : "non"}
              onValueChange={(value) => {
                if (value === "tous") setFilterPlanifie(null);
                else if (value === "oui") setFilterPlanifie(true);
                else setFilterPlanifie(false);
              }}
            >
              <SelectTrigger className="w-[100px] h-8">
                <SelectValue placeholder="Tous" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tous">Tous</SelectItem>
                <SelectItem value="oui">Oui</SelectItem>
                <SelectItem value="non">Non</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2">
            <Label htmlFor="tri" className="text-sm">Trier par:</Label>
            <Select 
              value={sortBy} 
              onValueChange={(value) => setSortBy(value)}
            >
              <SelectTrigger className="w-[130px] h-8">
                <SelectValue placeholder="Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="titre">Titre</SelectItem>
                <SelectItem value="questions">Questions</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      {isLoading ? (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader className="p-0">
                <Skeleton className="w-full h-[120px]" />
              </CardHeader>
              <CardContent className="pt-6">
                <Skeleton className="h-6 w-[180px] mb-2" />
                <Skeleton className="h-4 w-[150px] mb-4" />
                <div className="flex gap-2 mb-2">
                  <Skeleton className="h-5 w-[100px]" />
                  <Skeleton className="h-5 w-[80px]" />
                </div>
                <Skeleton className="h-4 w-full mt-4" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        viewType === "grid" ? (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {filteredJeux.map((jeu) => {
              const gradient = getRandomGradient();
              return (
                <Card key={jeu._id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className={`p-0 h-[120px] bg-gradient-to-r ${gradient} flex items-center justify-center`}>
                    <GamepadIcon className="h-12 w-12 text-white/80" />
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardTitle className="text-lg line-clamp-1">{jeu.titre}</CardTitle>
                    <CardDescription className="line-clamp-2 h-10">
                      {jeu.ecole.libelle} - {jeu.ecole.ville}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {jeu.ecole.libelle.split(' ')[0]}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        {jeu.questions?.length || 0} questions
                      </Badge>
                      {jeu.planification?.length > 0 ? (
                        <Badge className="flex items-center gap-1 bg-green-600">
                          <CheckCircle2 className="h-3 w-3" />
                          Planifié
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="flex items-center gap-1 text-muted-foreground">
                          <XCircle className="h-3 w-3" />
                          Non planifié
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mt-4 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(jeu.date)}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-end">
                    <Button variant="ghost" size="sm">Voir détails</Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="rounded-md border">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium text-sm">Titre</th>
                  <th className="text-left p-4 font-medium text-sm">École</th>
                  <th className="text-left p-4 font-medium text-sm">Questions</th>
                  <th className="text-left p-4 font-medium text-sm">Planification</th>
                  <th className="text-left p-4 font-medium text-sm">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredJeux.map((jeu, i) => (
                  <tr key={jeu._id} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="p-4 font-medium">{jeu.titre}</td>
                    <td className="p-4">{jeu.ecole.libelle}</td>
                    <td className="p-4">{jeu.questions?.length || 0} questions</td>
                    <td className="p-4">
                      {jeu.planification?.length > 0 ? (
                        <Badge className="bg-green-600">
                          Planifié
                        </Badge>
                      ) : (
                        <Badge variant="outline">
                          Non planifié
                        </Badge>
                      )}
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{formatDate(jeu.date)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  );
};
