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
                <Image
                  src="/images/headshot/portrait-zachary-jerome_54938433526_o.jpg"
                  alt="Headshot of Zachary Jerome"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={95}
                  className="object-cover object-top"
                />
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-[#00487c]">
                  Zachary Jerome, PhD
                </p>
                <p className="text-xs text-[#00487c]/70">
                  Co-founder & CEO • Connected Traffic Intelligence
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-8">
              <div className="inline-flex items-center rounded-full bg-[#02a9f7]/15 px-3 py-1 text-xs font-semibold text-[#00487c]">
                Biography
              </div>

              <h2 className="mt-4 text-2xl font-bold text-[#00487c] md:text-3xl">
                About the CEO
              </h2>

              <div className="mt-4 space-y-4 text-base leading-relaxed text-[#00487c]/80">
              <p>
                Zachary Jerome is the Co-founder and CEO of Connected Traffic
                Intelligence (CTI), where he works with transportation agencies,
                consultants, and vendors to improve traffic management through the
                use of connected vehicle data.
              </p>
              <p>
                Zachary earned his Ph.D. in 2025 from the University of Michigan, where
                he conducted research in Dr. Henry Liu's Mobility Transformation Lab.
                His work has been featured in major news outlets, including the
                Associated Press and <em>The Wall Street Journal</em>, and published in
                <em> Nature Communications</em>.
              </p>
              <p>
                His work has also been recognized through a variety of awards. In
                2024, he received ITE's Daniel B. Fambro Student Paper Award for his
                paper, <em>Determining Minimum Change Intervals from Vehicle Trajectory Data</em>.
                In 2025, Zachary was honored with ITS Michigan's Rising Star Award in
                recognition of his significant contributions to the field of
                intelligent transportation systems.
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

              {/* LinkedIn */}
              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/zwj/"
                  aria-label="LinkedIn profile for Zachary Jerome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#00487c] transition hover:text-[#02a9f7]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 17 16"
                    className="fill-current"
                  >
                    <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                  </svg>
                  <span className="text-sm font-semibold">LinkedIn</span>
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
