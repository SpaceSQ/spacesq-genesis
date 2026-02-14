"use client";

import React, { useState } from 'react';
import { 
  Map, Box, Activity, AlertTriangle, Search, 
  Globe, Maximize2, XCircle, Users,
  Eye, EyeOff, Layers, Hexagon, Link as LinkIcon
} from 'lucide-react';

// --- 1. 类型定义 ---

type SpaceType = 'PHY' | 'VIR';
type HealthStatus = 'HEALTHY' | 'BURST' | 'CRITICAL' | 'HYPER-LIMIT';

interface SSSU {
  id: string;
  name: string;
  elements: { lux: number; temp: number };
  occupancy: number; 
}

interface Container {
  id: string;
  name: string;
  area: number;
  sssuCount: number;
  isBurst: boolean; 
  sssus: SSSU[];
}

interface SpatialNode {
  suns: string;
  ownerId: string; 
  ownerName: string;
  type: SpaceType;
  totalArea: number;
  status: HealthStatus;
  containers: Container[];
  connections: string[]; 
  lastActive: string;
}

// --- 2. 模拟数据 ---

const MOCK_SPACES: SpatialNode[] = [
  {
    suns: 'PHY-Earth-BJ-Home01',
    ownerId: 'u-001',
    ownerName: 'Master Architect',
    type: 'PHY',
    totalArea: 20.5,
    status: 'HEALTHY',
    lastActive: '10 mins ago',
    connections: ['VIR-Mars-001'],
    containers: [
      { 
        id: 'c1', name: 'Living Room', area: 16.0, sssuCount: 2, isBurst: false,
        sssus: [
          { id: 's1', name: 'Sofa', elements: { lux: 200, temp: 24 }, occupancy: 1 },
          { id: 's2', name: 'Reading', elements: { lux: 400, temp: 24 }, occupancy: 0 }
        ]
      }
    ]
  },
  {
    suns: 'VIR-Mars-001',
    ownerId: 'u-002',
    ownerName: 'LUMI_01',
    type: 'VIR',
    totalArea: 4.0,
    status: 'HYPER-LIMIT',
    lastActive: 'Just now',
    connections: ['PHY-Earth-BJ-Home01'],
    containers: [
      { 
        id: 'c9', name: 'Simulation Lab', area: 4.0, sssuCount: 1, isBurst: false,
        sssus: [{ id: 's9', name: 'Magma Core', elements: { lux: 0, temp: 1200 }, occupancy: 0 }]
      }
    ]
  }
];

// --- 3. 组件定义 (防御性写法) ---

export default function SpatialAdminPanel() {
  const [godMode, setGodMode] = useState(false); 
  const [selectedNode, setSelectedNode] = useState<SpatialNode | null>(null);
  const [filterType, setFilterType] = useState('ALL');

  // 1. 明确的过滤逻辑
  const displaySpaces = MOCK_SPACES.filter((s) => {
     if (filterType === 'ALL') { return true; }
     return s.type === filterType;
  });

  // 2. 明确的 Return 结构
  return (
    <div className="flex h-[800px] bg-black border border-zinc-800 rounded-xl overflow-hidden font-sans text-zinc-300">
      
      {/* 左侧：空间列表 */}
      <div className="w-1/3 border-r border-zinc-800 flex flex-col bg-zinc-900/30">
        
        {/* 顶部控制栏 */}
        <div className="p-4 border-b border-zinc-800 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <Globe size={16} className="text-blue-500"/> SPATIAL REGISTRY
            </h2>
            <div className="flex gap-1 bg-zinc-900 rounded p-1">
              <button 
                onClick={() => setFilterType('ALL')}
                className={`px-2 py-0.5 text-[10px] rounded ${filterType === 'ALL' ? 'bg-zinc-700 text-white' : 'text-zinc-500'}`}>ALL</button>
              <button 
                onClick={() => setFilterType('PHY')}
                className={`px-2 py-0.5 text-[10px] rounded ${filterType === 'PHY' ? 'bg-green-900/50 text-green-400' : 'text-zinc-500'}`}>PHY</button>
              <button 
                onClick={() => setFilterType('VIR')}
                className={`px-2 py-0.5 text-[10px] rounded ${filterType === 'VIR' ? 'bg-cyan-900/50 text-cyan-400' : 'text-zinc-500'}`}>VIR</button>
            </div>
          </div>
          
          <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={14} />
             <input type="text" placeholder="Search SUNS Code..." className="w-full bg-black border border-zinc-700 rounded px-9 py-2 text-xs focus:border-blue-500 outline-none text-white"/>
          </div>
        </div>

        {/* 列表区域 - 使用显式 Return */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {displaySpaces.map((space) => {
            return (
              <div 
                key={space.suns}
                onClick={() => setSelectedNode(space)}
                className={`p-4 border-b border-zinc-800/50 cursor-pointer hover:bg-zinc-800/50 transition-all group relative
                  ${selectedNode?.suns === space.suns ? 'bg-zinc-800' : ''}
                `}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 
                  ${space.status === 'HEALTHY' ? 'bg-green-500' : 
                    space.status === 'BURST' ? 'bg-red-500 animate-pulse' : 
                    space.status === 'HYPER-LIMIT' ? 'bg-orange-500' : 'bg-zinc-500'}`} 
                />
                
                <div className="ml-2">
                  <div className="flex justify-between items-start mb-1">
                     <div className="font-mono text-xs font-bold text-white truncate max-w-[160px]">{space.suns}</div>
                     <div className={`text-[9px] px-1.5 py-0.5 rounded font-bold
                        ${space.status === 'HEALTHY' ? 'bg-green-900/20 text-green-500' : 
                          space.status === 'BURST' ? 'bg-red-900/20 text-red-500' : 
                          'bg-orange-900/20 text-orange-500'}`}>
                        {space.status}
                     </div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-zinc-500">
                     <span>{space.ownerName}</span>
                     <span>{space.totalArea}m²</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 右侧：全域透视 */}
      <div className="w-2/3 flex flex-col bg-[#050505] relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
        </div>

        {selectedNode ? (
          <div className="flex-1 overflow-y-auto custom-scrollbar p-8 z-10">
            
            {/* 顶部详情 */}
            <div className="flex justify-between items-start mb-8 pb-6 border-b border-zinc-800">
               <div>
                  <h1 className="text-3xl font-black text-white font-mono tracking-tighter mb-2">
                    {selectedNode.suns}
                  </h1>
                  <div className="flex gap-4 text-xs font-mono text-zinc-400">
                     <span className="flex items-center gap-1"><Users size={12}/> {selectedNode.ownerName} ({selectedNode.ownerId})</span>
                     <span className="flex items-center gap-1"><Activity size={12}/> Active: {selectedNode.lastActive}</span>
                     <span className="flex items-center gap-1"><LinkIcon size={12}/> Connections: {selectedNode.connections.length}</span>
                  </div>
               </div>
               
               <button 
                 onClick={() => setGodMode(!godMode)}
                 className={`flex items-center gap-2 px-3 py-2 rounded border transition-all
                   ${godMode ? 'bg-blue-900/20 border-blue-500 text-blue-400' : 'bg-zinc-900 border-zinc-700 text-zinc-500 hover:text-white'}
                 `}
               >
                 {godMode ? <Eye size={16}/> : <EyeOff size={16}/>}
                 <span className="text-xs font-bold">GOD MODE: {godMode ? 'ON' : 'OFF'}</span>
               </button>
            </div>

            {/* 容器透视 */}
            <div className="space-y-6">
              {selectedNode.containers.map((container) => {
                return (
                  <div key={container.id} className={`border rounded-xl p-5 transition-all
                    ${container.isBurst 
                      ? 'border-red-500/50 bg-red-900/10' 
                      : 'border-zinc-800 bg-zinc-900/20 hover:border-zinc-700'}
                  `}>
                    <div className="flex justify-between items-center mb-4">
                       <div className="flex items-center gap-3">
                          <Box className={container.isBurst ? 'text-red-500' : 'text-zinc-500'} size={20}/>
                          <div>
                             <div className="text-sm font-bold text-zinc-200">{container.name}</div>
                             <div className="text-[10px] text-zinc-500 font-mono">
                               ID: {container.id} | Defined Area: <span className={container.isBurst ? 'text-red-500 font-bold' : ''}>{container.area}m²</span>
                             </div>
                          </div>
                       </div>
                       {container.isBurst && (
                         <div className="flex items-center gap-1 text-red-500 text-xs font-bold animate-pulse">
                            <AlertTriangle size={14}/> BURST WARNING
                         </div>
                       )}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                       {container.sssus.map((sssu) => {
                         return (
                           <div key={sssu.id} className={`
                             relative p-3 rounded border flex flex-col gap-2 overflow-hidden
                             ${godMode ? 'border-blue-500/30 bg-blue-900/10' : 'border-zinc-700 bg-black'}
                           `}>
                              <div className="flex justify-between items-start">
                                 <span className="text-xs font-bold text-zinc-300">{sssu.name}</span>
                                 <Hexagon size={12} className="text-zinc-600"/>
                              </div>
                              
                              {godMode && (
                                 <div className="text-[9px] font-mono space-y-1 text-blue-300/80">
                                    <div>TEMP: {sssu.elements.temp}°C</div>
                                    <div>LUX: {sssu.elements.lux}</div>
                                    <div>OCC: {sssu.occupancy}/4</div>
                                    {sssu.elements.temp > 1000 && (
                                       <div className="text-orange-400 font-bold animate-pulse">>> HYPER <<</div>
                                    )}
                                 </div>
                              )}

                              {!godMode && (
                                 <div className="text-[10px] text-zinc-500">
                                    {sssu.elements.temp > 1000 ? 'EXTREME ENV' : 'Standard Env'}
                                 </div>
                              )}
                           </div>
                         );
                       })}
                       
                       {godMode && container.area > container.sssus.length * 4 && (
                         <div className="border border-dashed border-zinc-800 p-3 rounded flex items-center justify-center text-zinc-700 text-[10px] italic">
                            Implicit Void ({(container.area - container.sssus.length * 4).toFixed(1)}m²)
                         </div>
                       )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* 底部操作 */}
            <div className="mt-8 pt-6 border-t border-zinc-800 flex gap-4">
               <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-xs text-white font-bold flex items-center gap-2">
                  <Maximize2 size={14}/> FORCE EXPAND
               </button>
               <button className="px-4 py-2 border border-red-900 text-red-500 hover:bg-red-900/20 rounded text-xs font-bold flex items-center gap-2">
                  <XCircle size={14}/> RESET SPACE
               </button>
            </div>

          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-zinc-600">
             <Layers size={64} className="mb-4 opacity-10 animate-pulse"/>
             <p className="font-mono text-sm">SELECT A SPATIAL NODE TO INSPECT</p>
          </div>
        )}
      </div>
    </div>
  );
}