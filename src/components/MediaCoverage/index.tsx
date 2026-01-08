"use client";

import { useState } from "react";
import Link from "next/link";

type CoverageItem = {
  type: "video" | "article";
  title: string;
  source: string;
  date: string;
  href: string;
};

const coverage: CoverageItem[] = [
  {
    type: "video",
    title: "University of Michigan testing traffic system for faster commute",
    source: "YouTube",
    date: "November 13, 2025",
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
    title: "New traffic light system could dramatically reduce congestion",
    source: "Jalopnik",
    date: "Nov 29, 2025",
    href: "https://www.jalopnik.com/2036036/new-traffic-light-system-reducing-congestion/",
  },
  {
    type: "article",
    title: "Traffic technology deployed across metro Detroit to shrink commutes",
    source: "FOX 2 Detroit",
    date: "Nov 13, 2025",
    href: "https://www.fox2detroit.com/news/traffic-technology-deployed-metro-detroit-shrinking-commutes-reducing-stops.amp",
  },
  {
    type: "article",
    title: "University of Michigan traffic light study in Oakland County",
    source: "Detroit Free Press",
    date: "Nov 6, 2025",
    href: "https://www.freep.com/story/money/cars/2025/11/06/university-of-michigan-traffic-light-study-oakland-county/87073946007/",
  },
  {
    type: "article",
    title: "Connected Traffic Intelligence deploys traffic signal technology",
    source: "Crain’s Detroit Business",
    date: "Nov 5, 2025",
    href: "https://www.crainsdetroit.com/technology/connected-traffic-intelligence-deploys-traffic-signal-tech",
  },
  {
    type: "article",
    title: "How Oakland County and U-M are using GPS data to recalibrate traffic lights",
    source: "WXYZ Channel 7",
    date: "Nov 5, 2025",
    href: "https://www.wxyz.com/news/how-oakland-county-u-m-are-using-gps-data-to-recalibrate-traffic-lights-reduce-crashes-wait-times",
  },
  {
    type: "article",
    title: "University of Michigan researchers use vehicle GPS data to cut traffic delays",
    source: "ClickOnDetroit (WDIV)",
    date: "Oct 31, 2025",
    href: "https://www.clickondetroit.com/all-about-ann-arbor/2025/10/31/university-of-michigan-researchers-use-vehicle-gps-data-to-cut-traffic-delays-in-oakland-county/",
  },
];

const DEFAULT_LIMIT = 6;

export default function MediaCoverage() {
  const [expanded, setExpanded] = useState(false);

  const itemsToShow = expanded ? coverage : coverage.slice(0, DEFAULT_LIMIT);
  const canExpand = coverage.length > DEFAULT_LIMIT;

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[#00487c] md:text-3xl">
            In the News
          </h2>
          <p className="mt-3 text-base text-[#00487c]/80">
            Recent media coverage highlighting our technology.
          </p>
          <div className="mx-auto mt-4 h-[2px] w-24 bg-[#88d6fa]" />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {itemsToShow.map((item) => (
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

              <p className="mt-2 text-sm text-[#00487c]/75">{item.source}</p>

              <div className="mt-4 text-sm font-semibold text-[#02a9f7]">
                Read / watch →
              </div>
            </Link>
          ))}
        </div>

        {canExpand && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-md border border-[#88d6fa] px-6 py-3 text-sm font-semibold text-[#00487c] transition hover:border-[#02a9f7]"
            >
              {expanded ? "Show fewer items" : "View all media coverage"}
              <span
                className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                ↓
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
