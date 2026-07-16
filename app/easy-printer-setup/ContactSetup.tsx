"use client";

import React from "react";
import { Lightbulb, MessageCircle } from "lucide-react";
import { openJivoChat } from "@/lib/jivoChat";

function ContactSetup() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 sm:py-20">
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl">
          <div className="flex flex-col items-start gap-6 p-8 sm:p-10 md:flex-row md:items-center">
            {/* Icon */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1965D9] to-blue-500 text-white shadow-lg">
              <Lightbulb size={36} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900">
                Need Help?
              </h2>

              <p className="mt-3 text-[15px] leading-7 text-slate-600">
                If you encounter any issues during installation, our support
                team is ready to help 24/7. Simply click the chat button to get
                instant assistance with USB connection, driver installation, or
                printer detection problems.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={openJivoChat}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#1965D9] px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#1557BF] hover:shadow-xl"
            >
              <MessageCircle
                size={20}
                className="transition-transform cursor-pointer duration-300 group-hover:scale-110"
              />
              Chat with Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSetup;