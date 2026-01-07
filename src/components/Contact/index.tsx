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
      <div className="pointer-events-none absolute inset-0 bg-black/25" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-xs bg-white px-6 py-8 shadow-three sm:px-10 sm:py-10 dark:bg-gray-dark">
            <h2 className="mb-6 text-center text-2xl font-bold text-[#00487c] dark:text-white">
              Get in Touch
            </h2>

            {status === "success" && (
              <div className="mb-6 rounded-xs bg-[#88d6fa]/20 p-4 text-[#00487c]">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 rounded-xs bg-red-500/10 p-4 text-red-600 dark:text-red-400">
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
                const params = new URLSearchParams(new FormData(form) as any);
                params.append("form-name", "Contact");

                try {
                  const response = await fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: params.toString(),
                  });

                  if (response.ok) {
                    setStatus("success");
                    form.reset();
                  } else {
                    setStatus("error");
                    setErrorMessage("Submission failed");
                  }
                } catch {
                  setStatus("error");
                  setErrorMessage("Network error");
                }
              }}
            >
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#00487c] dark:text-white">
                    Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xs border border-[#88d6fa] bg-[#f8f8f8] px-5 py-3 text-base outline-none focus:border-[#02a9f7]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#00487c] dark:text-white">
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xs border border-[#88d6fa] bg-[#f8f8f8] px-5 py-3 text-base outline-none focus:border-[#02a9f7]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#00487c] dark:text-white">
                    Company
                  </label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Enter your company name"
                    className="w-full rounded-xs border border-[#88d6fa] bg-[#f8f8f8] px-5 py-3 text-base outline-none focus:border-[#02a9f7]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#00487c] dark:text-white">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Enter your message"
                    className="w-full resize-none rounded-xs border border-[#88d6fa] bg-[#f8f8f8] px-5 py-3 text-base outline-none focus:border-[#02a9f7]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-xs bg-[#00487c] py-3 text-base font-medium text-white transition hover:bg-[#02a9f7] disabled:cursor-not-allowed disabled:opacity-50"
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
