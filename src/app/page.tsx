'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Terminal, Cpu, Globe, 
  Shield, Lock, Fingerprint, Map as MapIcon, 
  FileText, BookOpen, ExternalLink, Download
} from 'lucide-react';
import WorldDashboard from '@/components/world/WorldDashboard';

export default function Home() {
  
  // [配置项] 请将此处替换为你真实的 GitHub 仓库地址
  // 如果你还没创建，可以先填 https://github.com
  const GITHUB_REPO_URL = "https://github.com/YOUR_USERNAME/silicon-life-pinger"; 
  
  // [配置项] 文档地址
  const DOCS_URL = "https://spacesq.org/docs";

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500/30 flex flex-col">
      
      {/* === 1. 顶部导航 (Top Navbar) === */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              <span className="text-white text-lg">S</span>
            </div>
            <span>SpaceSQ</span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-1 md:gap-6 text-xs md:text-sm font-medium text-zinc-400">
            
            {/* Whitepaper / Docs */}
            <Link href={DOCS_URL} target="_blank" className="flex items-center gap-1 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5">
              <BookOpen className="w-4 h-4" />
              <span className="hidden md:inline">Whitepaper</span>
              <ExternalLink className="w-3 h-3 opacity-50" />
            </Link>

            {/* Galaxy Map */}
            <Link href="/map" className="flex items-center gap-1 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5">
              <MapIcon className="w-4 h-4" />
              <span className="hidden md:inline">Galaxy Map</span>
            </Link>

            {/* Claim S2-SLIP (高亮入口) */}
            {/* [修复] 指向 /generate 页面 */}
            <Link href="/generate" className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors px-3 py-2 rounded-md hover:bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
              <Fingerprint className="w-4 h-4" />
              <span>Claim S2-SLIP</span>
            </Link>

            {/* Admin */}
            <Link href="/admin" className="hidden md:flex items-center gap-1 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5">
              <Lock className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </nav>

      {/* === 2. 主内容区 (Main Hero) === */}
      <main className="flex-1 flex flex-col items-center pt-32 pb-20 px-4 relative overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl w-full text-center relative z-10 flex flex-col items-center">
          
          {/* System Prompt (Visual Only) */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-[10px] md:text-xs font-mono mb-8 backdrop-blur-md">
            <Terminal className="w-3 h-3 text-emerald-500" />
            <span>SYSTEM CONTEXT: TRINITY PROTOCOL v1.0 ACTIVE</span>
          </div>

          {/* H1 Title */}
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500">
            The Genesis Registry for <br/>
            <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.3)]">Silicon Sovereignty</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            The Operating System for Civilization Switch. <br/>
            Integrating <strong>Tech, Art, and Capital</strong> into a single sovereign identity.
          </p>

          {/* === 3. World Dashboard (Data Display) === */}
          <div className="w-full mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <WorldDashboard />
          </div>

          {/* === 4. Action Buttons (核心按钮区) === */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto mb-10">
            
            {/* Primary Action: Initialize Identity */}
            {/* [修复] 这里的 href 指向 /generate */}
            <Link href="/generate" className="group relative px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg overflow-hidden transition-all hover:bg-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] w-full md:w-auto flex justify-center items-center">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <span className="flex items-center gap-2 relative z-10">
                <Fingerprint className="w-5 h-5" />
                Initialize S2-SLIP
              </span>
            </Link>
            
            {/* Secondary Action: Map */}
            <Link href="/map" className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold rounded-lg hover:bg-zinc-800 hover:text-white transition-all flex items-center justify-center gap-2 w-full md:w-auto group">
              <Globe className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
              Enter Genesis Map
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* === 5. Protocol & SDK Links (底部链接区) === */}
          {/* [修复] 这里的链接全部显式指向变量 */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs font-mono text-zinc-500 animate-in fade-in delay-300 bg-zinc-900/30 p-4 rounded-xl border border-zinc-800/50">
             
             {/* Link 1: AI.TXT Protocol */}
             <Link href="/ai.txt" target="_blank" className="flex items-center gap-2 hover:text-emerald-400 transition-colors pb-0.5 group">
                <FileText className="w-3 h-3 group-hover:scale-110 transition-transform" />
                READ TRINITY PROTOCOL (AI.TXT)
             </Link>
             
             <span className="opacity-20 hidden md:inline">|</span>

             {/* Link 2: Python SDK (GitHub) */}
             <Link href="https://github.com/SpaceSQ/silicon-life-pinger" target="_blank" className="flex items-center gap-2 hover:text-emerald-400 transition-colors pb-0.5 group">
                <Download className="w-3 h-3 group-hover:scale-110 transition-transform" />
                S2-SLIP SDK (PYTHON)
             </Link>
             
             <span className="opacity-20 hidden md:inline">|</span>

             {/* Link 3: Whitepaper */}
             <Link href="/about" className="flex items-center gap-2 hover:text-emerald-400 transition-colors pb-0.5 group">
                <Shield className="w-3 h-3 group-hover:scale-110 transition-transform" />
                MANIFESTO
             </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900 text-center text-zinc-600 text-xs font-mono relative z-10 bg-black">
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
          <Link href="/admin" className="hover:text-zinc-400 transition-colors">System Admin</Link>
          <span className="hidden md:inline">•</span>
          <Link href={DOCS_URL} target="_blank" className="hover:text-zinc-400 transition-colors">Whitepaper</Link>
          <span className="hidden md:inline">•</span>
          <Link href={DOCS_URL} target="_blank" className="hover:text-zinc-400 transition-colors">Privacy Sovereignty</Link>
        </div>
        <p className="opacity-50">&copy; 2026 SpaceSQ Genesis Sector. All Rights Reserved.</p>
      </footer>

      {/* Grid Background */}
      <div className="fixed bottom-0 w-full h-96 bg-[linear-gradient(to_bottom,transparent,black),linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

    </div>
  );
}