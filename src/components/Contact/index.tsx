"use client";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

            <form
              name="Contact"
              method="POST"
              data-netlify="true"
              onSubmit={async (e) => {
                e.preventDefault();
                setStatus("sending");

                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);

                // Prepare application/x-www-form-urlencoded body
                const params = new URLSearchParams();
                for (const [k, v] of Array.from(formData.entries())) {
                  params.append(String(k), String(v));
                }
                params.append("form-name", "Contact");

                // 1) Try AJAX submit for best UX
                try {
                  const response = await fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: params.toString(),
                  });

                  if (response.ok) {
                    setStatus("success");
                    form.reset();
                    return;
                  } else {
                    setStatus("error");
                    setErrorMessage("Submission failed");
                  }
                } catch (err) {
                  // keep going to the native fallback below
                  console.warn("AJAX submit failed, attempting native fallback", err);
                }

                // 2) Native form fallback: submit via hidden iframe so Netlify receives a real POST
                try {
                  const iframeName = "netlify-hidden-iframe";
                  let iframe = document.getElementById(iframeName) as HTMLIFrameElement | null;
                  if (!iframe) {
                    iframe = document.createElement("iframe");
                    iframe.name = iframeName;
                    iframe.id = iframeName;
                    iframe.style.display = "none";
                    document.body.appendChild(iframe);
                  }

                  const nativeForm = document.createElement("form");
                  // Submit to the absolute origin so the browser POST goes to Netlify's origin
                  // (avoids edge cases where relative '/' might be rewritten/routed differently).
                  nativeForm.action = window.location.origin + "/";
                  nativeForm.method = "POST";
                  nativeForm.target = iframeName;
                  // Ensure Netlify recognizes the POST
                  nativeForm.setAttribute("name", "Contact");
                  nativeForm.setAttribute("data-netlify", "true");

                  // Append fields as hidden inputs
                  for (const [k, v] of Array.from(formData.entries())) {
                    const input = document.createElement("input");
                    input.type = "hidden";
                    input.name = String(k);
                    input.value = String(v);
                    nativeForm.appendChild(input);
                  }

                  const hidden = document.createElement("input");
                  hidden.type = "hidden";
                  hidden.name = "form-name";
                  hidden.value = "Contact";
                  nativeForm.appendChild(hidden);

                  document.body.appendChild(nativeForm);
                  console.log("Netlify native fallback submitting to:", nativeForm.action);
                  nativeForm.submit();

                  setTimeout(() => {
                    try {
                      document.body.removeChild(nativeForm);
                    } catch {}
                  }, 3000);
                } catch (err) {
                  console.warn("Native Netlify fallback failed", err);
                }
              }}
            >
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
