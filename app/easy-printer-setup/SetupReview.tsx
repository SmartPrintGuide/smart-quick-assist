"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Headphones,
  ShieldCheck,
  Star,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Trusted Guidance",
    desc: "Simple and reliable printer setup instructions anyone can follow.",
  },
  {
    icon: <Clock3 size={24} />,
    title: "Fast Solutions",
    desc: "Find the right troubleshooting steps in just a few minutes.",
  },
  {
    icon: <CheckCircle2 size={24} />,
    title: "Easy Steps",
    desc: "Clear guides that help you solve problems without confusion.",
  },
  {
    icon: <Headphones size={24} />,
    title: "Expert Support",
    desc: "Reach experienced support whenever you need extra assistance.",
  },
];

function SetupReview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#1965D9]">
            Why Choose Us
          </span>

          <h2
            className="mt-6 text-4xl font-bold tracking-tight text-slate-900"
            style={{ fontFamily: "'Poppins','Inter',sans-serif" }}
          >
            Printer Help That
            <br />
            Actually Makes Sense
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-slate-600">
            Whether you're installing a new printer or fixing connection
            problems, we provide clear guides and reliable support to help
            you every step of the way.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,.12)]"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 text-[#1965D9] transition-all duration-300 group-hover:bg-[#1965D9] group-hover:text-white">

                {item.icon}

              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* Testimonial Section */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">


                    {/* Left - Testimonial */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_15px_45px_rgba(15,23,42,.08)]">

            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  fill="currentColor"
                />
              ))}
            </div>

            <blockquote className="mt-6 text-lg leading-8 text-slate-700">
              "The setup guide was incredibly easy to follow. I connected
              my printer to Wi-Fi in less than five minutes without
              installing anything extra."
            </blockquote>

            <div className="mt-8 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#1965D9] to-blue-500 text-lg font-bold text-white">
                M
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Michael Anderson
                </h4>

                <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                  <CheckCircle2
                    size={15}
                    className="text-green-500"
                  />
                  Verified User
                </p>
              </div>

            </div>

          </div>

          {/* Right - Stats */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,.06)]">

              <h3 className="text-4xl font-bold text-[#1965D9]">
                10K+
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Printer users helped through setup and troubleshooting
                guides.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,.06)]">

              <h3 className="text-4xl font-bold text-[#1965D9]">
                98%
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Users successfully solved their printer issues using our
                easy step-by-step instructions.
              </p>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="relative mt-16 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#1965D9] via-blue-600 to-sky-600 p-10 text-white shadow-[0_25px_60px_rgba(25,101,217,.28)]">

          {/* Glow */}
          <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                Need Help?
              </span>

              <h3 className="mt-5 text-3xl font-bold">
                Ready to Set Up Your Printer?
              </h3>

              <p className="mt-3 max-w-2xl text-blue-100 leading-7">
                Browse our setup guides or get expert assistance for
                Wi-Fi, offline printers, scanner issues, and more—all in
                one place.
              </p>

            </div>

            <button className="group cursor-pointer inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#1965D9] transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100">

              Start Printer Setup

              <ArrowRight
                size={18}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SetupReview;