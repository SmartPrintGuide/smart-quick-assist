"use client";

import React, { useState } from "react";

const links = [
  { label: "Issues we fix", href: "#common-issues" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
];

const SetupHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" top-0 z-30 bg-[#1965D9] shadow-[0_5px_30px_-20px_rgba(15,23,42,0.4)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 text-white sm:px-6 lg:px-8">
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-100">
          Printer help
        </div>

        <div className="hidden sm:flex sm:items-center sm:gap-3 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-3 py-1.5 transition hover:bg-white/15"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#help"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 sm:inline-flex"
          >
            Chat with expert
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:hidden"
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
          <div className="border-t border-white/10 bg-[#1965D9]/95 px-4 pb-4 text-white sm:hidden">
          <div className="flex flex-col gap-2 pt-3 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-3 py-2 transition hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#help"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-white px-3 py-2 text-slate-900 transition hover:bg-slate-100"
            >
              Chat with expert
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default SetupHeader;