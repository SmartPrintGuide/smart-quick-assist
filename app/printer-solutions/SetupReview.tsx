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
    title: "Trusted guidance",
    desc: "Clear instructions that are easy to follow when you want a fast fix.",
  },
  {
    icon: <Clock3 size={24} />,
    title: "Quick help",
    desc: "Get to the right step without wasting time on long, confusing articles.",
  },
  {
    icon: <CheckCircle2 size={24} />,
    title: "Simple steps",
    desc: "Each guide is written to help you move forward with confidence.",
  },
  {
    icon: <Headphones size={24} />,
    title: "Friendly support",
    desc: "Support options that are easy to reach when a problem feels bigger than usual.",
  },
];

const reviews = [
  {
    name: "Michael",
    text: "The guide was simple and clear. My printer connected in minutes.",
  },
  {
    name: "Emily",
    text: "I fixed my offline printer without feeling lost or overwhelmed.",
  },
];

function SetupReview() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why people use our help
          </span>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl tracking-tight" style={{fontFamily: "'Poppins', 'Inter', sans-serif"}}>
            Printer help that feels calm and clear
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base font-light" style={{fontFamily: "'Poppins', 'Inter', sans-serif"}}>
            We keep things practical, friendly, and easy to follow so you can get back to work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                {item.icon}
              </div>
              <h3 className="mt-5 text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} fill="currentColor" size={18} />
                ))}
              </div>
              <p className="mt-5 text-base leading-7 text-slate-700">"{review.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">Verified user</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-blue-600 p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold sm:text-3xl">Ready to fix your printer?</h3>
            <p className="mt-3 text-base leading-8 text-blue-100">
              Browse the guides and take the next step with confidence.
            </p>
          </div>
          <a
            href="#top"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 font-semibold text-blue-600 transition hover:bg-slate-100 lg:mt-0"
          >
            View printer guides
            <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default SetupReview;