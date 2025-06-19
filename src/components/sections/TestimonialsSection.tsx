import React from "react";
import { motion } from "framer-motion";
import { Star, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const TestimonialsSection = () => {
  const {
    t
  } = useLanguage();
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  const staggerContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const testimonials = [{
    name: t("home.testimonials.testimonial1.name"),
    role: t("home.testimonials.testimonial1.role"),
    image: "👨🏿‍🏫",
    quote: t("home.testimonials.testimonial1.quote"),
    rating: 5
  }, {
    name: t("home.testimonials.testimonial2.name"),
    role: t("home.testimonials.testimonial2.role"),
    image: "👩🏿‍🏫",
    quote: t("home.testimonials.testimonial2.quote"),
    rating: 5
  }, {
    name: t("home.testimonials.testimonial3.name"),
    role: t("home.testimonials.testimonial3.role"),
    image: "👨🏿‍💼",
    quote: t("home.testimonials.testimonial3.quote"),
    rating: 5
  }];
  return <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-purple-50/50" />
      
      
    </section>;
};
export default TestimonialsSection;