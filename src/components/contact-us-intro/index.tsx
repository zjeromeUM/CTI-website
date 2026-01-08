const ContactIntro = () => {
  return (
    <section
      id="contact"
      className="relative z-10 overflow-hidden py-8 md:py-10 lg:py-12"
      style={{
        backgroundImage: "url('/images/hero/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/20" />

      <div className="container relative z-10">
        <p
          className="
            mx-auto
            max-w-4xl
            text-center
            text-lg
            sm:text-xl
            md:text-2xl
            lg:text-3xl
            font-medium
            text-white
            leading-relaxed
          "
        >
          Connect with the Connected Traffic Intelligence team to discuss partnerships,
          deployments, or questions about our technology.
        </p>
      </div>
    </section>
  );
};

export default ContactIntro;
