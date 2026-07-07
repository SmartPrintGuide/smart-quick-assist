"use client";

import React from "react";
import {
  ArrowRight,
  Droplets,
  FileWarning,
  Printer,
  ScanLine,
  Wrench,
  Wifi,
} from "lucide-react";

const issues = [
  {
    icon: <Wifi size={24} />,
    title: "Printer won't connect",
    desc: "Reconnect your printer to Wi-Fi or fix a dropped connection after a network change.",
  },
  {
    icon: <Printer size={24} />,
    title: "Printer is offline",
    desc: "Bring your printer back online and get it ready to print again.",
  },
  {
    icon: <ScanLine size={24} />,
    title: "Scanner problems",
    desc: "Restore scanning quickly when the scanner stops responding or shows errors.",
  },
  {
    icon: <Droplets size={24} />,
    title: "Print quality issues",
    desc: "Fix faded prints, streaks, missing colors, or blurry pages.",
  },
  {
    icon: <FileWarning size={24} />,
    title: "Paper feed errors",
    desc: "Clear jams and solve paper loading issues without stress.",
  },
  {
    icon: <Wrench size={24} />,
    title: "Setup and drivers",
    desc: "Install your printer and download the right drivers in a few simple steps.",
  },
];

function CommonIssues() {
  return (
    <section id="common-issues" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Popular solutions
          </span>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl tracking-tight" style={{fontFamily: "'Poppins', 'Inter', sans-serif"}}>
            Find the printer problem you are facing
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base font-light" style={{fontFamily: "'Poppins', 'Inter', sans-serif"}}>
            Choose the issue that matches what you are seeing and follow the next step.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {issues.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  {item.icon}
                </div>
                <ArrowRight size={18} className="text-slate-300 transition group-hover:text-blue-600" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
              <button className="mt-6 font-semibold text-blue-600 hover:underline">
                Read the fix →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommonIssues;