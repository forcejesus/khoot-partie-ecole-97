
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const JeuDetailsLoading = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-8 w-64" />
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3 space-y-6">
          <div className="h-64 w-full rounded-lg">
            <Skeleton className="h-64 w-full rounded-lg" />
            <Skeleton className="h-8 w-3/4 mt-4" />
            <Skeleton className="h-4 w-full mt-2" />
          </div>
        </div>
        
        <div className="xl:col-span-1 space-y-4">
          <div>
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-full mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
