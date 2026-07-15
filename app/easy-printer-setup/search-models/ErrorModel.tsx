'use client';
import React, { useEffect, useState, useRef } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { openJivoChat } from '@/lib/jivoChat';

interface ErrorModalProps {
    isOpen: boolean;
    onClose: () => void;
    modelNumber: string;
}

type ModalState = 'loading' | 'error';

export default function ErrorModel({ isOpen, onClose, modelNumber }: ErrorModalProps) {
    const [state, setState] = useState<ModalState>('loading');
    const [loadingSteps, setLoadingSteps] = useState<string[]>([]);
    const [loadingPercent, setLoadingPercent] = useState(0);
    const terminalRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [loadingSteps]);

    useEffect(() => {
        if (!isOpen) {
            setState('loading');
            setLoadingSteps([]);
            setLoadingPercent(0);
            return;
        }


        const vendorId = Math.floor(Math.random() * 65535).toString(16).padStart(4, '0');
        const productId = Math.floor(Math.random() * 65535).toString(16).padStart(4, '0');

        // 
        const steps = [
            `> printer-driver-install --model "${modelNumber}" --mode standard`,

            '[SYSTEM] Printer Driver Installation Service started',
            '[SYSTEM] Preparing installation environment...',
            '',

            '[INIT] Creating driver installation session...',
            `[INFO] Selected printer model: ${modelNumber}`,
            '[CHECK] Checking Windows compatibility...',
            '[CHECK] Operating system compatibility: PASSED',
            '[CHECK] Verifying driver package integrity...',
            '[CHECK] Driver package verification: PASSED',

            '[SCAN] Checking required Windows services...',
            '[SCAN] Checking Print Spooler service...',
            '[SCAN] Checking Windows Driver Installation service...',
            '[WARNING] Windows Driver Installation service stopped unexpectedly',
            '[RETRY] Attempting to restart the required service...',
            '[ERROR] Required Windows service could not be restarted',

            '[SECURITY] Checking installation permissions...',
            '[SECURITY] Verifying access to protected system folders...',
            '[WARNING] Security software may be blocking the installation',
            '[ERROR] Access to required driver files was denied',

            '[PERMISSION] Checking administrator privileges...',
            '[PERMISSION] Current installation session has limited permissions',
            '[ERROR] Administrator permission is required to install this driver',

            '[INSTALL] Preparing printer driver files...',
            '[INSTALL] Attempting to copy driver files...',
            '[INSTALL] Unable to write files to the Windows driver directory',
            '[INSTALL] Unable to register the printer driver service',

            '[FAIL] Printer driver installation could not be completed',
            '[FAIL] Required Windows service is unavailable',
            '[FAIL] Installation may have been blocked by security software',
            '[FAIL] Administrator privileges are required',

            '[ROLLBACK] Reverting incomplete installation changes...',
            '[ROLLBACK] Removing temporary installation files...',
            '[ROLLBACK] System state restored successfully',
            '',

            '[ERROR] Driver installation failed',
            '[ERROR] Recommended action: Run the installer as Administrator',
            '[ERROR] Temporarily review security software settings and try again',
            '[ERROR] Restart the Windows Print Spooler service before retrying',
            `[TIMESTAMP] Process terminated at ${new Date().toLocaleTimeString()}`
        ];

        let stepIndex = 0;
        const stepInterval = setInterval(() => {
            if (stepIndex < steps.length) {
                setLoadingSteps((prev) => [...prev, steps[stepIndex]]);

                const percent = Math.min(Math.round((stepIndex / (steps.length - 1)) * 77), 77);
                setLoadingPercent(percent);


                let nextDelay = 220;
                if (stepIndex < 10) nextDelay = 150;
                else if (stepIndex < 35) nextDelay = 280;
                else if (stepIndex < 50) nextDelay = 200;
                else if (stepIndex < 70) nextDelay = 250;
                else nextDelay = 300;

                stepIndex++;
            } else {
                clearInterval(stepInterval);

                setTimeout(() => setState('error'), 1200);
            }
        }, 220);

        return () => clearInterval(stepInterval);
    }, [isOpen, modelNumber]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-2xl h-fit rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3 bg-gradient-to-r from-slate-50 to-slate-100">
                    <div className="flex-1">
                        <h2 className="text-base font-bold text-slate-900">Device Setup Assistant</h2>
                        <p className="text-xs text-slate-500">Model: {modelNumber}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-full cursor-pointer p-1.5 hover:bg-slate-200 transition"
                    >
                        <X size={20} className="text-slate-600" />
                    </button>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-hidden flex flex-col">
                    {state === 'loading' ? (
                        // Loading State
                        <div className="flex flex-col gap-2.5 p-3.5 overflow-hidden h-full">
                            {/* Terminal - Fixed Height */}
                            <div className="h-98 rounded-lg bg-slate-900 p-3 font-mono text-xs flex flex-col overflow-hidden border border-slate-800">
                                <div className="flex items-center gap-2 pb-2 border-b border-slate-700">
                                    <div className="flex gap-1.5">
                                        <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                                    </div>
                                    <span className="text-slate-400 text-xs flex-1">printer-driver-install.exe</span>
                                    <span className="text-green-500 text-xs animate-pulse">● Running</span>
                                </div>
                                <div
                                    ref={terminalRef}
                                    className="flex-1 overflow-y-auto space-y-0.5 pr-2"
                                >
                                    {loadingSteps.map((step, idx) => (
                                        <div key={idx} className="text-slate-300 whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                                            {step && typeof step === 'string' ? (
                                                step === '' ? (
                                                    <span className="text-slate-600">.</span>
                                                ) : step.includes('>') ? (
                                                    <span className="text-slate-400">{step}</span>
                                                ) : step.includes('[ERROR]') || step.includes('[FAIL]') ? (
                                                    <span className="text-red-400">{step}</span>
                                                ) : step.includes('[INFO]') || step.includes('detected') || step.includes('OK') ? (
                                                    <span className="text-green-400">{step}</span>
                                                ) : step.includes('[WARN]') ? (
                                                    <span className="text-yellow-400">{step}</span>
                                                ) : step.includes('[TIMEOUT]') || step.includes('[RETRY]') ? (
                                                    <span className="text-orange-400">{step}</span>
                                                ) : (
                                                    <span className="text-slate-400">{step}</span>
                                                )
                                            ) : null}
                                        </div>
                                    ))}
                                    {loadingSteps.length > 0 && (
                                        <div className="text-slate-500 animate-pulse">▌</div>
                                    )}
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                                <div className="flex justify-between mb-1 items-center">
                                    <span className="text-xs font-medium text-slate-700">
                                        {loadingPercent < 25 ? 'Verifying Printer' : loadingPercent < 50 ? 'Downloading Package' : loadingPercent < 70 ? 'Installing Files' : 'Connecting Device'}
                                    </span>
                                    <span className="text-xs font-bold text-sky-600">{loadingPercent}%</span>
                                </div>
                                <div className="w-full bg-slate-300 rounded-full h-1.5 overflow-hidden">
                                    <div
                                        className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 h-full rounded-full transition-all duration-300 shadow-lg shadow-sky-500/20"
                                        style={{ width: `${loadingPercent}%` }}
                                    />
                                </div>
                                <p className="text-xs text-slate-600 mt-1.5">
                                    Setting up <strong>{modelNumber}</strong>. Please Keep Your Device Connected.
                                </p>
                            </div>
                        </div>
                    ) : (
                        // Error State
                        <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                            {/* Error Icon & Title */}
                            <div className="flex items-center gap-3 bg-red-50 border-l-4 border-red-600 p-3 rounded">
                                <div className="text-3xl flex-shrink-0">❌</div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-red-900 text-sm">Driver Installation Couldn't Be Completed</h3>
                                    <p className="text-red-700 text-xs mt-0.5">Error: <span className="font-mono font-bold">0x00000002 - Required driver files could not be installed.</span></p>
                                </div>
                            </div>

                            {/* Error Details Box */}
                            <div className="bg-slate-50 border border-slate-300 p-3 rounded-lg">
                                <h4 className="font-bold text-slate-900 text-xs mb-2">Installation Details:</h4>
                                <div className="space-y-1.5 text-xs text-slate-700">
                                    <div className="flex justify-between">
                                        <span>Status:</span>
                                        <span className="font-mono text-red-600">FAILED</span>
                                    </div>
                                    
                                    <div className="flex justify-between">
                                        <span>Failure Point:</span>
                                        <span className="font-mono text-orange-600">Connection Error</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Device Status:</span>
                                        <span className="font-mono text-red-600">NOT FOUND</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Driver installation:</span>
                                        <span className="font-mono text-red-600">FAILED</span>
                                    </div>
                                </div>
                            </div>

                            {/* Terminal Error Output */}
                            <div className="rounded-lg bg-slate-900 p-2.5 font-mono text-xs border border-slate-800">
                                <div className="flex items-center gap-1.5 pb-1.5 border-b border-slate-700 mb-1">
                                    <div className="flex gap-1">
                                        <div className="h-2 w-2 rounded-full bg-red-500" />
                                        <div className="h-2 w-2 rounded-full bg-yellow-500" />
                                        <div className="h-2 w-2 rounded-full bg-green-500" />
                                    </div>
                                    <span className="text-slate-400 text-xs flex-1">driver-installation.exe</span>
                                    <span className="text-red-500 text-xs">● Failed</span>
                                </div>
                                <div className="space-y-0.5 overflow-y-auto max-h-20">
                                    <div className="text-red-400">[WARNING] Installation requires administrator permission</div>
                                    <div className="text-red-400">[ERROR] Installation was blocked by system security</div>
                                    <div className="text-red-400">[FAIL] Printer driver installation failed</div>
                                    <div className="text-slate-500 text-xs">Installation Terminated</div>
                                </div>
                            </div>

                            {/* What Went Wrong */}
                            <div className="bg-blue-50 border border-blue-300 p-3 rounded-lg">
                                <h4 className="font-bold text-blue-900 text-xs mb-2">🔍 What Went Wrong:</h4>
                                <p className="text-blue-800 text-xs leading-relaxed">
                                    The installation couldn't be completed. Common reasons include:
                                </p>
                                <ul className="text-blue-800 text-xs mt-2 space-y-1.5 ml-3">
                                    <li className="flex gap-2">
                                        <span className="flex-shrink-0">⚠️</span>
                                        <span><strong>Windows Driver Service unavailable – Required installation service isn't running.</strong></span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="flex-shrink-0">⚠️</span>
                                        <span><strong>Security software blocked the installer – Antivirus or firewall interrupted the installation.</strong></span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="flex-shrink-0">⚠️</span>
                                        <span><strong>Administrator access required – Run the installer with administrator privileges.</strong></span>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    )}
                </div>

                {/* Footer - Chat Section */}
                <div className="border-t border-slate-200 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 px-4 py-4">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white flex-shrink-0 animate-bounce">
                                <MessageCircle size={20} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-bold text-white">Still having trouble installing your printer?</p>
                                <p className="text-xs text-blue-100">Our printer expert are ready to help you get your printer up and running.</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={openJivoChat}
                            className="w-full px-4 py-2.5 cursor-pointer rounded-lg bg-white text-blue-700 font-bold hover:bg-blue-50 transition text-sm shadow-xl hover:shadow-2xl hover:scale-105 transform"
                        >
                            💬 Start Chat Now - We're Online!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}