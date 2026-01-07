import { aerospace } from "@/app/fonts";

const HomeIntro = () => {
  return (
    <section
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
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className='
              ${aerospace.className}
              tracking-widest
              text-[#88d6fa]
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              leading-tight
              drop-shadow
            '
          >
            Connected Traffic Intelligence
          </h1>

          <div className="mx-auto mt-5 h-[2px] w-24 bg-[#88d6fa]" />
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
