
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const StatCardSkeleton = () => (
  <Card className="border-orange-200 bg-white">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-12 w-12 rounded-xl" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-8 w-16 mb-2" />
      <Skeleton className="h-4 w-20" />
    </CardContent>
  </Card>
);
