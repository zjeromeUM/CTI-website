const Hero = ({ showContent = true }) => {
  return (
    <section className="relative h-screen bg-cover bg-center">
      {/* background image / overlay stays */}

      {showContent && (
        <div className="container relative z-10">
          <h1>Some headline</h1>
          <p>Some subtitle</p>
        </div>
      )}
    </section>
  );
};

export default Hero;
