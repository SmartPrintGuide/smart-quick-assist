
import React from 'react';
import type { Metadata } from 'next';
import ModelSearchHero from './ModelSearchHero';
import ModelSearchheroButtom from './ModelSearchheroButtom';
import SetupFooter from '../SetupFooter';

export const metadata: Metadata = {
  title: 'Download Printer Drivers - Quick & Easy Setup | Smart Quick Assist',
  description: 'Download printer drivers quickly with our model search tool. Get the right driver for your printer model and start printing in minutes. USB installation guide included.',
  keywords: ['printer drivers', 'download drivers', 'printer setup', 'driver installation', 'printer support'],
  openGraph: {
    title: 'Download Printer Drivers - Quick Setup',
    description: 'Find and download the perfect printer driver for your model. Simple USB installation process.',
    url: 'https://smartquickassist.com/printer-solutions/search-models',
    type: 'website',
  },
};

function Page() {
  return (
    <>
      <ModelSearchHero />
      <ModelSearchheroButtom />
      <SetupFooter />
    </>
  );
}

export default Page;