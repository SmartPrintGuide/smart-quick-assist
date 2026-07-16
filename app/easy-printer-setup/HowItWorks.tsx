"use client";

import React from "react";
import { Check, FileText, Search } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Choose your issue",
    description:
      "Select the printer problem that best matches what you are experiencing.",
    icon: <Search size={26} />,
  },
  {
    id: "02",
    title: "Follow the guide",
    description:
      "Work through simple instructions designed for everyday printer users.",
    icon: <FileText size={26} />,
  },
  {
    id: "03",
    title: "Start printing again",
    description:
      "Complete the recommended steps and check whether the issue is resolved.",
    icon: <Check size={26} />,
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
            A clearer way to solve printer problems
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base font-light" style={{fontFamily: "'Poppins', 'Inter', sans-serif"}}>
            No confusing technical language. Choose your issue, follow the steps, and get back to printing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                STEP {step.id}
              </span>

              <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                {step.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;