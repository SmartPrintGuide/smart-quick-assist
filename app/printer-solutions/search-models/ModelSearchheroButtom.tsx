import React from 'react';
import { CheckCircle2, Zap, Shield, Database } from 'lucide-react';

function ModelSearchheroButtom() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What Happens During Installation</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="group rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Smart Detection</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Automatically verifies your printer model and system compatibility.</p>
            </div>
            <div className="group rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Zap size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Fast Download</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Secure CDN delivery ensures quick package retrieval.</p>
            </div>
            <div className="group rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Shield size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Safe Installation</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Verified drivers with system checksum validation.</p>
            </div>
            <div className="group rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Database size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Device Config</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Automatic printer service startup and USB detection.</p>
            </div>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Installation Process</h2>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_0.95fr]">
            {/* Left Column */}
            <div className="grid gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-sm font-bold text-white">
                  1
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">Driver Package Check</h3>
                <p className="mt-2 text-sm text-slate-600">Verify driver signature database and system compatibility.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-sm font-bold text-white">
                  3
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">Connection Setup</h3>
                <p className="mt-2 text-sm text-slate-600">Configure USB or network connection settings.</p>
              </div>
            </div>

            {/* Middle Column */}
            <div className="grid gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-sm font-bold text-white">
                  2
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">Secure Download</h3>
                <p className="mt-2 text-sm text-slate-600">Download verified driver files from secure CDN.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-sm font-bold text-white">
                  4
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">Service Status</h3>
                <p className="mt-2 text-sm text-slate-600">Confirm print spooler service is running.</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-1">✓ Before You Start</h3>
              <p className="text-xs text-slate-600 mb-4 font-light">Follow these steps to ensure smooth installation</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-slate-700">
                  <span className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">✓</span>
                  <span><strong>Power on printer</strong> and verify all lights.</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-700">
                  <span className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">✓</span>
                  <span><strong>Verify model number</strong> from device label.</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-700">
                  <span className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">✓</span>
                  <span><strong>Keep USB connected</strong> during installation.</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-700">
                  <span className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">✓</span>
                  <span><strong>Use same network</strong> for wireless setup.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-8 shadow-sm">
          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">💡</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Need Help?</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">
                If you encounter any issues during installation, our support team is ready to help 24/7. Simply click the chat button in the error screen to get instant assistance with USB connection, driver installation, or printer detection problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModelSearchheroButtom;
