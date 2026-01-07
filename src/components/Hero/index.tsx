const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        z-10
        h-[72px]
        lg:h-[88px]
        overflow-hidden
      "
      style={{
        backgroundImage: "url('/images/hero/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/20" />
    </section>
  );
};

export default Hero;
