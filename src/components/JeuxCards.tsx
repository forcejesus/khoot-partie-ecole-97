
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
  Users,
  Filter,
  GamepadIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { config } from "@/config/hosts";

interface Ecole {
  _id: string;
  libelle: string;
  ville: string;
}

interface Jeu {
  _id: string;
  titre: string;
  image: string | null;
  createdBy: any | null;
  ecole: Ecole;
  date: string;
}

interface JeuxResponse {
  success: boolean;
  message: string;
  data: Jeu[];
  total: number;
}

export const JeuxCards = () => {
  const [jeux, setJeux] = useState<Jeu[]>([]);
  const [filteredJeux, setFilteredJeux] = useState<Jeu[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<string>("date");
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const { toast } = useToast();

  // Image par défaut pour les jeux
  const defaultGameImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop&crop=center";

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

      const response = await axios.get<JeuxResponse>(`${config.api.baseUrl}/api/jeux`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      if (response.data.success) {
        setJeux(response.data.data);
        setFilteredJeux(response.data.data);
        setTotal(response.data.total);
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

    // Trier
    result.sort((a, b) => {
      switch (sortBy) {
        case "titre":
          return a.titre.localeCompare(b.titre);
        case "ecole":
          return a.ecole.libelle.localeCompare(b.ecole.libelle);
        case "date":
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    setFilteredJeux(result);
  }, [jeux, sortBy]);

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
      {/* En-tête avec total mis en valeur */}
      <div className="mb-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-orange-800">Liste des jeux</h1>
            <p className="text-gray-600 mt-1">
              <span className="font-semibold text-orange-700">{total}</span> jeu{total > 1 ? "x" : ""} au total
            </p>
          </div>
          
          <div className="bg-orange-500 text-white px-6 py-3 rounded-full">
            <div className="flex items-center gap-2">
              <GamepadIcon className="h-5 w-5" />
              <span className="font-bold text-lg">{filteredJeux.length}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <Label htmlFor="affichage" className="text-sm">Affichage:</Label>
            <Tabs value={viewType} onValueChange={(v) => setViewType(v as "grid" | "list")}>
              <TabsList className="h-8">
                <TabsTrigger value="grid" className="px-2 h-7">Grille</TabsTrigger>
                <TabsTrigger value="list" className="px-2 h-7">Liste</TabsTrigger>
              </TabsList>
            </Tabs>
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
                <SelectItem value="ecole">École</SelectItem>
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
                <Skeleton className="w-full h-[200px]" />
              </CardHeader>
              <CardContent className="pt-6">
                <Skeleton className="h-6 w-[180px] mb-2" />
                <Skeleton className="h-4 w-[150px] mb-4" />
                <Skeleton className="h-4 w-full mt-4" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        viewType === "grid" ? (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {filteredJeux.map((jeu) => (
              <Card key={jeu._id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={jeu.image || defaultGameImage}
                      alt={jeu.titre}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = defaultGameImage;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg line-clamp-2">{jeu.titre}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="line-clamp-2 h-10 mb-3">
                    {jeu.ecole.libelle} - {jeu.ecole.ville}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {jeu.ecole.libelle.split(' ')[0]}
                    </Badge>
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
            ))}
          </div>
        ) : (
          <div className="rounded-md border">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium text-sm">Titre</th>
                  <th className="text-left p-4 font-medium text-sm">École</th>
                  <th className="text-left p-4 font-medium text-sm">Ville</th>
                  <th className="text-left p-4 font-medium text-sm">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredJeux.map((jeu, i) => (
                  <tr key={jeu._id} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="p-4 font-medium">{jeu.titre}</td>
                    <td className="p-4">{jeu.ecole.libelle}</td>
                    <td className="p-4">{jeu.ecole.ville}</td>
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
