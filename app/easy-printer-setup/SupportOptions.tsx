"use client";

import React from "react";
import { openJivoChat } from "@/lib/jivoChat";
import {
  Headphones,
  MessageCircleMore,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const supportItems = [
  {
    title: "Easy Guides",
    description:
      "Follow simple step-by-step instructions for common printer issues.",
    icon: <Sparkles size={20} />,
  },
  {
    title: "Live Chat",
    description:
      "Talk with our support team for quick troubleshooting assistance.",
    icon: <MessageCircleMore size={20} />,
  },
  {
    title: "Expert Support",
    description:
      "Get reliable help with setup, Wi-Fi, scanner, and offline problems.",
    icon: <Headphones size={20} />,
  },
];

export default function SupportOptions() {
  return (
    <section
      id="help"
      className="bg-gradient-to-b from-white via-slate-50 to-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)] lg:grid-cols-[1fr_1fr] lg:p-10">

          {/* Left */}

          <div className="flex flex-col justify-center">

            <span className="inline-flex w-fit items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#1965D9]">
              Need Help?
            </span>

            <h2
              className="mt-6 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl"
              style={{ fontFamily: "'Poppins','Inter',sans-serif" }}
            >
              We're Here to
              <br />
              Make Printing Easy.
            </h2>

            <p className="mt-5 max-w-lg text-[16px] leading-8 text-slate-600">
              Set up your printer or fix Wi-Fi, offline, and scanner issues with easy guides and expert support.
            </p>

            <div className="mt-8">

              <button
                type="button"
                onClick={openJivoChat}
                className="group cursor-pointer inline-flex items-center gap-2 rounded-xl bg-[#1965D9] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/40"
              >

                Start Live Chat

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />

              </button>

              <p className="mt-3 text-sm text-slate-500">
                Average response time: under 2 minutes.
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-5">

            {supportItems.map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1965D9] transition-all duration-300 group-hover:bg-[#1965D9] group-hover:text-white">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}