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
    { icon: <Wifi size={20} />, title: "Wi-Fi setup" },
    { icon: <Printer size={20} />, title: "Printer offline" },
    { icon: <Sparkles size={20} />, title: "Scanner repair" },
    { icon: <Headphones size={20} />, title: "Live help" },
    { icon: <ShieldCheck size={20} />, title: "Safe troubleshooting" },
];

export default function SetupHero() {

    const router = useRouter();
    return (
        <section className="h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-white">
            <div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-4 py-0 sm:px-6 sm:py-0 lg:px-8">
                <div className="grid h-full gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
                    <div className="flex flex-col justify-center gap-6">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-1 py-2 text-xs font-medium text-slate-700 shadow-sm shadow-slate-200/80 ring-1 ring-slate-200 sm:px-4 sm:text-sm">
                            <ShieldCheck size={16} />
                            Trusted by thousands of printer users
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl tracking-tight" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>
                                Fast printer setup and repair help that stays easy to follow.
                            </h1>
                            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 font-light" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>
                                Get clear steps for setup, Wi-Fi, offline, and scanner problems, with live support ready when you need it.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            {[
                                { icon: <Headphones size={16} />, label: "Live help" },
                                { icon: <ShieldCheck size={16} />, label: "Fast diagnosis" },
                                { icon: <Sparkles size={16} />, label: "Pro support" },
                            ].map((item) => (
                                <div key={item.label} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-sky-600">
                                        {item.icon}
                                    </span>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => router.push("/printer-solutions/search-models")}
                            className="group mt-4 inline-flex cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 active:scale-95"
                        >
                            <span className="flex items-center">
                                Click here for Printer Setup
                                <ArrowRight
                                    size={18}
                                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </span>
                        </button>
                    </div>

                    <div className="relative flex items-center justify-center">
                        <div className="absolute -right-10 top-10 h-64 w-64 rounded-full bg-sky-200/70 blur-3xl" />
                        <div className="absolute -left-8 bottom-10 h-44 w-44 rounded-full bg-violet-100/80 blur-3xl" />
                        <img
                            src="/setup1-printer.png"
                            alt="Printer support illustration"
                            className="relative z-10 w-full max-w-lg object-contain"
                        />
                    </div>
                </div>

                <div className="mx-auto w-full max-w-7xl rounded-[1.5rem] bg-white/80 p-2 shadow-inner shadow-slate-200 sm:p-3 lg:p-4">
                    <div className="grid grid-cols-2 gap-0 md:grid-cols-5">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className="flex flex-col items-center justify-center gap-2 border-b border-r border-slate-200 px-2 py-4 text-center last:border-r-0 md:border-b-0"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-sky-600 shadow-sm">
                                    {service.icon}
                                </div>
                                <p className="text-sm font-semibold text-slate-900">{service.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
