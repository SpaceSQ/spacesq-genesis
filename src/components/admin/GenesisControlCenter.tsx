'use client'; // 👈 这一行就是修复报错的关键！必须在第一行！

import React, { useState } from 'react';
import { 
  Activity, Users, Shield, Globe, Terminal, 
  Map, Plus, Server, Signal, Box, Zap 
} from 'lucide-react';

// 1. 内联组件
function SpatialNodePanel() {
  const [spaces] = useState([
    { id: 'SpaceSQ-Gen1-Node-001', owner: 'System', type: 'Genesis Node', status: 'Active', load: '45%' },
    { id: 'SpaceSQ-Gen1-Node-8848', owner: 'smarthomemiles', type: 'Personal Space', status: 'Active', load: '12%' },
  ]);

  return (
    <div className="space-y-6">
      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
         <div className="flex items-center gap-2 font-bold text-slate-800">
            <Globe className="w-4 h-4 text-indigo-500" /> Space Nodes
         </div>
         <div className="mt-4 space-y-2">
            {spaces.map(s => (
                <div key={s.id} className="flex justify-between text-sm p-2 bg-white border rounded">
                    <span className="font-mono text-indigo-600">{s.id}</span>
                    <span className="text-emerald-600">{s.status}</span>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
}

// 2. 主组件
export default function GenesisControlCenter() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden min-h-[500px]">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Shield className="w-5 h-5 text-indigo-600" /> Genesis Control
        </h2>
        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded">ONLINE</span>
      </div>
      
      <div className="flex border-b px-6">
         <button onClick={() => setActiveTab('overview')} className={`p-4 text-sm font-medium ${activeTab === 'overview' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-500'}`}>Overview</button>
         <button onClick={() => setActiveTab('spatial')} className={`p-4 text-sm font-medium ${activeTab === 'spatial' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-500'}`}>Spatial</button>
      </div>

      <div className="p-6">
        {activeTab === 'overview' && (
            <div className="p-4 bg-slate-900 text-slate-300 rounded font-mono text-xs">
                <p>&gt; System initialized.</p>
                <p>&gt; Waiting for command...</p>
            </div>
        )}
        {activeTab === 'spatial' && <SpatialNodePanel />}
      </div>
    </div>
  );
}