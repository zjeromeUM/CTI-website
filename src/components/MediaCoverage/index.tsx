import Link from "next/link";

type CoverageItem = {
  type: "video" | "article";
  title: string;
  source: string;
  date: string;
  href: string;
  // Optional: add a thumbnail later if you want
};

const coverage: CoverageItem[] = [
  {
    type: "video",
    title: "University of Michigan testing traffic system for faster commute",
    source: "YouTube",
    date: "Video",
    href: "https://www.youtube.com/watch?v=6kQK63vWTQw",
  },
  {
    type: "article",
    title: "Michigan traffic signals use vehicle GPS for timing",
    source: "ITS International",
    date: "Dec 5, 2025",
    href: "https://www.itsinternational.com/news/michigan-traffic-signals-use-vehicle-gps-timing",
  },
  {
    type: "article",
    title: "University of Michigan traffic light study in Oakland County",
    source: "Detroit Free Press",
    date: "Nov 6, 2025",
    href: "https://www.freep.com/story/money/cars/2025/11/06/university-of-michigan-traffic-light-study-oakland-county/87073946007/",
  },
];

export default function MediaCoverage() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[#00487c] md:text-3xl">
            In the News
          </h2>
          <p className="mt-3 text-base text-[#00487c]/80">
            Recent media coverage highlighting CTI’s detector-free approach to signal timing.
          </p>
          <div className="mx-auto mt-4 h-[2px] w-24 bg-[#88d6fa]" />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {coverage.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-[#88d6fa]/60 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#02a9f7] hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.type === "video"
                      ? "bg-[#02a9f7]/15 text-[#00487c]"
                      : "bg-[#88d6fa]/20 text-[#00487c]"
                  }`}
                >
                  {item.type === "video" ? "Video" : "Article"}
                </span>
                <span className="text-xs text-[#00487c]/70">{item.date}</span>
              </div>

              <h3 className="mt-3 text-base font-semibold text-[#00487c] group-hover:text-[#02a9f7]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-[#00487c]/75">
                {item.source}
              </p>

              <div className="mt-4 text-sm font-semibold text-[#02a9f7]">
                Read / watch →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
