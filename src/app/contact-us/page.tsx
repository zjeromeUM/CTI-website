import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactIntro from "@/components/contact-us-intro";
import Contact from "@/components/Contact/index";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Connected Traffic Intelligence",
  description: "Get in touch with Connected Traffic Intelligence",
  openGraph: {
    title: "Connected Traffic Intelligence",
    description: "Transforming traffic networks through connected vehicles",
    url: "https://traffic-intelligence.com",
    siteName: "Connected Traffic Intelligence",
    images: [
      {
        url: "https://traffic-intelligence.com/og-image.jpg",
        width: 1132,
        height: 1132,
      },
    ],
    type: "website",},

  icons: {
    icon: "/favicon.ico",              // browser tab icon
    shortcut: "/favicon.ico",          // fallback
  },
};

const ContactUsPage = () => {
  return (
    <>
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
