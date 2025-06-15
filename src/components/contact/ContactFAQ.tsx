
import React from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactFAQ = () => {
  const { t } = useLanguage();
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const faqData = [
    {
      question: t("contact.faqQuestions.q1"),
      answer: t("contact.faqQuestions.a1")
    },
    {
      question: t("contact.faqQuestions.q2"),
      answer: t("contact.faqQuestions.a2")
    },
    {
      question: t("contact.faqQuestions.q3"),
      answer: t("contact.faqQuestions.a3")
    },
    {
      question: t("contact.faqQuestions.q4"),
      answer: t("contact.faqQuestions.a4")
    },
    {
      question: t("contact.faqQuestions.q5"),
      answer: t("contact.faqQuestions.a5")
    },
    {
      question: t("contact.faqQuestions.q6"),
      answer: t("contact.faqQuestions.a6")
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInVariants}
      className="mb-20 max-w-4xl mx-auto"
      id="faq"
    >
      <div className="text-center mb-12">
        <motion.div 
          className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-200 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <HelpCircle className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium text-gray-700 font-inter">{t("contact.faq")}</span>
        </motion.div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
          {t("contact.faq")}
        </h2>
        <p className="text-lg text-gray-600 font-inter">
          {t("contact.faqSubtitle")}
        </p>
      </div>

      <Card className="border border-gray-200 bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl">
        <CardContent className="p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-orange-600 font-poppins">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed font-inter">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactFAQ;
