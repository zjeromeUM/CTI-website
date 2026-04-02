
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
  title: "Connected Traffic Intelligence",
  description: "Transforming traffic networks through connected vehicles",
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
    type: "website"},

  icons: {
    icon: "/favicon.ico",              // browser tab icon
    shortcut: "/favicon.ico",          // fallback
  },
  // other metadata
};

export default function Home() {
  return (
    <>
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
