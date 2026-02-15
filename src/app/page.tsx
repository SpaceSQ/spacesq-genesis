'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  Fingerprint, Map, Download, FileText, 
  ArrowRight, Database, Users, Clock, Box 
} from 'lucide-react';

export default function HomePage() {
  // 模拟的世界概况数据 (虚拟但合理的数据)
  const stats = {
    startTime: '2024-01-01T00:00:00Z',
    daysRunning: 412,
    citizens: 8492,
    addresses: 1248,
    seedsDownloaded: 23502
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30 selection:text-white flex flex-col font-sans">
      <Navbar />
      
      {/* 全局背景噪音 (增加质感) */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 pointer-events-none z-0"></div>
      
      <main className="relative z-10 flex-1 flex flex-col pt-32">
        
        {/* 1. 核心 Hero 区域：注册与登录 (最重要的入口) */}
        <section className="px-6 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            GENESIS SEED: ONLINE
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Construct Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">
              Digital Sovereignty
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            A decentralized autonomous world. Own your identity, claim your territory, and build the future.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <Link 
              href="/register" 
              className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
            >
              <Fingerprint className="w-5 h-5" />
              Apply for Citizenship ID
            </Link>
            <Link 
              href="/login" 
              className="w-full md:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              Resident Login
            </Link>
          </div>
        </section>

        {/* 2. SpaceSQ 世界概况 (数据看板) */}
        <section className="w-full border-y border-white/10 bg-white/5 backdrop-blur-sm mb-20">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-xs font-mono mb-1 uppercase tracking-wider">
                  <Clock className="w-3 h-3" /> System Runtime
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white">{stats.daysRunning} Days</div>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-xs font-mono mb-1 uppercase tracking-wider">
                  <Download className="w-3 h-3" /> Seeds Downloaded
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white">{stats.seedsDownloaded.toLocaleString()}</div>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-xs font-mono mb-1 uppercase tracking-wider">
                  <Map className="w-3 h-3" /> Addresses Claimed
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white">{stats.addresses.toLocaleString()}</div>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-xs font-mono mb-1 uppercase tracking-wider">
                  <Users className="w-3 h-3" /> Citizens Minted
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white">{stats.citizens.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 功能矩阵 (按照你的要求排序) */}
        <section className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          
          {/* A. 规则与白皮书 (重要信息) */}
          <Link href="/docs" className="group relative p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-slate-500 hover:bg-zinc-800 transition-all">
            <div className="absolute top-8 right-8 text-zinc-700 group-hover:text-white transition-colors">
              <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">SpaceSQ Rules & Whitepaper</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Complete documentation of the Genesis Protocol. Understand the laws of physics, economics, and governance in this new world.
            </p>
          </Link>

          {/* B. 地址申领 (用户关键功能) */}
          <Link href="/user" className="group relative p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500 hover:bg-zinc-800 transition-all">
            <div className="absolute top-8 right-8 text-zinc-700 group-hover:text-emerald-500 transition-colors">
              <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <Map className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Claim Address & Territory</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Secure your permanent digital coordinates. Manage your land assets and deploy nodes. (Requires Login)
            </p>
          </Link>

          {/* C. 身份编号申请 (用户关键功能) */}
          <Link href="/register" className="group relative p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500 hover:bg-zinc-800 transition-all">
            <div className="absolute top-8 right-8 text-zinc-700 group-hover:text-indigo-500 transition-colors">
              <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
              <Fingerprint className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Apply for Identity ID</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Mint your unique Genesis Citizen ID. Generate your cryptographic keys and establish your presence.
            </p>
          </Link>

          {/* D. 种子世界介绍与下载 */}
          <Link href="/user" className="group relative p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-amber-500 hover:bg-zinc-800 transition-all">
            <div className="absolute top-8 right-8 text-zinc-700 group-hover:text-amber-500 transition-colors">
              <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Download Seed World</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Get the Genesis client. Initialize your local node and sync with the mainnet. (Login Confirmation Required)
            </p>
          </Link>

        </section>

      </main>

      <Footer />
    </div>
  );
}