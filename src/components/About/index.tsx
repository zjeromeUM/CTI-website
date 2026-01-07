export default function AboutUs() {
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

      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Left: Vision */}
            <div className="rounded-xl border border-[#88d6fa]/60 bg-white/90 backdrop-blur-sm p-6 shadow-sm">
              <div className="inline-flex items-center rounded-full bg-[#88d6fa]/20 px-3 py-1 text-xs font-semibold text-[#00487c]">
                Our Vision
              </div>

              <h2 className="mt-4 text-2xl font-bold text-[#00487c] md:text-3xl">
                Transforming traffic networks through connected vehicles.
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#00487c]/80">
                Connected Traffic Intelligence LLC (CTI) makes vehicle telematics 
                data (probe or vehicle trajectory data) more accessible to traffic engineers. 
                We specialize in integrating traffic flow principles with advancements in AI to enable 
                transformative solutions to traffic signal performance monitoring, diagnostics, and optimization, 
                even at low penetration rates. 
              </p>

              <div className="mt-6 h-[2px] w-24 bg-[#02a9f7]" />
            </div>

            {/* Right: What we do */}
            <div className="rounded-xl border border-[#88d6fa]/60 bg-white/90 backdrop-blur-sm p-6 shadow-sm">
              <div className="inline-flex items-center rounded-full bg-[#02a9f7]/15 px-3 py-1 text-xs font-semibold text-[#00487c]">
                What We Do
              </div>

              <p className="mt-4 text-base leading-relaxed text-[#00487c]/80">
                CTI’s platform turns vehicle telematics data into actionable insights—so
                agencies can understand performance, identify where timing is breaking down,
                and target retiming efforts where they’ll have the greatest impact.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-[#00487c]/80">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#02a9f7]" />
                  Network-wide visibility using connected and probe vehicle data
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#02a9f7]" />
                  Hardware-free monitoring and signal timing management
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#02a9f7]" />
                  Timing plan optimization with as little as 5% penetration
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#02a9f7]" />
                  Prioritize tools to focus resources on the right intersections
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#88d6fa] px-3 py-1 text-xs font-semibold text-[#00487c]">
                  Agencies
                </span>
                <span className="rounded-full border border-[#88d6fa] px-3 py-1 text-xs font-semibold text-[#00487c]">
                  Consultants
                </span>
                <span className="rounded-full border border-[#88d6fa] px-3 py-1 text-xs font-semibold text-[#00487c]">
                  Vendors
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
