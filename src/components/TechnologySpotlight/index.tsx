import Link from "next/link";

export default function TechnologySpotlight() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-[#00487c] md:text-3xl">
            About Us
          </h2>
          <p className="mt-3 text-base text-[#00487c]/80">
            Born out of the Mobility Transformation Lab at the University of
            Michigan, we build on over 10 years of cutting-edge research in
            connected vehicle-based traffic management.
          </p>
          <div className="mx-auto mt-4 h-[2px] w-24 bg-[#88d6fa]" />
        </div>

        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-[#00487c]/90">
          <p>
            Connected vehicle (CV) data has transformed how agencies measure
            traffic signal performance, helping identify where delays occur.
            But knowing where congestion exists doesn’t always tell us{" "}
            <em>where retiming will actually help</em>. Many problem
            intersections are constrained by operational limitations, and
            today’s tools lack the ability to{" "}
            <strong>
              predict how different timing strategies will perform before
              implementation
            </strong>
            . As a result, CV data is often under-used for proactive signal
            optimization.
          </p>

          <p>
            To address this gap, researchers at the{" "}
            <strong>University of Michigan</strong> developed a traffic modeling
            approach that works even when connected vehicle penetration is low.
            By using the trajectories of a small sample of vehicles, the model
            estimates traffic demand without traditional turning-movement
            counts. In an initial deployment in Birmingham, Michigan, the system
            reduced average delay by <strong>20%</strong> and stops by{" "}
            <strong>40%</strong>—without installing any new roadside detection.
            The system is now being prototyped through a county-wide deployment
            with the <strong>Road Commission for Oakland County</strong>, funded
            by a Stage 1 <strong>SMART Grant</strong> from the U.S. DOT.
          </p>

          <div className="text-center">
            <Link
              href="https://www.nature.com/articles/s41467-024-45427-4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-[#00487c] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#02a9f7]"
            >
              Read the Research in Nature Communications
            </Link>
          </div>

          <p>
            <strong>Connected Traffic Intelligence (CTI)</strong> builds on this
            research to deliver a cloud-based signal optimization platform that{" "}
            <strong>
              continuously retimes signals using only existing CV data
            </strong>
            .
          </p>

          {/* Testimonial */}
          <blockquote className="mt-8 rounded-lg border-l-4 border-[#88d6fa] bg-[#00487c]/5 px-6 py-5 italic text-[#00487c]/90">
            “This tool addresses a critical gap in our practice by providing
            unprecedented insight into our traffic signal control performance.
            It offers significant opportunities to enhance our system by
            reducing congestion and emissions while improving safety, even with
            limited resources. We are confident that this technology will drive
            the next generation of traffic signal control, with the potential
            for nationwide implementation.”
            <footer className="mt-4 not-italic font-semibold text-[#00487c]">
              — Gary Piotrowicz, Deputy Director  
              <span className="block text-sm font-normal text-[#00487c]/70">
                Road Commission for Oakland County
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
