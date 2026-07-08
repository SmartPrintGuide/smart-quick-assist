import React from "react";
import type { Metadata } from "next";
import SetupHeader from "./SetupHeader";
import SetupHero from "./SetupHero";
import HowItWorks from "./HowItWorks";
import CommonIssues from "./CommonIssues";
import SetupReview from "./SetupReview";
import SupportOptions from "./SupportOptions";
import SetupFooter from "./SetupFooter";

export const metadata: Metadata = {
  title: 'Printer Setup & Troubleshooting Guide | Smart Quick Assist',
  description: 'Get clear, step-by-step guidance for printer setup, troubleshooting, and repair. Solve Wi-Fi, offline, and scanner issues with our easy-to-follow guides.',
  keywords: ['printer setup', 'printer troubleshooting', 'printer help', 'printer repair', 'printer guide'],
  openGraph: {
    title: 'Professional Printer Setup & Support',
    description: 'Simple, clear steps for every printer problem. Get back to printing faster.',
    url: 'https://smartquickassist.com/easy-printer-setup',
    type: 'website',
  },
};

function Page() {
  return (
    <>
      <SetupHeader />
      <SetupHero />
      <HowItWorks />
      <CommonIssues />
      <SupportOptions />
      <SetupReview />

      <SetupFooter />
    </>
  );
}

export default Page;