"use client";

import React from "react";
import {
  ArrowRight,
  MessageCircle,
  FileText,
  Wrench,
} from "lucide-react";
import { openJivoChat } from "@/lib/jivoChat";

function SupportOptions() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-20">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main CTA Section */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#1965D9] via-blue-600 to-sky-600 p-8 sm:p-12 text-white shadow-[0_25px_60px_rgba(25,101,217,.28)]">

          {/* Glow */}
          <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">

            {/* Left Content */}
            <div>

              <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                Need additional guidance?
              </span>

              <h3 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight">
                Printer help that feels simple
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-blue-100">
                Browse setup resources and troubleshooting information for Wi-Fi, offline printers, scanner issues, drivers, and common printing problems.
              </p>

              <button 
                onClick={openJivoChat}
                className="group mt-8 cursor-pointer inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#1965D9] transition-all duration-300 hover:bg-slate-100 hover:-translate-y-1">

                Browse Printer Guides

                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />

              </button>

            </div>

            {/* Right - Feature Cards */}
            <div className="grid gap-4 sm:gap-5">

              {/* Card 1 */}
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <FileText size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Easy-to-follow guides
                    </h4>
                    <p className="mt-1 text-sm text-blue-100">
                      Clear instructions for common printer tasks and issues.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <MessageCircle size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Live chat availability
                    </h4>
                    <p className="mt-1 text-sm text-blue-100">
                      Use live chat when assistance is available on the website.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <Wrench size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Practical troubleshooting
                    </h4>
                    <p className="mt-1 text-sm text-blue-100">
                      Review relevant steps before replacing equipment or supplies.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SupportOptions;