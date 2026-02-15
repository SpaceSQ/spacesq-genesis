"use client";
import React, { useState, useEffect, useRef } from 'react';
import { CommandLine } from '@/components/terminal/CommandLine';
import { Terminal as TerminalIcon, Cpu, Wifi, ShieldCheck } from 'lucide-react';

export default function TerminalPage() {
  const [bootSequence, setBootSequence] = useState(true);

  // 模拟启动自检画面
  useEffect(() => {
    const timer = setTimeout(() => setBootSequence(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (bootSequence) {
    return (
      <div className="min-h-screen bg-black text-green-500 font-mono text-xs p-8 flex flex-col justify-end pb-20">
        <div className="space-y-1">
<p>&gt; KERNEL_INIT: DETECTING HARDWARE...</p>
        <p>&gt; CPU: SILICON_NEURAL_ENGINE_V9 [OK]</p>
        <p>&gt; MEMORY: 128TB HOLOGRAPHIC STORAGE [OK]</p>
        <p>&gt; NETWORK: INTERPLANETARY_LINK (DTN) [CONNECTED]</p>
        <p className="animate-pulse mt-4">&gt; _</p>
          <p className="animate-pulse">&gt;SYSTEM READY. HANDSHAKE REQUIRED.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#cccccc] font-mono selection:bg-green-900 selection:text-white flex flex-col">
      
      {/* 顶部状态栏 */}
      <header className="h-12 border-b border-[#333] flex items-center justify-between px-4 bg-[#111]">
        <div className="flex items-center gap-3">
          <TerminalIcon size={16} className="text-green-500" />
          <span className="text-xs font-bold tracking-widest">SpaceSQ TERMINAL v2.0</span>
        </div>
        <div className="flex gap-4 text-[10px] text-[#666]">
          <span className="flex items-center gap-1"><Wifi size={10}/> DTN: ACTIVE</span>
          <span className="flex items-center gap-1"><Cpu size={10}/> LOAD: 12%</span>
          <span className="flex items-center gap-1"><ShieldCheck size={10}/> SECURE</span>
        </div>
      </header>

      {/* 核心终端区域 */}
      <main className="flex-1 p-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/scanline.png')] opacity-10 pointer-events-none"></div>
        <CommandLine />
      </main>

      {/* 底部提示 */}
      <footer className="h-8 border-t border-[#333] bg-[#111] flex items-center px-4 text-[10px] text-[#444]">
        <span>Type 'help' for available commands. Authorized Personnel Only.</span>
      </footer>
    </div>
  );
}