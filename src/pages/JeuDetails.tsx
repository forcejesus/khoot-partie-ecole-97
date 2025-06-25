
import React from "react";
import { useParams } from "react-router-dom";
import { DashboardLayoutWithSidebar } from "@/layouts/DashboardLayoutWithSidebar";
import { JeuDetailsHeader } from "@/components/jeuDetails/JeuDetailsHeader";
import { JeuDetailsGameImage } from "@/components/jeuDetails/JeuDetailsGameImage";
import { JeuDetailsQuestions } from "@/components/jeuDetails/JeuDetailsQuestions";
import { JeuDetailsTeacherInfo } from "@/components/jeuDetails/JeuDetailsTeacherInfo";
import { JeuDetailsStatistics } from "@/components/jeuDetails/JeuDetailsStatistics";
import { JeuDetailsLoading } from "@/components/jeuDetails/JeuDetailsLoading";
import { JeuDetailsNotFound } from "@/components/jeuDetails/JeuDetailsNotFound";
import { PlanificationSection } from "@/components/games/PlanificationSection";
import { useJeuDetails } from "@/hooks/useJeuDetails";

const defaultGameImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop&crop=center";

const JeuDetailsContent = () => {
  const { id } = useParams<{ id: string }>();
  const { jeu, isLoading } = useJeuDetails(id);

  if (isLoading) {
    return <JeuDetailsLoading />;
  }

  if (!jeu) {
    return <JeuDetailsNotFound />;
  }

  return (
    <div className="space-y-6">
      <JeuDetailsHeader />

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Contenu principal - 3 colonnes */}
        <div className="xl:col-span-3 space-y-6">
          <JeuDetailsGameImage 
            titre={jeu.titre}
            image={jeu.image}
            date={jeu.date}
            defaultGameImage={defaultGameImage}
          />

          <PlanificationSection 
            planifications={jeu.planification}
            jeuId={jeu._id}
          />

          <JeuDetailsQuestions questions={jeu.questions} />
        </div>

        {/* Sidebar - 1 colonne */}
        <div className="xl:col-span-1 space-y-6">
          <JeuDetailsTeacherInfo 
            createdBy={jeu.createdBy}
            ecole={jeu.ecole}
          />

          <JeuDetailsStatistics 
            questions={jeu.questions}
            planifications={jeu.planification}
          />
        </div>
      </div>
    </div>
  );
};

const JeuDetails = () => {
  return (
    <DashboardLayoutWithSidebar>
      <JeuDetailsContent />
    </DashboardLayoutWithSidebar>
  );
};

export default JeuDetails;
