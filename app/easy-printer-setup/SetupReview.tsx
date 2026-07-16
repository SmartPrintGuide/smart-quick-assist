"use client";

import React from "react";
import {
  ArrowRight,
  Check,
  Zap,
  Smartphone,
  Gauge,
  Star,
} from "lucide-react";

const features = [
  {
    icon: <Check size={24} />,
    title: "Trusted guidance",
    desc: "Plain-language setup and troubleshooting information.",
  },
  {
    icon: <Zap size={24} />,
    title: "Faster navigation",
    desc: "Find common printer topics without unnecessary steps.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile friendly",
    desc: "Comfortable reading and navigation on smaller screens.",
  },
  {
    icon: <Gauge size={24} />,
    title: "Clear next steps",
    desc: "Each guide should tell visitors exactly what to do next.",
  },
];

function SetupReview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full text-sm font-semibold text-[#1965D9]">
            Why choose us
          </span>

          <h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900"
            style={{ fontFamily: "'Poppins','Inter',sans-serif" }}
          >
            Clear guidance without the confusion
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Designed to help visitors find relevant information quickly on desktop, tablet, or mobile.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#1965D9]">
                {item.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* Testimonial Section */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr]">

          {/* Left - Testimonial */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  fill="currentColor"
                />
              ))}
            </div>

            <blockquote className="mt-6 text-lg leading-8 text-slate-800">
              "The setup instructions were easy to understand, and I connected my printer to Wi-Fi without unnecessary technical language."
            </blockquote>

            <p className="mt-6 text-sm text-slate-500">
              Example customer feedback — replace with a verified review before publishing.
            </p>

          </div>

          {/* Right - Features */}
          <div className="space-y-6">

            {/* Simple */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1965D9]">
                Simple
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Easy navigation and clear page structure.
              </p>
            </div>

            {/* Responsive */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1965D9]">
                Responsive
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Optimised for desktop, tablet, and mobile.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SetupReview;