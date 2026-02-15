import React from 'react';
import Link from 'next/link';
import { Shield, Users, Terminal } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-black text-white text-center">
      <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
        SpaceSQ Genesis
      </h1>
      <p className="text-slate-400 mb-12 max-w-xl">
        The system is ONLINE. Select an interface to proceed.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link href="/admin" className="p-6 border border-zinc-800 rounded-xl hover:bg-zinc-900 transition flex flex-col items-center gap-4">
          <Shield className="w-8 h-8 text-indigo-500" />
          <span className="font-bold">Admin Console</span>
        </Link>
        <Link href="/user" className="p-6 border border-zinc-800 rounded-xl hover:bg-zinc-900 transition flex flex-col items-center gap-4">
          <Users className="w-8 h-8 text-emerald-500" />
          <span className="font-bold">User Dashboard</span>
        </Link>
        <Link href="/terminal" className="p-6 border border-zinc-800 rounded-xl hover:bg-zinc-900 transition flex flex-col items-center gap-4">
          <Terminal className="w-8 h-8 text-amber-500" />
          <span className="font-bold">Terminal</span>
        </Link>
      </div>
      
      <div className="mt-12 text-zinc-700 text-xs font-mono">
        SYSTEM_ID: SFO1-READY
      </div>
    </div>
  );
}