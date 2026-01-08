import Head from "next/head";
import ContactUsPage from "@/pages/ContactUsPage";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | Connected Traffic Intelligence</title>
        <meta
          name="description"
          content="Get in touch with Connected Traffic Intelligence"
        />
      </Head>

      <ContactUsPage />
    </>
  );
}
