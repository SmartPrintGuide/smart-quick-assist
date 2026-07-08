"use client";

import React from "react";

const SetupHeader = () => {
  return (
    <header className=" top-0 z-30 bg-[#1965D9] shadow-[0_5px_30px_-20px_rgba(15,23,42,0.4)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

  
        <a href="/" className="flex items-center">
          <img
            src="/logo-bgremove-224.png" 
            alt="Logo"
            className="h-9 w-auto object-contain sm:h-10"
          />
        </a>


        <a
          href="#"
          className="inline-flex items-center justify-center rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#1965D9] shadow-md transition-all duration-300 hover:bg-slate-100 hover:shadow-lg sm:px-5 sm:text-sm"
        >
          Chat with Expert
        </a>

      </div>
    </header>
  );
};

export default SetupHeader;