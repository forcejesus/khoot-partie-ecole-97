
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactQuote from "@/components/contact/ContactQuote";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <Navbar />
      
      {/* Background pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ea580c%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none opacity-40"></div>
      
      <div className="container mx-auto py-12 px-4 md:px-6 relative z-10">
        <ContactHeader />
        <ContactFAQ />
        <ContactInfo />
        <ContactQuote />
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
