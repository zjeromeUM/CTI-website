import Image from "next/image";

const Biography = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <div className="mx-auto max-w-6xl rounded-xl border border-[#88d6fa]/60 bg-white/90 p-6 shadow-sm backdrop-blur-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            {/* Photo */}
            <div className="md:col-span-4">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-[#88d6fa]/60 bg-[#88d6fa]/15">
                {/* Replace src with your photo later (e.g., /images/team/zachary.jpg) */}
                <Image
                  src="/images/headshot/portrait-zachary-jerome_54938433526_o.jpg"
                  alt="Headshot of Zachary Jerome"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-[#00487c]">
                  Zachary Jerome
                </p>
                <p className="text-xs text-[#00487c]/70">
                  Co-Founder & CEO • Connected Traffic Intelligence
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-8">
              <div className="inline-flex items-center rounded-full bg-[#02a9f7]/15 px-3 py-1 text-xs font-semibold text-[#00487c]">
                Biography
              </div>

              <h2 className="mt-4 text-2xl font-bold text-[#00487c] md:text-3xl">
                About Zachary
              </h2>

              <div className="mt-4 space-y-4 text-base leading-relaxed text-[#00487c]/80">
                <p>
                  [Dummy text] Zachary Jerome is the Co-Founder and CEO of Connected Traffic
                  Intelligence (CTI), where he works with transportation agencies to improve
                  arterial operations using data-driven signal timing management.
                </p>
                <p>
                  [Dummy text] His work focuses on leveraging connected/probe vehicle data to
                  monitor, diagnose, and optimize signal timing without relying on permanent
                  roadside detection infrastructure.
                </p>
                <p>
                  [Dummy text] Prior to CTI, Zachary conducted research at the University of
                  Michigan, developing methods for scalable, network-wide traffic signal
                  performance monitoring and optimization.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#88d6fa] px-3 py-1 text-xs font-semibold text-[#00487c]">
                  Traffic Operations
                </span>
                <span className="rounded-full border border-[#88d6fa] px-3 py-1 text-xs font-semibold text-[#00487c]">
                  Connected Vehicle Data
                </span>
                <span className="rounded-full border border-[#88d6fa] px-3 py-1 text-xs font-semibold text-[#00487c]">
                  Signal Timing Management
                </span>
              </div>

              {/* Optional CTA row (leave or remove) */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact-form"
                  className="rounded-md bg-[#00487c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#02a9f7]"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="rounded-md border border-[#88d6fa] bg-white/60 px-5 py-3 text-sm font-semibold text-[#00487c] transition hover:border-[#02a9f7]"
                >
                  LinkedIn (placeholder)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
