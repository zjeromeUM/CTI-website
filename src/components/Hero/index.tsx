type HeroProps = {
  title?: string;
};

const Hero = ({ title }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      style={{
        backgroundImage: "url('/images/hero/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {title && (
        <div className="relative z-10 flex items-center justify-center">
          <h1
            className="
              relative
              text-center
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
      )}
    </section>
  );
};

export default Hero;
