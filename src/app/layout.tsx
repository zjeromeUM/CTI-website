"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "../styles/index.css";
import { Providers } from "./providers";
import NetlifyForm from "@/components/Contact/NetlifyForm";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Pages where you want the header to overlay the hero
  const heroPages = ["/", "/contact-us"];
  const isHeroPage = pathname ? heroPages.includes(pathname) : false;


  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <NetlifyForm />

        <Providers>
          <Header />

          <main className={isHeroPage ? "" : "pt-[80px] lg:pt-[96px]"}>
            {children}
          </main>

          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
