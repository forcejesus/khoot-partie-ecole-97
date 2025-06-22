
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OffersHeader from "@/components/offers/OffersHeader";
import { Skeleton } from "@/components/ui/skeleton";

const OffersLoading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <Navbar />
      <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 relative z-10">
        <OffersHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-96">
              <Skeleton className="w-full h-full rounded-3xl" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OffersLoading;
