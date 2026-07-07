"use client";

import React from "react";
import { Headphones, MessageCircleMore, Sparkles } from "lucide-react";

const supportItems = [
  {
    title: "Fast checklists",
    description:
      "Start with the issue you are seeing and follow short, plain-English steps.",
    icon: <Sparkles size={20} />,
  },
  {
    title: "Friendly help",
    description:
      "Get clear guidance for setup, Wi-Fi, offline errors, and scanner problems.",
    icon: <MessageCircleMore size={20} />,
  },
  {
    title: "Real support",
    description:
      "Use our help center and contact options when you need a little extra guidance.",
    icon: <Headphones size={20} />,
  },
];

export default function SupportOptions() {
  return (
    <section id="help" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Need a hand?
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl tracking-tight" style={{fontFamily: "'Poppins', 'Inter', sans-serif"}}>
              Simple help that feels human.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base font-light" style={{fontFamily: "'Poppins', 'Inter', sans-serif"}}>
              Whether your printer is offline, refusing to connect, or just acting up,
              we keep the steps short, calm, and easy to follow.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="space-y-4">
              {supportItems.map((item) => (
                <div key={item.title} className="flex gap-3 rounded-xl bg-slate-50 p-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
