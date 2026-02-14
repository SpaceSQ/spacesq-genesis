"use client";

import React from 'react';
import { Box, Plus, Settings } from 'lucide-react';

export default function UserTerritoryPanel() {
  const SPACES = [
    { id: 1, name: "Alpha Home", suns: "PHY-Earth-BJ-Home01", type: "PHY", area: 20.5 },
    { id: 2, name: "Mars Outpost", suns: "VIR-Mars-Utopia-Base01", type: "VIR", area: 4.0 },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black text-white">MY TERRITORY</h1>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-bold flex items-center gap-2">
           <Plus size={16}/> CLAIM NEW SPACE
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* 空间卡片 */}
         {SPACES.map(space => (
           <div key={space.id} className="bg-[#0a0a0a] border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all group">
              <div className="h-32 bg-zinc-900 relative overflow-hidden">
                 {/* 模拟缩略图背景 */}
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
                 <div className="absolute bottom-3 left-3">
                    <div className="font-bold text-white text-lg">{space.name}</div>
                    <div className="font-mono text-[10px] text-zinc-400 bg-black/50 px-1 rounded">{space.suns}</div>
                 </div>
                 <div className={`absolute top-3 right-3 px-2 py-1 rounded text-[10px] font-bold border ${space.type === 'PHY' ? 'bg-green-900/30 text-green-500 border-green-900' : 'bg-cyan-900/30 text-cyan-500 border-cyan-900'}`}>
                    {space.type}
                 </div>
              </div>
              
              <div className="p-4">
                 <div className="flex justify-between items-center text-xs text-zinc-500 mb-4">
                    <span>Area: <span className="text-white font-mono">{space.area}m²</span></span>
                    <span>Status: <span className="text-green-500">Active</span></span>
                 </div>
                 <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold rounded flex items-center justify-center gap-2">
                       <Box size={14}/> ENTER
                    </button>
                    <button className="p-2 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 rounded">
                       <Settings size={14}/>
                    </button>
                 </div>
              </div>
           </div>
         ))}
         
         {/* 空卡槽 */}
         {SPACES.length < 3 && (
            <div className="border-2 border-dashed border-zinc-800 rounded-xl flex flex-col items-center justify-center text-zinc-600 hover:border-zinc-700 hover:text-zinc-500 cursor-pointer h-[240px] transition-all">
               <Plus size={32} className="mb-2 opacity-50"/>
               <span className="text-xs font-bold">ACTIVATE EMPTY SLOT</span>
            </div>
         )}
      </div>
    </div>
  );
}