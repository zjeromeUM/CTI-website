export default function AboutUs() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Left: Vision */}
            <div className="rounded-xl border border-[#88d6fa]/60 bg-white p-6 shadow-sm md:p-8">
              <div className="inline-flex items-center rounded-full bg-[#88d6fa]/20 px-3 py-1 text-xs font-semibold text-[#00487c]">
                Our Vision
              </div>

              <h2 className="mt-4 text-2xl font-bold text-[#00487c] md:text-3xl">
                Smarter signal timing—at scale, without roadside detection.
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#00487c]/80">
                Connected Traffic Intelligence (CTI) exists to help agencies manage traffic
                signal timing proactively, using connected/probe vehicle data to monitor,
                diagnose, and improve operations across entire networks.
              </p>

              <div className="mt-6 h-[2px] w-24 bg-[#02a9f7]" />
            </div>

            {/* Right: What we do */}
            <div className="rounded-xl border border-[#88d6fa]/60 bg-white p-6 shadow-sm md:p-8">
              <div className="inline-flex items-center rounded-full bg-[#02a9f7]/15 px-3 py-1 text-xs font-semibold text-[#00487c]">
                What We Do
              </div>

              <p className="mt-4 text-base leading-relaxed text-[#00487c]/80">
                CTI’s platform turns vehicle trajectory data into actionable insights—so
                agencies can understand performance, identify where timing is breaking down,
                and target retiming efforts where they’ll have the greatest impact.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-[#00487c]/80">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#02a9f7]" />
                  Network-wide visibility using connected/probe vehicle data
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#02a9f7]" />
                  Detector-free monitoring and timing support
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#02a9f7]" />
                  Prioritization tools to focus resources on the right corridors
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#88d6fa] px-3 py-1 text-xs font-semibold text-[#00487c]">
                  Agencies
                </span>
                <span className="rounded-full border border-[#88d6fa] px-3 py-1 text-xs font-semibold text-[#00487c]">
                  MPOs
                </span>
                <span className="rounded-full border border-[#88d6fa] px-3 py-1 text-xs font-semibold text-[#00487c]">
                  Consultants
                </span>
                <span className="rounded-full border border-[#88d6fa] px-3 py-1 text-xs font-semibold text-[#00487c]">
                  Technology partners
                </span>
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-[#00487c]/75">
            Our goal is simple: make signal timing management more scalable, data-driven, and
            responsive—so communities spend less time in traffic and agencies can do more
            with the resources they already have.
          </p>
        </div>
      </div>
    </section>
  );
}
