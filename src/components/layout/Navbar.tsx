'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Shield, Terminal, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-indigo-600/20 border border-indigo-500/50 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all text-indigo-400">
            <Globe className="w-5 h-5" />
          </div>
          <span className="font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            SpaceSQ <span className="text-indigo-500">Genesis</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link href="/docs" className="hover:text-white transition-colors">Protocol Docs</Link>
          <Link href="/about" className="hover:text-white transition-colors">Manifesto</Link>
          <div className="h-4 w-[1px] bg-white/10"></div>
          <Link href="/login" className="hover:text-white transition-colors">Sign In</Link>
          <Link 
            href="/user" 
            className="px-4 py-2 bg-white text-black rounded-lg hover:bg-slate-200 transition-colors font-bold"
          >
            Launch App
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-slate-400 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}