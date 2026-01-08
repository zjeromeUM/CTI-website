"use client";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Progressive submit handler: try AJAX for better UX, but fall back to a native POST
  // so Netlify Forms reliably receives submissions if the AJAX request fails.
  const handleSubmit = (e: any) => {
    // Controlled native submission: programmatically submit to a hidden iframe and
    // detect onload; if iframe doesn't load within timeout (likely blocked by an
    // extension), fall back to opening a cloned form in a new tab so Netlify still
    // receives the native POST.
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const form = e.target as HTMLFormElement;
    const iframeName = "netlify-hidden-iframe";

    let iframe = document.getElementById(iframeName) as HTMLIFrameElement | null;
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.name = iframeName;
      iframe.id = iframeName;
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }

    let loaded = false;
    const cleanup = () => {
      try {
        if (iframe && iframe.parentNode) iframe.parentNode.removeChild(iframe);
      } catch {}
    };

    // onload indicates the POST completed and the iframe received the response.
    const onload = () => {
      loaded = true;
      setStatus("success");
      try {
        form.reset();
      } catch {}
      // cleanup after a short delay so Netlify finished processing
      setTimeout(cleanup, 1500);
      clearTimeout(fallbackT);
    };

    const onerror = (err: any) => {
      console.warn("Iframe error during form submit", err);
    };

    try {
      iframe.addEventListener("load", onload);
      iframe.addEventListener("error", onerror);
    } catch (err) {
      // ignore
    }

    // Submit the form programmatically (native POST) targeting the hidden iframe.
    try {
      form.target = iframeName;
      // Use requestAnimationFrame to ensure target is applied before submit
      requestAnimationFrame(() => {
        try {
          form.submit();
        } catch (submitErr) {
          console.warn("Programmatic form.submit() failed, will attempt fallback", submitErr);
        }
      });
    } catch (err) {
      console.warn("Failed to set target/submit to iframe, will attempt fallback", err);
    }

    // If iframe doesn't report load within 2500ms, assume it's blocked and fall back.
    const fallbackT = setTimeout(() => {
      if (loaded) return;
      console.warn("Iframe did not load in time — using _blank fallback to ensure delivery");

      // Clone form and submit to a new tab so the native POST goes to Netlify.
      try {
        const formData = new FormData(form);
        const clone = document.createElement("form");
        clone.method = "POST";
        clone.action = window.location.origin + "/";
        clone.target = "_blank";
        clone.style.display = "none";

        for (const [k, v] of Array.from(formData.entries())) {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = String(k);
          input.value = String(v as any);
          clone.appendChild(input);
        }

        const hidden = document.createElement("input");
        hidden.type = "hidden";
        hidden.name = "form-name";
        hidden.value = "Contact";
        clone.appendChild(hidden);

        document.body.appendChild(clone);
        clone.submit();
        setTimeout(() => {
          try {
            document.body.removeChild(clone);
          } catch {}
        }, 3000);
      } catch (err) {
        console.error("_blank fallback submit failed", err);
        setStatus("error");
        setErrorMessage("Submission failed; please try again or disable interfering extensions.");
      } finally {
        try {
          // remove listeners and iframe if present
          if (iframe) {
            iframe.removeEventListener("load", onload);
            iframe.removeEventListener("error", onerror);
            try {
              if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
            } catch {}
          }
        } catch {}
      }
    }, 2500);
  };

  return (
    <section
      id="contact-form"
      className="relative z-10 overflow-hidden py-10 md:py-14 lg:py-16"
      style={{
        backgroundImage: "url('/images/hero/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/20" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-xs border border-[#88d6fa]/60 bg-white/95 px-6 py-8 shadow-three backdrop-blur-sm sm:px-10 sm:py-10">
            <h2 className="mb-6 text-center text-2xl font-bold text-[#00487c]">
              Get in Touch
            </h2>

            {status === "success" && (
              <div className="mb-6 rounded-xs border border-[#88d6fa] bg-[#88d6fa]/20 p-4 text-[#00487c]">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 rounded-xs border border-red-200 bg-red-50 p-4 text-red-700">
                Error: {errorMessage}. Please try again.
              </div>
            )}

            <form name="Contact" method="POST" data-netlify="true" action="/" onSubmit={handleSubmit}>
              {/* Ensure Netlify sees the form-name on runtime native submits */}
              <input type="hidden" name="form-name" value="Contact" />
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#00487c]">
                    Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xs border border-[#88d6fa] bg-white px-5 py-3 text-base text-[#00487c] outline-none placeholder:text-[#00487c]/50 focus:border-[#02a9f7] focus:ring-2 focus:ring-[#02a9f7]/25"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#00487c]">
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xs border border-[#88d6fa] bg-white px-5 py-3 text-base text-[#00487c] outline-none placeholder:text-[#00487c]/50 focus:border-[#02a9f7] focus:ring-2 focus:ring-[#02a9f7]/25"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#00487c]">
                    Company
                  </label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Enter your company name"
                    className="w-full rounded-xs border border-[#88d6fa] bg-white px-5 py-3 text-base text-[#00487c] outline-none placeholder:text-[#00487c]/50 focus:border-[#02a9f7] focus:ring-2 focus:ring-[#02a9f7]/25"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#00487c]">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Enter your message"
                    className="w-full resize-none rounded-xs border border-[#88d6fa] bg-white px-5 py-3 text-base text-[#00487c] outline-none placeholder:text-[#00487c]/50 focus:border-[#02a9f7] focus:ring-2 focus:ring-[#02a9f7]/25"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-xs bg-[#00487c] py-3 text-base font-medium text-white transition hover:bg-[#02a9f7] focus:outline-none focus:ring-2 focus:ring-[#02a9f7]/35 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
