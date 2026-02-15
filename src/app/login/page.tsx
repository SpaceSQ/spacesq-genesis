'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Shield, Lock, Fingerprint, ArrowRight, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // 模拟身份验证过程 (2秒后跳转)
    setTimeout(() => {
      router.push('/user');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* 动态背景装饰 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        
        {/* Logo区域 */}
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-indigo-900/20">
            <Shield className="w-8 h-8 text-indigo-500" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Genesis Identity Layer</h1>
          <p className="text-slate-500 text-sm mt-2">Secure Citizen Authentication Protocol</p>
        </div>

        {/* 登录卡片 */}
        <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          
          <form onSubmit={handleLogin} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-xs font-mono text-indigo-400 uppercase tracking-wider">Citizen ID / Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-500 transition-colors">
                  <Fingerprint className="w-5 h-5" />
                </div>
                <input 
                  type="text" 
                  placeholder="USER-001" 
                  className="w-full bg-black/50 border border-zinc-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-mono text-indigo-400 uppercase tracking-wider">Passphrase</label>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-500 transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••••••" 
                  className="w-full bg-black/50 border border-zinc-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-8"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Verifying Credentials...
                </>
              ) : (
                <>
                  Initiate Handshake <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-slate-500 text-xs">
              Don't have a citizenship?{' '}
              <Link href="/about" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                Apply for Residency
              </Link>
            </p>
          </div>
        </div>

        {/* 底部状态 */}
        <div className="mt-8 text-center animate-in fade-in duration-1000 delay-300">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-500/70 bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-900/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            ENCRYPTION: AES-256-GCM :: ACTIVE
          </div>
        </div>

      </div>
    </div>
  );
}