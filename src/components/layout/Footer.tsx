import React from 'react';
// 👇 关键修复：补全了这两个缺失的引用
import Link from 'next/link';
import { ShieldCheck, Github, Globe, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <span className="text-zinc-100 font-bold tracking-tight">SpaceSQ Genesis</span>
        </div>

        {/* Legal / License Section (这里就是之前报错的地方) */}
        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <Link href="/legal" className="hover:text-white transition-colors flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>SCL-1.0 License</span>
          </Link>
          
          <span className="hidden md:inline text-zinc-800">|</span>
          
          <span>© 2024 SpaceSQ Foundation</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/SpaceSQ" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          {/* 预留 Twitter 位置 */}
          <div className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
            <Twitter className="w-5 h-5" />
          </div>
        </div>

      </div>
    </footer>
  );
}