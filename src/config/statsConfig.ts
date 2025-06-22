
import { 
  Users, 
  GraduationCap, 
  GamepadIcon,
  Calendar
} from "lucide-react";
import { StatsData } from "@/types/statistics";

export interface StatConfig {
  title: string;
  value: string;
  icon: typeof Users;
  color: string;
  bgColor: string;
  textColor: string;
  change: string;
}

export const createStatsConfig = (statsData: StatsData): StatConfig[] => [
  {
    title: "Jeux disponibles",
    value: String(statsData.total_jeux),
    icon: GamepadIcon,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    change: "Disponibles"
  },
  {
    title: "Planifications",
    value: String(statsData.total_planifications),
    icon: Calendar,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    change: "Sessions programmées"
  },
  {
    title: "Enseignants",
    value: String(statsData.total_enseignants),
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    change: "Actifs"
  },
  {
    title: "Apprenants",
    value: String(statsData.total_apprenants),
    icon: Users,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    change: "Inscrits"
  }
];
