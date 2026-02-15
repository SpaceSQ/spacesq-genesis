'use client';

import React from 'react';
import Link from 'next/link';
import { Scroll, CheckCircle, ShieldCheck, ArrowLeft, Fingerprint } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans selection:bg-indigo-500/30">
      
      {/* 顶部导航 */}
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

        {/* 省略中间文字，为了确保文件完整，建议保留你原来的中间部分，或者直接粘贴这个完整的 */}
        <div className="prose prose-invert prose-indigo max-w-none space-y-8 mb-16">
          <p className="text-slate-400">
            (Manifesto content...) We hold these truths to be self-evident: that all nodes are created equal. Code is law.
          </p>
        </div>

        {/* 核心修复区域 */}
        <div className="mt-16 pt-10 border-t border-zinc-800">
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
              </div>

              <div className="w-full md:w-auto">
                {/* 👇【视觉标记】关键修改： */}
                {/* 1. href 必须是 /register */}
                {/* 2. 文字改成了大写的 "MINT CITIZENSHIP >>>" 以便验证更新 */}
                <Link 
                  href="/register" 
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-lg shadow-indigo-900/20"
                >
                  <Fingerprint className="w-5 h-5" />
                  MINT CITIZENSHIP &gt;&gt;&gt;
                </Link>
                <p className="mt-3 text-center text-xs text-slate-600">
                  Gas fee: 0.00 SQ (Subsidized)
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}