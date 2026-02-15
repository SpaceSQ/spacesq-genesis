'use client';

import React, { useState } from 'react';
import { Map, Zap, Check, Lock } from 'lucide-react';

export default function UserTerritoryPanel() {
  const [selectedSector, setSelectedSector] = useState<number | null>(null);

  // 模拟 4x4 的地块网格
  const sectors = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    status: i === 5 ? 'owned' : i === 6 || i === 9 ? 'locked' : 'free', // 5号是你的，6/9被锁定，其他空闲
    coordinates: `SEC-${100 + i}`
  }));

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Territory Grid</h2>
              <p className="text-sm text-slate-500">Manage your sovereign digital land</p>
            </div>
          </div>
          <div className="text-right">
             <div className="text-sm text-slate-500">Total Assets</div>
             <div className="text-2xl font-mono font-bold text-slate-900">1,200 SQ</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 左侧：可视化地图 */}
          <div className="aspect-square bg-slate-50 rounded-lg p-4 grid grid-cols-4 gap-2 border border-slate-100">
            {sectors.map((sector) => (
              <button
                key={sector.id}
                onClick={() => setSelectedSector(sector.id)}
                className={`relative rounded-md border transition-all duration-200 flex items-center justify-center text-xs font-mono
                  ${selectedSector === sector.id ? 'ring-2 ring-indigo-500 ring-offset-2 z-10' : ''}
                  ${sector.status === 'owned' 
                    ? 'bg-indigo-500 border-indigo-600 text-white' 
                    : sector.status === 'locked' 
                      ? 'bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed' 
                      : 'bg-white border-slate-200 text-slate-400 hover:border-indigo-300 hover:bg-indigo-50'
                  }
                `}
              >
                {sector.status === 'owned' && <Zap className="w-4 h-4" />}
                {sector.status === 'locked' && <Lock className="w-3 h-3" />}
                {sector.status === 'free' && sector.id + 1}
              </button>
            ))}
          </div>

          {/* 右侧：详情面板 */}
          <div className="flex flex-col justify-center space-y-4">
            {selectedSector !== null ? (
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 animate-in fade-in slide-in-from-right-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Sector {sectors[selectedSector].coordinates}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Status</span>
                    <span className="font-medium capitalize">{sectors[selectedSector].status}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Resource Density</span>
                    <span className="font-medium">High</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Tax Rate</span>
                    <span className="font-medium">0.5%</span>
                  </div>
                </div>

                {sectors[selectedSector].status === 'free' ? (
                  <button className="w-full py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition flex items-center justify-center gap-2">
                    Claim Sector (500 SQ)
                  </button>
                ) : sectors[selectedSector].status === 'owned' ? (
                  <button className="w-full py-2 bg-emerald-600 text-white rounded-lg font-medium cursor-default flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" /> You Own This
                  </button>
                ) : (
                   <button disabled className="w-full py-2 bg-slate-200 text-slate-400 rounded-lg font-medium cursor-not-allowed">
                    Sector Locked
                  </button>
                )}
              </div>
            ) : (
              <div className="text-center text-slate-400 py-12 border-2 border-dashed border-slate-200 rounded-xl">
                <Map className="w-10 h-10 mx-auto mb-2 opacity-20" />
                <p>Select a sector to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}