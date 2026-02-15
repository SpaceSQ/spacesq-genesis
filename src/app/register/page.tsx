'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Fingerprint, ArrowRight, Loader2, Cpu, Sparkles } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [stage, setStage] = useState('idle'); // idle | generating | minting | done

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStage('generating');
    
    // 模拟注册流程的三个阶段
    setTimeout(() => setStage('minting'), 1500);
    setTimeout(() => setStage('done'), 3000);
    setTimeout(() => {
      router.push('/user'); // 注册成功，跳转到用户中心
    }, 4000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-black text-white">
      
      {/* 动态背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Mint Identity</h1>
          <p className="text-slate-500 text-sm">Create your sovereign node on Genesis</p>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          
          {/* 注册表单 */}
          <form onSubmit={handleRegister} className={`space-y-6 transition-opacity duration-500 ${isLoading ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}>
            
            <div className="space-y-2">
              <label className="text-xs font-mono text-emerald-500 uppercase tracking-wider">Desired Callsign</label>
              <input 
                type="text" 
                placeholder="NEO_ANDERSON" 
                className="w-full bg-black/50 border border-zinc-700 rounded-lg py-3 px-4 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-all font-mono"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-emerald-500 uppercase tracking-wider">Secret Passphrase</label>
              <input 
                type="password" 
                placeholder="••••••••••••••••" 
                className="w-full bg-black/50 border border-zinc-700 rounded-lg py-3 px-4 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-all font-mono"
                required
              />
              <p className="text-[10px] text-slate-500">Must be at least 12 characters. You are responsible for your keys.</p>
            </div>

            <button 
              type="submit" 
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 group mt-6 shadow-lg shadow-emerald-900/20"
            >
              Initialize Node <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* 加载/生成动画层 */}
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm z-20">
              <div className="text-emerald-400 mb-4">
                {stage === 'generating' && <Cpu className="w-12 h-12 animate-pulse" />}
                {stage === 'minting' && <Fingerprint className="w-12 h-12 animate-pulse" />}
                {stage === 'done' && <Sparkles className="w-12 h-12 animate-bounce" />}
              </div>
              <div className="text-sm font-mono text-white">
                {stage === 'generating' && "GENERATING RSA-4096 KEYS..."}
                {stage === 'minting' && "MINTING GENESIS BLOCK..."}
                {stage === 'done' && "IDENTITY CONFIRMED."}
              </div>
              <div className="mt-4 w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 animate-[loading_2s_ease-in-out_infinite]"></div>
              </div>
            </div>
          )}

        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-xs">
            Already a citizen?{' '}
            <Link href="/login" className="text-emerald-400 hover:text-emerald-300 transition-colors underline decoration-emerald-500/30">
              Access Terminal
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}