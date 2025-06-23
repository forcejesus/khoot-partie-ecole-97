
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OffersHeader from "@/components/offers/OffersHeader";
import OfferCard from "@/components/offers/OfferCard";
import AdditionalFeatures from "@/components/offers/AdditionalFeatures";
import OffersCallToAction from "@/components/offers/OffersCallToAction";
import { fallbackOffers } from "@/data/fallbackOffers";

const OffersFallback = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <Navbar />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ea580c%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none opacity-40"></div>
      <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 relative z-10">
        <OffersHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
          {fallbackOffers.map((offer, index) => (
            <OfferCard
              key={index}
              {...offer}
              index={index}
            />
          ))}
        </div>
        <AdditionalFeatures />
        <OffersCallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default OffersFallback;
