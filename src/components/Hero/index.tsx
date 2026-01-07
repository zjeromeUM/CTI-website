type HeroProps = {
  title?: string;
};

const Hero = ({ title }: HeroProps) => {
  const hasText = Boolean(title);

  return (
    <section
      id="home"
      className={[
        "relative z-10 overflow-hidden",
        // Keep enough top padding so the fixed header doesn't cover content
        hasText
          ? "pt-[140px] pb-24 md:pt-[170px] md:pb-32"
          : "pt-[120px] pb-8 md:pt-[140px] md:pb-16",
      ].join(" ")}
      style={{
        backgroundImage: "url('/images/hero/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/20" />

      {hasText && (
        <div className="container relative z-10">
          <div className="mx-auto max-w-[900px] text-center">
            <h1
              className="
                relative
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-[var(--font-aerospace)]
                tracking-widest
                text-white
                after:mx-auto
                after:mt-4
                after:block
                after:h-[2px]
                after:w-24
                after:bg-[#02a9f7]
              "
            >
              {title}
            </h1>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
