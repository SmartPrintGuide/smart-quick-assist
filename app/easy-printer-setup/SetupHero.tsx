"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
    ArrowRight,
    Headphones,
    Printer,
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
        <section className="relative min-h-[88vh]  bg-gradient-to-br from-slate-50 to-white">

            {/* subtle background removed for cleaner premium look */}

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-6">

                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

                    {/* Left - Premium Content */}
                    <div className="order-2 mt-8 flex flex-col justify-center lg:order-1 lg:mt-0">

                        {/* Badge */}
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 shadow-md backdrop-blur">
                            <ShieldCheck size={16} className="text-[#1965D9]" />
                            <span className="text-sm font-semibold text-slate-700">
                                Trusted Printer Support
                            </span>
                        </div>

                        {/* Heading */}
                        <h1
                            className="mt-7 max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 lg:text-5xl"
                            style={{ fontFamily: "'Poppins','Inter',sans-serif" }}
                        >
                            Set Up Printer

                            in Minutes
                        </h1>

                        {/* Description */}
                        <p className="mt-5 max-w-lg text-[17px] leading-8 text-slate-600">
                            Easy setup guides, Wi-Fi connection, offline fixes, and scanner troubleshooting with expert help whenever you need it.
                        </p>

                        {/* CTA */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">

                            <button
                                onClick={() => router.push("/easy-printer-setup/search-models")}
                                className="group inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#1965D9] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#1557bf] hover:shadow-lg active:scale-95"
                            >
                                Click Here For Printer Setup

                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>





                        </div>

                        {/* Feature Cards */}

                        <div className="mt-10 cursor-pointer grid grid-cols-1 gap-4 sm:grid-cols-3">

                            {[
                                {
                                    icon: <Headphones size={18} />,
                                    title: "Live Support",
                                },
                                {
                                    icon: <Wifi size={18} />,
                                    title: "Wi-Fi Setup",
                                },
                                {
                                    icon: <ShieldCheck size={18} />,
                                    title: "Secure",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1965D9]">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <p className="text-sm font-bold text-slate-900">
                                            {item.title}
                                        </p>

                                        <p className="text-xs text-slate-500">
                                            Fast & Reliable
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* Right - Printer Image */}
                    <div className="order-1 flex items-center justify-center lg:order-2">
                        <div className="mx-auto w-full max-w-[480px]">

                            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl">

                                <div className="flex items-center justify-center">
                                    <img
                                        src="/setup1-printer.png"
                                        alt="Printer"
                                        className="w-full max-w-[380px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
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
                            className="group relative flex h-36 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                        >


                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center justify-center text-center">

                                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1965D9]">
                                    {service.icon}
                                </div>

                                <h3 className="text-sm font-bold text-slate-900">
                                    {service.title}
                                </h3>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}