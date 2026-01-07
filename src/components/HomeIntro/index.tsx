const HomeIntro = () => {
  return (
    <section
      id="contact"
      className="relative z-10 overflow-hidden py-20 md:py-24 lg:py-32"
      style={{
        backgroundImage: "url('/images/hero/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/20" />

      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className="
              font-[var(--font-aerospace)]
              tracking-widest
              text-white
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              leading-tight
              drop-shadow
            "
          >
            Connected Traffic Intelligence
          </h1>

          <div className="mx-auto mt-5 h-[2px] w-24 bg-[#02a9f7]" />
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
