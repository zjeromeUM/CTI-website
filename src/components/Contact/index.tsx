"use client";

const Contact = () => {
  return (
    <section
      id="contact"
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
          <div className="rounded-xs border border-[#88d6fa]/60 bg-white/95 px-6 py-10 shadow-three backdrop-blur-sm sm:px-10">
            <h2 className="mb-4 text-center text-2xl font-bold text-[#00487c]">
              Get in Touch
            </h2>

            <div className="mt-6 text-center">
              <p className="text-lg font-medium text-[#00487c]">
                Email us at{" "}
                <a
                  href="mailto:contact@traffic-intelligence.com"
                  className="underline decoration-[#02a9f7] underline-offset-4 transition hover:text-[#02a9f7]"
                >
                  contact@traffic-intelligence.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
