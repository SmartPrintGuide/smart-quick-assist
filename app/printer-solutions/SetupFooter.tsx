import React from "react";

function SetupFooter() {
  return (
    <footer className="bg-[#1965D9] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight">
              About Us
            </h3>
            <p className="text-sm leading-7 text-blue-100 font-light">
              SmartQuickAssist provides simple, reliable, and brand-neutral guidance to help users resolve everyday printer setup and support issues.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="hover:text-blue-300 transition cursor-pointer font-light">
                → About Company
              </li>
              <li className="hover:text-blue-300 transition cursor-pointer font-light">
                → Printer Solutions
              </li>
              <li className="hover:text-blue-300 transition cursor-pointer font-light">
                → Our Blogs
              </li>
              <li className="hover:text-blue-300 transition cursor-pointer font-light">
                → Contact Us
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Useful Links
            </h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="hover:text-blue-300 transition cursor-pointer font-light">
                → Privacy Policy
              </li>
              <li className="hover:text-blue-300 transition cursor-pointer font-light">
                → Terms & Conditions
              </li>
              <li className="hover:text-blue-300 transition cursor-pointer font-light">
                → Cookie Policy
              </li>
              <li className="hover:text-blue-300 transition cursor-pointer font-light">
                → Disclaimer
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Get in Touch
            </h3>
            <div className="space-y-4 text-sm text-blue-100 font-light leading-7">
              <p>
                📍 440 Davis Court<br />
                Apt 1516<br />
                San Francisco, CA 94111
              </p>
              <p>
                📧 support@smartquickassist.com
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-blue-800/30"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
          <p className="text-sm text-blue-200 font-light">
            © SmartQuickAssist 2026 | All Rights Reserved
          </p>
          <div className="flex gap-4 text-sm text-blue-200">
            <a href="#" className="hover:text-blue-300 transition">Privacy</a>
            <span className="text-blue-800">•</span>
            <a href="#" className="hover:text-blue-300 transition">Terms</a>
            <span className="text-blue-800">•</span>
            <a href="#" className="hover:text-blue-300 transition">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SetupFooter;