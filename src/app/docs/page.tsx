'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { Book, Code, Box, GitBranch } from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-slate-300">
      <Navbar />

      <div className="max-w-7xl mx-auto pt-24 px-6 flex flex-col md:flex-row gap-12">
        
        {/* 左侧边栏导航 */}
        <aside className="w-full md:w-64 flex-shrink-0 md:border-r border-white/10 md:min-h-[calc(100vh-6rem)]">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Book className="w-4 h-4 text-indigo-500" /> Getting Started
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="block text-indigo-400 border-l-2 border-indigo-500 pl-4">Introduction</a></li>
                <li><a href="#" className="block text-slate-500 hover:text-white pl-4 border-l-2 border-transparent">Node Installation</a></li>
                <li><a href="#" className="block text-slate-500 hover:text-white pl-4 border-l-2 border-transparent">CLI Basics</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Box className="w-4 h-4 text-indigo-500" /> Architecture
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="block text-slate-500 hover:text-white pl-4 border-l-2 border-transparent">Consensus Mechanism</a></li>
                <li><a href="#" className="block text-slate-500 hover:text-white pl-4 border-l-2 border-transparent">Data Sharding</a></li>
                <li><a href="#" className="block text-slate-500 hover:text-white pl-4 border-l-2 border-transparent">Smart Contracts</a></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* 右侧主内容 */}
        <main className="flex-1 pb-20">
          <div className="prose prose-invert prose-lg max-w-none">
            
            <h1 className="text-4xl font-bold text-white mb-6">Introduction to SpaceSQ Protocol</h1>
            <p className="lead text-xl text-slate-400 mb-8">
              SpaceSQ is a Layer-0 infrastructure protocol designed for sovereign digital territories. It combines a decentralized storage network with a programmable governance layer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
                <Code className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">For Developers</h3>
                <p className="text-slate-500 text-sm mb-4">Build decentralized applications (dApps) directly on top of the SpaceSQ kernel using TypeScript or Rust.</p>
                <button className="text-emerald-500 text-sm font-medium hover:underline">View API Reference &rarr;</button>
              </div>
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
                <GitBranch className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">For Node Operators</h3>
                <p className="text-slate-500 text-sm mb-4">Earn SQ tokens by contributing storage and compute resources to the network.</p>
                <button className="text-amber-500 text-sm font-medium hover:underline">Setup Guide &rarr;</button>
              </div>
            </div>

            <h2>Core Concepts</h2>
            <p>
              The protocol operates on three fundamental laws:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li><strong>Immutability:</strong> Once a block is finalized, it cannot be altered.</li>
              <li><strong>Sovereignty:</strong> Private keys grant absolute control over assets.</li>
              <li><strong>Interoperability:</strong> Built-in bridges to Ethereum and Solana.</li>
            </ul>

            <div className="bg-indigo-950/30 border border-indigo-500/20 p-6 rounded-xl mt-8">
              <h4 className="text-indigo-400 font-bold mb-2">Quick Start</h4>
              <p className="text-sm text-slate-300 mb-4">Install the CLI tool to begin interacting with the testnet:</p>
              <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm">
                <code className="text-green-400">npm install -g spacesq-cli</code><br/>
                <code className="text-green-400">sq init --network testnet</code>
              </pre>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}