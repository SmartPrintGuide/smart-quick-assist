"use client"

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";
import ErrorModel from "./ErrorModel";
import { openJivoChat } from "@/lib/jivoChat";

function ModelSearchHero() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showRedBorder, setShowRedBorder] = useState(false);
  const [modelNumber, setModelNumber] = useState("");
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [allowStartNow, setAllowStartNow] = useState(true);

  useEffect(() => {
    void fetch("/api/easy-printer-setup/settings")
      .then((res) => res.json())
      .then((data) => setAllowStartNow(data.allowStartNow !== false))
      .catch(() => setAllowStartNow(true));
  }, []);

  const handleDownloadClick = () => {
    setShowRedBorder(true);
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  const handleInputBlur = () => {
    setShowRedBorder(false);
  };

  const handleQuickDownload = () => {
    const model = inputRef.current?.value.trim();
    if (!model) {
      setShowRedBorder(true);
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
      return;
    }

    if (!allowStartNow) {
      openJivoChat();
      return;
    }

    setModelNumber(model);
    setIsErrorModalOpen(true);
  };

  return (
    <>
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl text-white">
                Download Printer Drivers
              </h1>
              <div className="space-y-3 text-sm text-slate-200 sm:text-base font-light">
                <p className="flex items-center gap-2">
                  <span className="text-blue-300">•</span> Make sure your printer is powered on
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-300">•</span> Use the model number to get the right setup path
                </p>
              </div>
              <button
                onClick={handleDownloadClick}
                className="inline-flex items-center cursor-pointer rounded-2xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/40 transition hover:bg-blue-700"
              >
                Download Now
                <ArrowRight className="ml-2" size={18} />
              </button>
            </div>

           <div className="relative mx-auto max-w-xl">
  <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-blue-500/30 blur-3xl" />
  <div className="absolute -right-10 -bottom-10 h-28 w-28 rounded-full bg-blue-400/20 blur-3xl" />

  <div className="relative overflow-hidden rounded-[2rem] border border-slate-600 bg-slate-800/50 py-[15px] shadow-xl shadow-slate-900/50">
    <Image
      src="/model-search-printerIMG.png"
      alt="Printer model search"
      width={900}
      height={600}
      loading="eager"
      className="h-full w-full rounded-[calc(2rem-3px)] object-cover"
    />
  </div>
</div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold text-slate-900">Quick Download Free Drivers</h2>
              <p className="mt-3 text-sm text-slate-600 font-light">Enter your printer model to continue with the driver setup flow.</p>
              <label htmlFor="model-number-form" className="mt-8 block text-sm font-semibold text-slate-800">
                Model Number:
              </label>
              <div className={`mt-3 rounded-xl border-2 transition-all ${
                showRedBorder 
                  ? 'border-red-500 shadow-lg shadow-red-500/30' 
                  : 'border-slate-200'
              }`}>
                <input
                  ref={inputRef}
                  id="model-number-form"
                  type="text"
                  placeholder="Enter model number..."
                  onBlur={handleInputBlur}
                  onChange={(e) => {
                    setModelNumber(e.target.value);
                    if (showRedBorder && e.target.value.trim()) {
                      setShowRedBorder(false);
                    }
                  }}
                  className="w-full rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              {showRedBorder && (
                <p className="mt-2 text-sm font-medium text-red-600">
                  ⚠️ Please enter your model number
                </p>
              )}
              <button 
                onClick={handleQuickDownload}
                className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 w-full shadow-md hover:shadow-lg"
              >
                Quick Download & Install Drivers!
              </button>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold text-slate-900">How to find the model number</h2>
              <p className="mt-3 text-sm text-slate-600 font-light">Check the front panel, top label, or rear sticker on your device.</p>
              <div className="mt-8 overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6">
                <div className="relative mx-auto flex h-40 w-full max-w-sm items-center justify-center rounded-lg bg-white shadow-sm border border-slate-200">
                  <div className="absolute top-3 left-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    model
                  </div>
                  <div className="rounded-lg border border-slate-300 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-900 shadow-sm">
                    MODEL XX-XXXX
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ErrorModel 
        isOpen={isErrorModalOpen} 
        onClose={() => setIsErrorModalOpen(false)}
        modelNumber={modelNumber}
      />
    </>
  );
}

export default ModelSearchHero;
