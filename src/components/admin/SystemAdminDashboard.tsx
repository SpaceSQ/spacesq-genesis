"use client";

/**
 * SpaceSQ System Admin Dashboard
 * Version: v1.0.1 (Cache-Buster Edition)
 * Updated: 2026-02-13
 * Module: Core Frame Integration
 */

import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Map, Sprout, Shield, Terminal, 
  Award, Bell, Settings, Activity, Globe, AlertTriangle, Cpu
} from 'lucide-react';

// 引入已完成的子面板
import UserManagementPanel from './UserManagementPanel';
import SpatialAdminPanel from './SpatialAdminPanel';
import GlobalMonitorPanel from './GlobalMonitorPanel'; 
import SeedEvolutionPanel from './SeedEvolutionPanel'; 
import SecOpsPanel from './SecOpsPanel';

// --- 类型定义 ---
type AdminModule = 'GLOBAL' | 'USER' | 'SPACE' | 'SEED' | 'SEC' | 'AI' | 'QUEST';

// --- 占位组件 (用于尚未开发的模块) ---
const PlaceholderModule = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-full min-h-[600px] text-zinc-600 border border-dashed border-zinc-800 rounded-xl bg-zinc-900/10 animate-in fade-in duration-500">
    <Terminal size={64} className="mb-4 opacity-20" />
    <h2 className="text-xl font-bold text-zinc-400">{title} MODULE</h2>
    <p className="font-mono text-sm mt-2 text-zinc-600">UNDER CONSTRUCTION... [P-2026-WIP]</p>
  </div>
);

export const SystemAdminDashboard = () => {
  // 默认进入 "USER" 模块，方便你直接看到刚才的成果
  const [activeModule, setActiveModule] = useState<AdminModule>('USER');

  // 导航配置
  const NAV_ITEMS = [
    { id: 'GLOBAL', label: 'Global Monitor', icon: LayoutDashboard, color: 'text-blue-400' },
    { id: 'USER', label: 'Civilization Registry', icon: Users, color: 'text-purple-400' },
    { id: 'SPACE', label: 'Spatial Admin', icon: Map, color: 'text-emerald-400' },
    { id: 'SEED', label: 'Seed & Evolution', icon: Sprout, color: 'text-green-400' },
    { id: 'SEC', label: 'SecOps Center', icon: Shield, color: 'text-red-400' },
    { id: 'AI', label: 'AI & Dev Ops', icon: Cpu, color: 'text-cyan-400' },
    { id: 'QUEST', label: 'Quest & Bounty', icon: Award, color: 'text-amber-400' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white flex flex-col">
      
      {/* 1. 顶部 HUD (全网心跳) */}
      <header className="h-14 border-b border-zinc-800 bg-[#050505] flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-4">
          <div className="text-xl font-black tracking-tighter flex items-center gap-2">
            SPACE<span className="text-blue-500">SQ</span> <span className="text-zinc-600 text-xs font-mono px-2 py-0.5 border border-zinc-800 rounded">GENESIS_ADMIN</span>
          </div>
        </div>

        {/* 全网实时指标 */}
        <div className="flex items-center gap-8 text-xs font-mono hidden md:flex">
           <div className="flex items-center gap-2 text-zinc-400">
              <Globe size={14} className="text-blue-500"/>
              <span>NODES: <span className="text-white font-bold">1,042</span></span>
           </div>
           <div className="flex items-center gap-2 text-zinc-400">
              <Users size={14} className="text-purple-500"/>
              <span>POP: <span className="text-white font-bold">8,920</span></span>
           </div>
           <div className="flex items-center gap-2 text-zinc-400">
              <Activity size={14} className="text-green-500"/>
              <span>TPS: <span className="text-white font-bold">450</span></span>
           </div>
           <div className="flex items-center gap-2 text-zinc-400 px-3 py-1 bg-red-900/20 border border-red-900/50 rounded">
              <AlertTriangle size={14} className="text-red-500 animate-pulse"/>
              <span>DEFCON: <span className="text-red-500 font-bold">LEVEL 4</span></span>
           </div>
        </div>

        <div className="flex items-center gap-4">
           <button className="text-zinc-500 hover:text-white transition-colors"><Bell size={18}/></button>
           <button className="text-zinc-500 hover:text-white transition-colors"><Settings size={18}/></button>
           <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 border border-white/20 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
        </div>
      </header>

      {/* 2. 主体区域 */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* 左侧导航栏 */}
        <nav className="w-64 border-r border-zinc-800 bg-[#080808] flex flex-col py-6 space-y-1 shrink-0">
          <div className="px-6 mb-4 text-[10px] font-bold text-zinc-600 tracking-widest uppercase">Command Modules</div>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveModule(item.id as AdminModule)}
                className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all relative group
                  ${isActive ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'}
                `}
              >
                <Icon size={18} className={`transition-colors ${isActive ? item.color : 'text-zinc-600 group-hover:text-zinc-400'}`} />
                {item.label}
                {isActive && <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.color.replace('text', 'bg')}`}></div>}
              </button>
            );
          })}
        </nav>
        {/* 模块路由挂载点 */}
{activeModule === 'GLOBAL' && <GlobalMonitorPanel />} {/* 替换占位符 */}

{activeModule === 'USER' && <UserManagementPanel />}
{activeModule === 'SPACE' && <SpatialAdminPanel />}

{activeModule === 'SEED' && <SeedEvolutionPanel />} {/* 替换占位符 */}
{activeModule === 'SEC' && <SecOpsPanel />} {/* 替换占位符 */}

{activeModule === 'AI' && <PlaceholderModule title="AI & DEV OPS" />}
{activeModule === 'QUEST' && <PlaceholderModule title="QUEST & BOUNTY" />}

        {/* 右侧内容视窗 */}
        <main className="flex-1 overflow-hidden bg-black p-6 relative">
           {/* 背景装饰：碳纤维纹理 */}
           <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           
           <div className="h-full w-full overflow-hidden relative z-10 flex flex-col">
          
           </div>
        </main>
      </div>
    </div>
  );
};

export default SystemAdminDashboard;