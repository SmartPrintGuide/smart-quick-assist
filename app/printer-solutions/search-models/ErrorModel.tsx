'use client';
import React, { useEffect, useState, useRef } from 'react';
import { X, MessageCircle } from 'lucide-react';

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
    const [showChatUnavailable, setShowChatUnavailable] = useState(false);
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

        // Generate random IDs for realistic USB info
        const vendorId = Math.floor(Math.random() * 65535).toString(16).padStart(4, '0');
        const productId = Math.floor(Math.random() * 65535).toString(16).padStart(4, '0');

        // Comprehensive realistic installation steps - much longer for realism
        const steps = [
            `> printer-driver-install --model "${modelNumber}" --mode usb --protocol 0x0003`,
            '[SYSTEM] Driver Installation Service v4.2.1 Started',
            '[SYSTEM] Copyright (C) 2024 Printer Service. All rights reserved.',
            '',
            '[LOG] Initializing driver package manager...',
            '[LOG] Loading driver signature database from cache...',
            '[INIT] Creating secure driver session...',
            '[INIT] Session ID: drv-sess-${Date.now()}',
            '[INFO] Model detected: ' + modelNumber,
            '[CHECK] Verifying driver package integrity...',
            '[CHECK] Hash verification: SHA-256 OK',
            '[SCAN] Checking operating system driver services...',
            '[SCAN] Windows Driver Foundation version: 10.0.22621.0',
            '[SCAN] Print Services running on port 9100',
            '[PREP] Creating temporary driver restore point...',
            '[PREP] Restore point created at: C:\\System Volume Information\\{GUID}',
            '[DETECT] Detecting Windows print architecture...',
            '[DETECT] System: Windows 10 x64 Build 22621',
            '[READ] Reading installed print processor list...',
            '[READ] Processors found: WinPrint, InputBin, MidiOutPort, CustomPort',
            '[DOWNLOAD] Initializing secure connection to driver repository...',
            '[DOWNLOAD] Connecting to CDN: drivers-cdn-03.printerservice.net',
            '[DOWNLOAD] SSL/TLS handshake successful (TLS 1.3)',
            '[DOWNLOAD] Requesting driver package index...',
            '[DOWNLOAD] Response received: 200 OK (Size: 247.3 MB)',
            '[DOWNLOAD] Starting package download...',
            '[DOWNLOAD] [██░░░░░░░░░░░░░░░░] 10% (24.7 MB)',
            '[DOWNLOAD] [█████░░░░░░░░░░░░░░] 25% (61.8 MB)',
            '[DOWNLOAD] [████████░░░░░░░░░░░] 40% (98.9 MB)',
            '[DOWNLOAD] [███████████░░░░░░░░] 55% (135.9 MB)',
            '[DOWNLOAD] [████████████████░░░░] 80% (197.8 MB)',
            '[DOWNLOAD] [██████████████████░░] 95% (234.9 MB)',
            '[DOWNLOAD] [████████████████████] 100% (247.3 MB)',
            '[EXTRACT] Verifying package integrity...',
            '[EXTRACT] Checksum verification: PASSED',
            '[EXTRACT] Extracting printer components...',
            '[EXTRACT] [██░░░░░░░░░░░░░░░░░] 8% Extracting',
            '[EXTRACT] [█████░░░░░░░░░░░░░░░] 22% Extracting',
            '[EXTRACT] [████████░░░░░░░░░░░░] 35% Extracting',
            '[EXTRACT] [███████████░░░░░░░░░] 50% Extracting',
            '[EXTRACT] [████████████████░░░░] 75% Extracting',
            '[EXTRACT] Component 1/15: unidrv.dll - OK',
            '[EXTRACT] Component 2/15: unidrvui.dll - OK',
            '[EXTRACT] Component 3/15: stdnames.gpd - OK',
            '[EXTRACT] Component 4/15: printer-config.xml - OK',
            '[EXTRACT] Component 5/15: usb-device.sys - OK',
            '[EXTRACT] Component 6/15: port-monitor.dll - OK',
            '[VERIFY] Package checksum verified.',
            '[CONFIG] Reading configuration manifest...',
            '[CONFIG] Found compatible manifest for ' + modelNumber,
            '[CONFIG] Manifest version: v2.1.0',
            '[INSTALL] Installing core printer driver files...',
            '[INSTALL] Copying files to C:\\Windows\\System32\\spool\\drivers\\w32x86\\',
            '[INSTALL] Registering printer device in device manager...',
            '[INSTALL] Creating device instance GUID...',
            '[INSTALL] Setting up printer ports: LPT1, USB001, USB002, NETWORK',
            '[INSTALL] [████░░░░░░░░░░░░░░░] 15% Installing',
            '[INSTALL] [█████████░░░░░░░░░░░] 35% Installing',
            '[INSTALL] [██████████████░░░░░░] 55% Installing',
            '[INSTALL] [███████████████████░░] 85% Installing',
            '[USB] Attempting USB handshake with printer device...',
            '[USB] USB bus scan initiated...',
            '[USB] Scanning bus 1: 8 devices found',
            '[USB] Scanning bus 2: 5 devices found',
            `[USB] Device enumeration: Vendor 0x${vendorId}, Product 0x${productId}`,
            '[USB] USB endpoint opened: 0x81 (IN), 0x02 (OUT)',
            '[USB] Baud rate negotiation: 115200 bps',
            '[REGISTER] Registering print driver service...',
            '[REGISTER] Creating service registry entries...',
            '[REGISTER] Setting service startup type: AUTO',
            '[SERVICE] Starting printer spooler service...',
            '[SERVICE] Service started with PID: 4287',
            '[HEARTBEAT] Sending device initialization handshake...',
            '[HEARTBEAT] Waiting for device response...',
            '[TIMEOUT] Device communication timeout (35000ms)',
            '[TIMEOUT] No response from USB endpoint 0x81',
            '[ERROR] USB device not responding to requests',
            '[ERROR] Printer device enumeration failed',
            '[RETRY] Attempting WMI-based device registration...',
            '[RETRY] WMI query timeout (20000ms exceeded)',
            '[WARN] Print spooler service health check failed',
            '[ERROR] Unable to communicate with print spooler',
            '[CHECK] Verifying USB connection status...',
            '[CHECK] USB Device Status: DISCONNECTED',
            '[CHECK] Port monitor status: NOT_ACTIVE',
            '[FAIL] Driver installation incomplete',
            '[FAIL] USB device not found',
            '[FAIL] Printer spooler service not responding',
            '[ROLLBACK] Initiating automatic rollback...',
            '[ROLLBACK] Removing installation files...',
            '[ROLLBACK] Restoring system state...',
            '[ROLLBACK] Rollback completed',
            '',
            '[ERROR] Installation failed with exit code: 31',
            `[TIMESTAMP] Process terminated at ${new Date().toLocaleTimeString()}`,
        ];

        let stepIndex = 0;
        const stepInterval = setInterval(() => {
            if (stepIndex < steps.length) {
                setLoadingSteps((prev) => [...prev, steps[stepIndex]]);
                // Cap progress at 77% - create realistic partial failure
                const percent = Math.min(Math.round((stepIndex / (steps.length - 1)) * 77), 77);
                setLoadingPercent(percent);

                // Variable timing for more realistic feel
                let nextDelay = 220;
                if (stepIndex < 10) nextDelay = 150; // Fast initial checks
                else if (stepIndex < 35) nextDelay = 280; // Slower download
                else if (stepIndex < 50) nextDelay = 200; // Medium speed extraction
                else if (stepIndex < 70) nextDelay = 250; // Slower install
                else nextDelay = 300; // Very slow at end (USB issues)

                stepIndex++;
            } else {
                clearInterval(stepInterval);
                // Don't set to 100% - stay at 77% to show partial failure
                // Transition to error after loading completes
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
                        <h2 className="text-base font-bold text-slate-900">Driver Installation</h2>
                        <p className="text-xs text-slate-500">Model: {modelNumber}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-full p-1.5 hover:bg-slate-200 transition"
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
                                    Setting up <strong>{modelNumber}</strong>. Please keep USB connected.
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
                                    <h3 className="font-bold text-red-900 text-sm">Installation Failed</h3>
                                    <p className="text-red-700 text-xs mt-0.5">Error: <span className="font-mono font-bold">0x000005b3 - USB Device Disconnected</span></p>
                                </div>
                            </div>

                            {/* Error Details Box */}
                            <div className="bg-slate-50 border border-slate-300 p-3 rounded-lg">
                                <h4 className="font-bold text-slate-900 text-xs mb-2">Installation Details:</h4>
                                <div className="space-y-1.5 text-xs text-slate-700">
                                    <div className="flex justify-between">
                                        <span>Status:</span>
                                        <span className="font-mono text-red-600">FAILED (Exit Code: 31)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Time Elapsed:</span>
                                        <span className="font-mono">~45 seconds</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Failure Point:</span>
                                        <span className="font-mono text-orange-600">USB Handshake</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Device Status:</span>
                                        <span className="font-mono text-red-600">NOT FOUND</span>
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
                                    <div className="text-red-400">[HEARTBEAT] Timeout waiting for device response (35000ms)</div>
                                    <div className="text-red-400">[ERROR] USB endpoint 0x81 unresponsive</div>
                                    <div className="text-red-400">[FAIL] Device enumeration failed</div>
                                    <div className="text-slate-500 text-xs">Terminated: {new Date().toLocaleTimeString()}</div>
                                </div>
                            </div>

                            {/* What Went Wrong */}
                            <div className="bg-blue-50 border border-blue-300 p-3 rounded-lg">
                                <h4 className="font-bold text-blue-900 text-xs mb-2">🔍 What Went Wrong:</h4>
                                <p className="text-blue-800 text-xs leading-relaxed">
                                    The installation reached 77% but couldn't be completed. This usually means:
                                </p>
                                <ul className="text-blue-800 text-xs mt-2 space-y-1.5 ml-3">
                                    <li className="flex gap-2">
                                        <span className="flex-shrink-0">⚠️</span>
                                        <span><strong>Printer powered off</strong> - Device not responding</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="flex-shrink-0">⚠️</span>
                                        <span><strong>USB cable issue</strong> - Connection interrupted or faulty</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="flex-shrink-0">⚠️</span>
                                        <span><strong>Wrong USB port</strong> - Port may be damaged or not compatible</span>
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
                                <p className="text-sm font-bold text-white">Need Help? Chat with Our Expert Now</p>
                                <p className="text-xs text-blue-100">Get instant support for your printer setup</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowChatUnavailable(true)}
                            className="w-full px-4 py-2.5 rounded-lg bg-white text-blue-700 font-bold hover:bg-blue-50 transition text-sm shadow-xl hover:shadow-2xl hover:scale-105 transform"
                        >
                            💬 Start Chat Now - We're Online!
                        </button>
                    </div>
                </div>

                {/* Chat Unavailable Popup */}
                {showChatUnavailable && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <div className="relative w-full max-w-sm rounded-2xl bg-white shadow-2xl overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-6">
                                <div className="flex items-center gap-3">
                                    <div className="text-4xl">⏰</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Chat Support Unavailable</h3>
                                        <p className="text-sm text-blue-100 mt-1">We'll be back shortly</p>
                                    </div>
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
                                            <span>Try USB in different ports</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span>✓</span>
                                            <span>Restart your computer</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="px-6 pb-6 pt-4 border-t border-slate-200">
                                <button
                                    onClick={() => setShowChatUnavailable(false)}
                                    className="w-full px-4 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                                >
                                    Got it, thanks!
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}