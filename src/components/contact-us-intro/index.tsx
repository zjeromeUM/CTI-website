const ContactIntro = () => {
  return (
    <section
      id="contact"
      className="relative z-10 overflow-hidden py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-dark"
      style={{
        backgroundImage: "url('/images/hero/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-black/20" />
      <div className="container">
        <p className="mx-auto max-w-3xl text-center text-base text-body-color dark:text-white/80 sm:text-lg">
          Connect with the Connected Traffic Intelligence team to discuss partnerships,
          deployments, or questions about our technology.
        </p>
      </div>
    </section>
  );
};

export default ContactIntro;
