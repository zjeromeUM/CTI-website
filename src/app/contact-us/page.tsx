import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactIntro from "@/components/contact-us-intro";
import Contact from "@/components/Contact";
import NetlifyForm from "@/components/Contact/NetlifyForm";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Connected Traffic Intelligence",
  description: "Get in touch with Connected Traffic Intelligence",
};

const ContactUsPage = () => {
  return (
    <>
      {/* Hidden server-rendered form so Netlify detects the Contact form at build time */}
      <NetlifyForm />
      <ScrollUp />
      <Hero />
      <ContactIntro />

      {/* <Breadcrumb
        pageName="Contact Us"
        description="Reach out to us with questions, enquiries or partnership opportunities."
      /> */}

      <Contact />
    </>
  );
};

export default ContactUsPage;
