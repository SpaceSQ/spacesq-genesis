"use client";
import React from 'react';
import Link from 'next/link';
import { ImmigrationGate } from '@/components/auth/ImmigrationGate';
import { SoulScreen } from '@/components/lumi/SoulScreen';
import { Terminal, Shield, BookOpen, Cpu } from 'lucide-react';

export default function Home() {
  // [修复] 定义解锁后的行为
  const handleUnlock = (email: string) => {
    console.log(`[SpaceSQ] User authenticated: ${email}`);
    // 这里未来可以扩展：比如跳转到后台，或者解锁更多隐藏功能
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-black flex flex-col">
      
      {/* 1. 顶部 Hero 区域 */}
      <header className="pt-20 pb-12 px-6 text-center">
        <div className="mb-4 inline-block border border-zinc-800 bg-zinc-900/50 rounded-full px-3 py-1 text-[10px] text-zinc-500 font-mono">
          SYSTEM_STATUS: <span className="text-green-500 animate-pulse">ONLINE</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          SPACE<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">SQ</span>
        </h1>
        <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto font-mono leading-relaxed">
          The Operating System for Silicon-Carbon Symbiosis.
          <br />
          From <span className="text-zinc-300">25m² Smart Home</span> to <span className="text-zinc-300">Mars Habitat</span>.
        </p>
      </header>

      {/* 2. 核心交互区 (LUMI + 下载) */}
      <div className="flex-1 w-full max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        
        {/* 左侧：LUMI 灵魂视窗 (硅基生命展示) */}
        <div className="flex flex-col gap-6">
           <div className="flex items-center gap-2 text-xs font-bold text-zinc-600 uppercase tracking-widest">
             <Cpu size={14} /> Silicon Lifeform Monitor
           </div>
           <SoulScreen /> {/* 这里显示你会呼吸的 LUMI */}
           
           {/* 快捷导航卡片 */}
           <div className="grid grid-cols-2 gap-4">
              <Link href="/archives" className="group p-4 bg-zinc-900/30 border border-zinc-800 hover:border-blue-500/50 rounded-xl transition-all">
                <BookOpen className="text-blue-500 mb-2 group-hover:scale-110 transition-transform" size={20} />
                <div className="text-sm font-bold text-zinc-300 group-hover:text-white">Archives</div>
                <div className="text-[10px] text-zinc-600">History & Protocols</div>
              </Link>
              <Link href="/console" className="group p-4 bg-zinc-900/30 border border-zinc-800 hover:border-red-500/50 rounded-xl transition-all">
                <Shield className="text-red-500 mb-2 group-hover:scale-110 transition-transform" size={20} />
                <div className="text-sm font-bold text-zinc-300 group-hover:text-white">Admin Console</div>
                <div className="text-[10px] text-zinc-600">Op-Mode Only</div>
              </Link>
           </div>
        </div>

        {/* 右侧：移民大门 (下载与鉴权) */}
        <div className="flex flex-col gap-6">
           <div className="flex items-center gap-2 text-xs font-bold text-zinc-600 uppercase tracking-widest">
             <Terminal size={14} /> Access Terminal
           </div>
           {/* [修复] 这里传入了 onUnlock 参数 */}
           <ImmigrationGate onUnlock={handleUnlock} /> 
        </div>

      </div>

      {/* 3. 底部 Footer (包含隐藏入口) */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-6 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <div className="text-xs font-bold text-white mb-2">SpaceSQ Foundation</div>
            <div className="text-[10px] text-zinc-600 font-mono">
              © 2026 Genesis Edition. <br/>Adhering to the <Link href="/legal" className="underline hover:text-zinc-400">SCL-1.0 Protocol</Link>.
            </div>
          </div>

          <div className="flex gap-6 text-xs text-zinc-500 font-mono">
             <Link href="/collaboration" className="hover:text-white transition-colors">PARTNERSHIP</Link>
             <Link href="/archives" className="hover:text-white transition-colors">WHITE_PAPERS</Link>
             <Link href="/legal" className="hover:text-white transition-colors">LEGAL</Link>
          </div>

          {/* 隐藏的黑客终端入口 */}
          <Link href="/terminal" className="opacity-20 hover:opacity-100 transition-opacity p-2 border border-transparent hover:border-green-900 rounded">
            <div className="text-[10px] font-mono text-green-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              [ >_ SYSTEM_ROOT ]
            </div>
          </Link>

        </div>
      </footer>

    </main>
  );
}