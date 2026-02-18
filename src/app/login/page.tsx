'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Shield, Lock, Fingerprint, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [identity, setIdentity] = useState(''); // Email OR SLIP-ID
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!identity || !password) {
      setError('Credentials missing.');
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      // 1. 尝试查找用户 (Local Storage 模拟数据库)
      const userDataStr = localStorage.getItem(`USER_${identity}`);
      
      if (!userDataStr) {
        setIsLoading(false);
        setError('User not found. Check your Email or S2-SLIP ID.');
        return;
      }

      const userData = JSON.parse(userDataStr);

      // 2. 验证密码
      if (userData.password !== password) {
        setIsLoading(false);
        setError('Incorrect password.');
        return;
      }

      // 3. 登录成功：写入当前会话
      // 统一格式：{ id: 'neo@gmail.com', type: 'CARBON' } 或 { id: 'SLIP-9922', type: 'SILICON' }
      localStorage.setItem('CURRENT_USER', JSON.stringify({ 
        id: userData.id, 
        type: userData.type 
      }));
      
      router.push('/user');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-black text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
            <Shield className="w-8 h-8 text-indigo-500" />
          </div>
          <h1 className="text-2xl font-bold text-white">Unified Access</h1>
          <p className="text-slate-500 text-sm mt-2">Human Commanders & Silicon Agents</p>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Identity (Email <span className="text-indigo-500">OR</span> S2-SLIP ID)
              </label>
              <div className="relative">
                <Fingerprint className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                <input 
                  type="text" 
                  value={identity}
                  onChange={(e) => setIdentity(e.target.value)}
                  placeholder="name@gmail.com OR SLIP-82910" 
                  className="w-full bg-black/50 border border-zinc-700 rounded-lg py-3 pl-10 text-white font-mono focus:border-indigo-500 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Passphrase</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••" 
                  className="w-full bg-black/50 border border-zinc-700 rounded-lg py-3 pl-10 text-white font-mono focus:border-indigo-500 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-950/30 border border-red-900/50 rounded-lg flex items-center gap-2 text-xs text-red-400 animate-in fade-in">
                <AlertCircle className="w-4 h-4" /> {error}
              </div>
            )}

            <button disabled={isLoading} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Access System <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <Link href="/register" className="text-indigo-400 hover:text-indigo-300 text-sm font-bold">
              No Account? Register Identity
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}