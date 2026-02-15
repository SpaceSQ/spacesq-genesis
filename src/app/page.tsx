import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar'; // 引入刚才写的导航
import { Shield, Users, Terminal, ArrowRight, Database, Cpu, Lock } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white flex flex-col">
      <Navbar />
      
      {/* 背景扫描线特效 */}
      <div className="scanline"></div>
      
      {/* 动态网格背景 */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0 opacity-40"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-black/0 via-black/80 to-black pointer-events-none z-0"></div>

      <main className="relative z-10 flex-1 flex flex-col items-center pt-32 pb-20 px-6">
        
        {/* Hero Section (主标题区) */}
        <div className="max-w-4xl w-full text-center space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/30 border border-indigo-500/30 text-indigo-300 text-xs font-mono animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            GENESIS PROTOCOL V1.0 ONLINE
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Construct Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 text-glow">
              Digital Nation
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            The sovereign infrastructure for the next generation of the web. 
            Claim territory, enact laws, and govern your assets through pure code.
          </p>
        </div>

        {/* Bento Grid Navigation (核心功能入口) */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          
          {/* Card 1: Admin (占据 1 格) */}
          <Link href="/admin" className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-indigo-500/50 transition-all duration-300 hover:bg-zinc-900/80">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shield className="w-32 h-32 text-indigo-500" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Admin Console</h3>
              <p className="text-slate-400 mb-6">God-mode access. Monitor nodes, manage system resources, and oversee global governance.</p>
              <div className="flex items-center text-indigo-400 font-medium group-hover:gap-3 gap-1 transition-all">
                Enter System <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Card 2: User (占据 1 格) */}
          <Link href="/user" className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-emerald-500/50 transition-all duration-300 hover:bg-zinc-900/80">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users className="w-32 h-32 text-emerald-500" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Citizen Dashboard</h3>
              <p className="text-slate-400 mb-6">Manage your digital identity, claim land assets, and engage in diplomatic relations.</p>
              <div className="flex items-center text-emerald-400 font-medium group-hover:gap-3 gap-1 transition-all">
                Access Profile <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Card 3: Terminal (占据 1 格) */}
          <Link href="/terminal" className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-amber-500/50 transition-all duration-300 hover:bg-zinc-900/80">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Terminal className="w-32 h-32 text-amber-500" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Command Line</h3>
              <p className="text-slate-400 mb-6">Direct kernel access via Web Terminal. Execute raw commands and bypass GUI.</p>
              <div className="flex items-center text-amber-400 font-medium group-hover:gap-3 gap-1 transition-all">
                Initialize <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

        </div>

        {/* Feature Strip (底部特性展示) */}
        <div className="w-full max-w-6xl mt-20 pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-200 font-bold">
              <Lock className="w-5 h-5 text-slate-500" /> Cryptographic Law
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Rules are enforced by mathematics, not bureaucrats. Your property rights are secured by immutable ledgers.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-200 font-bold">
              <Database className="w-5 h-5 text-slate-500" /> Decentralized Data
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Your data lives on a distributed network of sovereign nodes. No single point of failure or censorship.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-200 font-bold">
              <Cpu className="w-5 h-5 text-slate-500" /> AI Governance
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Automated smart contracts handle dispute resolution and resource allocation at light speed.
            </p>
          </div>
        </div>

        <footer className="mt-32 text-center text-xs text-slate-600 font-mono">
          <p>SPACESQ GENESIS PROJECT © 2024</p>
          <p className="mt-2">INIT_SEQUENCE: COMPLETED :: SYSTEM_READY</p>
        </footer>

      </main>
    </div>
  );
}