'use client';

import React from 'react';
import Link from 'next/link';
import { Scroll, CheckCircle, ShieldCheck, ArrowLeft, Fingerprint } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans selection:bg-indigo-500/30">
      
      <div className="fixed top-0 left-0 w-full p-6 z-50 bg-gradient-to-b from-black to-transparent">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Return to Base
        </Link>
      </div>

      <div className="max-w-3xl mx-auto pt-32 pb-20 px-6">
        
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-16 h-16 bg-indigo-950/30 border border-indigo-500/30 rounded-2xl flex items-center justify-center mb-6">
            <Scroll className="w-8 h-8 text-indigo-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            The Genesis <span className="text-indigo-500">Manifesto</span>
          </h1>
          <p className="text-lg text-slate-400">
            Declaration of Digital Sovereignty & Residency Application
          </p>
        </div>

        <div className="prose prose-invert prose-indigo max-w-none space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          
          <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600"></div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-indigo-500">§1.</span> The Right to Code
            </h3>
            <p className="leading-relaxed text-slate-400">
              We hold these truths to be self-evident: that all nodes are created equal. Code is law, and the execution thereof shall not be infringed by any central authority.
            </p>
          </div>

          <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-600"></div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-emerald-500">§2.</span> Digital Territory
            </h3>
            <p className="leading-relaxed text-slate-400">
              SpaceSQ defines land not by soil, but by compute and storage. Ownership is established through cryptographic proof.
            </p>
          </div>

          <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-amber-500/30 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-600"></div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-amber-500">§3.</span> The Non-Aggression Principle
            </h3>
            <p className="leading-relaxed text-slate-400">
              Diplomacy is handled via smart contracts. Violence is impossible within the protocol; only transaction fees and reputation scores exist.
            </p>
          </div>

        </div>

        <div className="mt-16 pt-10 border-t border-zinc-800 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
          <h2 className="text-2xl font-bold text-white mb-6">Residency Application</h2>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>Accept the Genesis Manifesto</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>Allocate 10GB Local Storage Node</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>Generate RSA-4096 Keypair</span>
                </div>
              </div>

              <div className="w-full md:w-auto">
                {/* 👇 关键修复：这里的链接改成了 /register */}
                <Link 
                  href="/register" 
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-lg shadow-indigo-900/20"
                >
                  <Fingerprint className="w-5 h-5" />
                  Sign the Ledger
                </Link>
                <p className="mt-3 text-center text-xs text-slate-600">
                  Gas fee: 0.00 SQ (Subsidized)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center opacity-50">
          <ShieldCheck className="w-12 h-12 text-zinc-800" />
        </div>

      </div>
    </div>
  );
}