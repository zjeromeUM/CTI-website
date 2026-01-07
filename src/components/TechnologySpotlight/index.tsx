import Link from "next/link";

export default function TechnologySpotlight() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-[#00487c] md:text-3xl">
            Technology Spotlight
          </h2>
          <p className="mt-3 text-base text-[#00487c]/80">
            Groundbreaking research from the University of Michigan, published
            in <em>Nature Communications</em>, underpins the core approach
            behind Connected Traffic Intelligence.
          </p>
          <div className="mx-auto mt-4 h-[2px] w-24 bg-[#88d6fa]" />
        </div>

        <div className="mx-auto max-w-3xl text-[#00487c]/90 space-y-6 text-base leading-relaxed">
          <p>
            A recent study published in <strong>Nature Communications</strong> 
            demonstrates how connected vehicle trajectory data can be used
            to measure and optimize signal timing performance across an
            entire traffic network — even at relatively low data
            penetration rates. This research bridges transportation
            engineering and modern data science to provide agencies with
            scalable, data-driven tools for timing plan evaluation and
            improvement without dependence on roadside detection.
          </p>
          <p>
            The implications of this work are central to the mission of CTI:
            to provide agencies with accessible, actionable insights from
            connected vehicle data that support proactive, network-wide
            signal timing optimization.
          </p>

          <div className="text-center">
            <Link
              href="https://www.nature.com/articles/s41467-024-45427-4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-[#00487c] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#02a9f7]"
            >
              Read the Research
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
