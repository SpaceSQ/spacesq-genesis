"use client";

import React, { useState } from 'react';
import { 
  LayoutDashboard, UserCircle, Map, Network, 
  Sprout, Bell, MessageSquare, LogOut, Hexagon
} from 'lucide-react';
import UserProfilePanel from './UserProfilePanel';
import UserTerritoryPanel from './UserTerritoryPanel'; // 稍后创建
import UserDiplomacyPanel from './UserDiplomacyPanel'; // 稍后创建

// --- 占位组件 ---
const PlaceholderModule = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-full text-zinc-600 border border-dashed border-zinc-800 rounded-xl bg-zinc-900/10">
    <Hexagon size={64} className="mb-4 opacity-20" />
    <h2 className="text-xl font-bold text-zinc-400">{title}</h2>
    <p className="font-mono text-sm mt-2">Available in Phase II</p>
  </div>
);

export const UserDashboardLayout = () => {
  const [activeModule, setActiveModule] = useState('PROFILE');

  const NAV_ITEMS = [
    { id: 'DASHBOARD', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'PROFILE', label: 'Identity & Profile', icon: UserCircle },
    { id: 'TERRITORY', label: 'My Territory', icon: Map },
    { id: 'DIPLOMACY', label: 'Diplomacy', icon: Network },
    { id: 'SEEDS', label: 'Seeds & Resources', icon: Sprout },
    { id: 'COMMS', label: 'Comms Center', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500 selection:text-black flex">
      
      {/* 1. 左侧导航栏 */}
      <nav className="w-64 border-r border-zinc-800 bg-[#080808] flex flex-col justify-between py-6 shrink-0">
        <div>
          <div className="px-6 mb-8 flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-full blur-[2px] opacity-80"></div>
            <span className="text-xl font-black tracking-tighter">SPACE<span className="text-cyan-500">SQ</span></span>
          </div>

          <div className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeModule === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveModule(item.id)}
                  className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all border-l-2
                    ${isActive 
                      ? 'bg-zinc-900 text-white border-cyan-500' 
                      : 'border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'}
                  `}
                >
                  <Icon size={18} className={isActive ? 'text-cyan-400' : ''} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="px-6">
           <button className="flex items-center gap-2 text-xs text-red-500 hover:text-red-400 font-bold tracking-widest uppercase">
             <LogOut size={14}/> Disconnect
           </button>
        </div>
      </nav>

      {/* 2. 主内容区 */}
      <main className="flex-1 overflow-hidden bg-black relative flex flex-col">
        {/* 顶部 HUD */}
        <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-black/50 backdrop-blur-md z-10">
           <div className="text-sm font-mono text-zinc-500">
             CURRENT NODE: <span className="text-green-500">PHY-Earth-Mainnet</span>
           </div>
           <div className="flex items-center gap-6">
              <div className="flex flex-col items-end">
                 <span className="text-xs font-bold text-white">Zhonghong.X</span>
                 <span className="text-[10px] text-cyan-500 font-mono">ID: E-LUM-260212...</span>
              </div>
              <div className="w-8 h-8 rounded border border-zinc-700 bg-zinc-800 flex items-center justify-center">
                 <Bell size={16} className="text-zinc-400"/>
              </div>
           </div>
        </header>

        {/* 内容视窗 */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {activeModule === 'DASHBOARD' && <PlaceholderModule title="OVERVIEW DASHBOARD" />}
          
          {/* 挂载重点：用户档案面板 */}
          {activeModule === 'PROFILE' && <UserProfilePanel />}
          
          {activeModule === 'TERRITORY' && <UserTerritoryPanel />} {/* 预留 */}
          {activeModule === 'DIPLOMACY' && <PlaceholderModule title="DIPLOMACY NETWORK" />}
          {activeModule === 'SEEDS' && <PlaceholderModule title="SEED LIBRARY" />}
          {activeModule === 'COMMS' && <PlaceholderModule title="COMMUNICATIONS" />}
        </div>
      </main>
    </div>
  );
};