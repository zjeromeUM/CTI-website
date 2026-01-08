import Head from "next/head";

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

      <main style={{ padding: "2rem", maxWidth: 640, margin: "0 auto" }}>
        <h1>Contact Us</h1>

        <form
          name="Contact"
          method="POST"
          action="/contact-us"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* Required for Netlify */}
          <input type="hidden" name="form-name" value="Contact" />
          <input type="hidden" name="bot-field" />

          <label>
            Name
            <input type="text" name="name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" required />
          </label>

          <label>
            Company
            <input type="text" name="company" />
          </label>

          <label>
            Message
            <textarea name="message" required />
          </label>

          <button type="submit">Send</button>
        </form>
      </main>
    </>
  );
}
