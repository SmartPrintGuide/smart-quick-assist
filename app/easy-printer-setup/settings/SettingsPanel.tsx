"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function SettingsPanel() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [allowStartNow, setAllowStartNow] = useState(true);

  useEffect(() => {
    const token = window.localStorage.getItem("easyPrinterSetupAdminToken");
    if (token) {
      setLoggedIn(true);
      void fetchSettings(token);
    } else {
      setLoading(false);
    }
  }, []);

  async function fetchSettings(token: string) {
    setLoading(true);
    try {
      const response = await fetch("/api/easy-printer-setup/settings", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        setAllowStartNow(data.allowStartNow !== false);
      }
    } catch {
      setStatus("Failed to load settings.");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    setStatus("");

    try {
      const response = await fetch("/api/easy-printer-setup/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (!response.ok || !data.token) {
        setError("Invalid username or password");
        return;
      }

      window.localStorage.setItem("easyPrinterSetupAdminToken", data.token);
      setLoggedIn(true);
      void fetchSettings(data.token);
    } catch {
      setError("Unable to sign in right now.");
    }
  }

  async function handleToggle(nextValue: boolean) {
    const token = window.localStorage.getItem("easyPrinterSetupAdminToken");
    if (!token) {
      setError("Please sign in again.");
      setLoggedIn(false);
      return;
    }

    setStatus("Updating...");
    try {
      const response = await fetch("/api/easy-printer-setup/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ allowStartNow: nextValue }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("Failed to update setting.");
        return;
      }

      setAllowStartNow(nextValue);
      setStatus(nextValue ? "Start Now is enabled." : "Start Now is disabled and the quick-action will open support.");
    } catch {
      setStatus("Failed to update setting.");
    }
  }

  function handleLogout() {
    window.localStorage.removeItem("easyPrinterSetupAdminToken");
    setLoggedIn(false);
    setPassword("");
    setStatus("");
    router.refresh();
  }

  if (!loggedIn) {
    return (
      <div className="mx-auto flex max-w-xl flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">Printer Setup Control</h1>
        <p className="mt-2 text-sm text-slate-600">Sign in with admin / Password123 to control the quick-download experience.</p>

        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-0"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-0"
            />
          </div>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <button type="submit" className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white">
            Sign in
          </button>
        </form>
      </div>
    );
  }

  if (loading) {
    return <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600">Loading settings…</div>;
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Printer Setup Control</h1>
          <p className="mt-2 text-sm text-slate-600">Control whether the quick-download action continues to the setup flow or opens support.</p>
        </div>
        <button onClick={handleLogout} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700">
          Logout
        </button>
      </div>

      <div className={`mt-8 rounded-2xl border p-6 ${allowStartNow ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50"}`}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-slate-900">Allow Start Now</p>
            <p className="mt-1 text-sm text-slate-600">{allowStartNow ? "Enabled — users continue to the setup flow." : "Disabled — users are routed to support."}</p>
          </div>
          <button
            type="button"
            onClick={() => void handleToggle(!allowStartNow)}
            className={`relative h-7 w-14 rounded-full transition ${allowStartNow ? "bg-emerald-500" : "bg-slate-300"}`}
          >
            <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${allowStartNow ? "left-8" : "left-1"}`} />
          </button>
        </div>
      </div>

      {status ? <p className="mt-4 text-sm text-slate-700">{status}</p> : null}
    </div>
  );
}

export default SettingsPanel;
