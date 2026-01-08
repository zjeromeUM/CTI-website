
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import NetlifyForm from "@/components/Contact/NetlifyForm";
import Hero from "@/components/Hero";
import HomeIntro from "@/components/HomeIntro";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/About";
import MediaCoverage from "@/components/MediaCoverage";
import TechnologySpotlight from "@/components/TechnologySpotlight";
import Biography from "@/components/Biography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      {/* Hidden server-rendered form so Netlify detects the Contact form on the home page at build time */}
      <NetlifyForm />
      <ScrollUp />
      <Hero />
      <HomeIntro />
      <AboutUs />
      <TechnologySpotlight />
      <MediaCoverage />
      <Biography />
  {/* Contact moved to its own page: /contact-us */}
    </>
  );
}
