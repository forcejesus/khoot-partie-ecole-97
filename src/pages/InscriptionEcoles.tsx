
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, CheckCircle2, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const InscriptionEcoles = () => {
  const { t } = useLanguage();
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Get the steps array from translations
  const processSteps = [
    {
      number: "01",
      title: t("schoolRegistration.process.steps.0.title"),
      description: t("schoolRegistration.process.steps.0.description")
    },
    {
      number: "02", 
      title: t("schoolRegistration.process.steps.1.title"),
      description: t("schoolRegistration.process.steps.1.description")
    },
    {
      number: "03",
      title: t("schoolRegistration.process.steps.2.title"),
      description: t("schoolRegistration.process.steps.2.description")
    },
    {
      number: "04",
      title: t("schoolRegistration.process.steps.3.title"),
      description: t("schoolRegistration.process.steps.3.description")
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      <div className="fixed inset-0 opacity-5 bg-kente-stripes pointer-events-none"></div>
      
      <div className="container mx-auto py-8 px-4 md:px-6 relative z-10">
        {/* En-tête */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="mb-20 text-center"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-200 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-orange-500 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700 font-inter">{t("schoolRegistration.badge")}</span>
            <Sparkles className="w-4 h-4 text-orange-500" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight font-poppins">
            <motion.span 
              className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent block mb-2"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {t("schoolRegistration.title")}
            </motion.span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mt-8 max-w-4xl mx-auto font-medium leading-relaxed font-inter">
            {t("schoolRegistration.subtitle")}
          </p>

          {/* Ornements décoratifs */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full opacity-20"></div>
              <div className="w-8 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div className="w-8 h-2 bg-gradient-to-l from-orange-500 to-red-500 rounded-full"></div>
              <div className="w-6 h-6 bg-orange-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire d'inscription */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <Card className="bg-white/95 backdrop-blur-sm border-2 border-orange-200 shadow-african">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 font-african text-center">
                  {t("schoolRegistration.form.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("schoolRegistration.form.schoolName")} *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base"
                      placeholder={t("schoolRegistration.form.schoolNamePlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("schoolRegistration.form.schoolType")} *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base">
                      <option>{t("schoolRegistration.form.schoolTypeOptions.primary")}</option>
                      <option>{t("schoolRegistration.form.schoolTypeOptions.middle")}</option>
                      <option>{t("schoolRegistration.form.schoolTypeOptions.high")}</option>
                      <option>{t("schoolRegistration.form.schoolTypeOptions.university")}</option>
                      <option>{t("schoolRegistration.form.schoolTypeOptions.training")}</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("schoolRegistration.form.studentsCount")} *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base">
                      <option>{t("schoolRegistration.form.studentsCountOptions.under50")}</option>
                      <option>{t("schoolRegistration.form.studentsCountOptions.between50200")}</option>
                      <option>{t("schoolRegistration.form.studentsCountOptions.between200500")}</option>
                      <option>{t("schoolRegistration.form.studentsCountOptions.between5001000")}</option>
                      <option>{t("schoolRegistration.form.studentsCountOptions.over1000")}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("schoolRegistration.form.country")} *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base">
                      <option>{t("schoolRegistration.form.countryOptions.senegal")}</option>
                      <option>{t("schoolRegistration.form.countryOptions.ivoryCoast")}</option>
                      <option>{t("schoolRegistration.form.countryOptions.mali")}</option>
                      <option>{t("schoolRegistration.form.countryOptions.burkinaFaso")}</option>
                      <option>{t("schoolRegistration.form.countryOptions.niger")}</option>
                      <option>{t("schoolRegistration.form.countryOptions.other")}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("schoolRegistration.form.address")} *
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base"
                    rows={3}
                    placeholder={t("schoolRegistration.form.addressPlaceholder")}
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("schoolRegistration.form.directorName")} *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base"
                      placeholder={t("schoolRegistration.form.directorNamePlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("schoolRegistration.form.email")} *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base"
                      placeholder={t("schoolRegistration.form.emailPlaceholder")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("schoolRegistration.form.phone")} *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base"
                    placeholder={t("schoolRegistration.form.phonePlaceholder")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("schoolRegistration.form.desiredOffer")} *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base">
                    <option>{t("schoolRegistration.form.desiredOfferOptions.discovery")}</option>
                    <option>{t("schoolRegistration.form.desiredOfferOptions.wisdom")}</option>
                    <option>{t("schoolRegistration.form.desiredOfferOptions.excellence")}</option>
                  </select>
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white py-4 text-lg font-medium">
                  {t("schoolRegistration.form.submit")}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Processus d'inscription */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="space-y-8"
          >
            <Card className="bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 font-african">
                  {t("schoolRegistration.process.title")}
                </h3>
                <p className="text-lg opacity-90">
                  {t("schoolRegistration.process.subtitle")}
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2 font-african">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Card className="bg-green-50 border-2 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <h4 className="text-lg font-bold text-green-800">{t("schoolRegistration.guarantee.title")}</h4>
                </div>
                <p className="text-green-700">
                  {t("schoolRegistration.guarantee.description")}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InscriptionEcoles;
