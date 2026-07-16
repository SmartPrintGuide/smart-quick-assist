"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
    ArrowRight,
    Check,
    Printer,
    Headphones,
    ShieldCheck,
    Sparkles,
    Wifi,
} from "lucide-react";

const services = [
    { icon: <Printer size={22} />, title: "Printer Set Up Issue" },
    { icon: <Printer size={22} />, title: "Printer Offline" },
    { icon: <Wifi size={22} />, title: "Wireless printer issue" },
    { icon: <Sparkles size={22} />, title: "Paper jam issue" },
    { icon: <Headphones size={22} />, title: "Printer Job Stuck In Queue" },
    { icon: <ShieldCheck size={22} />, title: "Scanner issues" },
];

export default function SetupHero() {
    const router = useRouter();

    return (
        <section className="relative min-h-[78vh]  bg-gradient-to-br from-slate-50 to-white">

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-6">

                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

                    {/* Left - Premium Content */}
                    <div className="order-2 mt-6 flex flex-col justify-center lg:order-1 lg:mt-0">

                        {/* Badge */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 shadow-md lg:px-4 lg:py-2">
                                <ShieldCheck size={15} className="text-[#1965D9]" />
                                <span className="text-xs font-semibold text-slate-700 sm:text-sm">
                                    Exclusive Printer Support
                                </span>
                            </div>
                        </div>

                        {/* Heading */}
                        <h1
                            className="mx-auto mt-5 max-w-full text-center text-[18px] font-bold leading-tight tracking-tight text-slate-900 sm:max-w-md sm:text-[36px] lg:mx-0 lg:mt-7 lg:max-w-xl lg:text-left lg:text-3xl lg:leading-[1.15]"
                            style={{ fontFamily: "'Poppins','Inter',sans-serif" }}
                        >
                            Printer Setup & Troubleshooting 
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-4 max-w-[330px] text-center text-[14px] leading-6 text-slate-600 sm:max-w-md sm:text-base sm:leading-7 lg:mx-0 lg:mt-5 lg:max-w-lg lg:text-left lg:text-[17px] lg:leading-8">
                           Follow clear, step-by-step guides for printer setup, Wi-Fi connection, offline issues, scanner problems, drivers, paper jams, and more.
                        </p>

                        {/* CTA */}
                        <div className="mt-7 flex justify-center lg:mt-8 lg:justify-start">
                            <button
                                onClick={() => router.push("/easy-printer-setup/search-models")}
                                className="group cursor-pointer inline-flex items-center gap-2 rounded-lg bg-[#1965D9] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#1557bf] hover:shadow-lg active:scale-95"
                            >
                                Click Here For Printer Setup

                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>
                        </div>

                        {/* Feature Cards */}
                        <div className="mt-8 cursor-pointer grid grid-cols-2 gap-3 lg:mt-10 lg:grid-cols-3 lg:gap-4">

                            {[
                                {
                                    icon: <Check size={18} />,
                                    title: "Easy Guides",
                                    subtitle: "Step by Step",
                                },
                                {
                                    icon: <Check size={18} />,
                                    title: "Wi-Fi Setup",
                                    subtitle: "Quick & Easy",
                                },
                                {
                                    icon: <Check size={18} />,
                                    title: "Fast Solutions",
                                    subtitle: "24/7 Chat Help",
                                },
                            ].map((item, index) => (
                                <div
                                    key={item.title}
                                    className={`flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:gap-4 lg:p-4 ${index === 2
                                        ? "col-span-2 mx-auto w-full max-w-none lg:col-span-1"
                                        : ""
                                        }`}
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1965D9] lg:h-12 lg:w-12">
                                        {item.icon}
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[12px] font-bold text-slate-900 lg:text-[13px] whitespace-nowrap truncate">
                                            {item.title}
                                        </p>

                                        <p className="text-[11px] text-slate-500 whitespace-nowrap truncate lg:text-xs">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* Right - Printer Image */}
                    <div className="order-1 flex items-center justify-center lg:order-2">
                        <div className="mx-auto cursor-pointer w-full max-w-[480px]">

                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                                <div className="flex items-center justify-center">
                                    <img
                                        src="/setup1-printer.png"
                                        alt="Printer"
                                        className="w-full max-w-[360px] object-contain transition-transform duration-300 hover:scale-[1.02]"
                                    />
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                {/* Services Cards */}
                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="flex h-36 cursor-pointer flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1965D9]">
                                {service.icon}
                            </div>

                            <h3 className="text-sm font-bold leading-5 text-slate-900">
                                {service.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}