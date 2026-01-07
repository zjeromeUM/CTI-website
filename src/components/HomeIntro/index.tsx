const HomeIntro = () => {
  return (
    <section className="relative z-10 -mt-24 pb-10 md:-mt-28 md:pb-14 lg:-mt-32 lg:pb-16">
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
