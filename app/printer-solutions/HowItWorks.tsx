"use client";

import React from "react";
import { MessageCircleMore, Search, Wrench } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Pick the problem",
    description:
      "Start with the issue you are seeing, whether it is a connection problem, a scanner issue, or a paper jam.",
    icon: <Search size={26} />,
  },
  {
    id: "02",
    title: "Follow the guide",
    description:
      "Each step is written in plain language so you can work through it without stress.",
    icon: <MessageCircleMore size={26} />,
  },
  {
    id: "03",
    title: "Get back to printing",
    description:
      "Once the final step is done, your printer should be ready to use again.",
    icon: <Wrench size={26} />,
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Simple process
          </span>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl tracking-tight" style={{fontFamily: "'Poppins', 'Inter', sans-serif"}}>
            How it works
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base font-light" style={{fontFamily: "'Poppins', 'Inter', sans-serif"}}>
            No confusing jargon. Just a clear path to the fix you need.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="absolute right-6 top-6 text-4xl font-extrabold text-slate-100 group-hover:text-blue-100">
                {step.id}
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                {step.icon}
              </div>

              <h3 className="mt-7 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;