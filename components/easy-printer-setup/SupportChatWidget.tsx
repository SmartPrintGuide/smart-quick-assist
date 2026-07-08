'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SupportChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportChatWidget: React.FC<SupportChatWidgetProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-sm rounded-2xl bg-white shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">Support Chat Unavailable</h3>
              <p className="text-sm text-blue-100 mt-1">We'll be back shortly</p>
            </div>
            <button
              onClick={onClose}
              className="rounded-full cursor-pointer p-1.5 hover:bg-white/20 transition"
            >
              <X size={20} className="text-white" />
            </button>
          </div>
        </div>

        <div className="px-6 py-6 space-y-4">
          <p className="text-slate-700 text-sm leading-relaxed">
            Our chat support team is currently offline. We're available 24/7 to help with your printer setup issues.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-xs font-semibold text-blue-900 mb-2">💡 In the meantime:</p>
            <ul className="text-xs text-blue-800 space-y-1.5">
              <li className="flex gap-2">
                <span>✓</span>
                <span>Check our troubleshooting guides</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Try different USB ports</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Restart your computer and printer</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="px-6 pb-6 border-t border-slate-200">
          <button
            onClick={onClose}
            className="w-full cursor-pointer px-4 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportChatWidget;
