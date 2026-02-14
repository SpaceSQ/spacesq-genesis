import React, { useState } from 'react';
import { Globe, Map, Plus, Server, Signal, Box, Zap } from 'lucide-react';

export default function SpatialAdminPanel() {
  // 模拟的空间数据
  const [spaces] = useState([
    { id: 'SpaceSQ-Gen1-Node-001', owner: 'System', type: 'Genesis Node', status: 'Active', load: '45%' },
    { id: 'SpaceSQ-Gen1-Node-8848', owner: 'smarthomemiles', type: 'Personal Space', status: 'Active', load: '12%' },
    { id: 'SpaceSQ-Gen1-Node-9921', owner: 'AI-Agent-X', type: 'Research Lab', status: 'Idle', load: '0%' },
  ]);

  return (
    <div className="space-y-6">
      {/* 顶部统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 text-sm">Total Spaces</span>
            <Globe className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900">3</div>
          <div className="text-xs text-green-600 mt-1 flex items-center">
            <Zap className="w-3 h-3 mr-1" /> All systems normal
          </div>
        </div>
        
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 text-sm">Active Connections</span>
            <Signal className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900">1,024</div>
          <div className="text-xs text-slate-400 mt-1">IoT Devices Online</div>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 text-sm">Storage Usage</span>
            <Server className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900">45 TB</div>
          <div className="text-xs text-slate-400 mt-1">Genesis Block Data</div>
        </div>
      </div>

      {/* 空间列表 */}
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
            <Map className="w-4 h-4 text-slate-500" />
            Registered Space Nodes
          </h3>
          <button className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded hover:bg-indigo-700 transition-colors flex items-center gap-1">
            <Plus className="w-3 h-3" />
            Mint New Space
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">Space ID</th>
                <th className="px-4 py-3 font-medium">Owner</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Load</th>
                <th className="px-4 py-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {spaces.map((space) => (
                <tr key={space.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-mono text-indigo-600">{space.id}</td>
                  <td className="px-4 py-3 text-slate-700">{space.owner}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs border border-slate-200">
                      <Box className="w-3 h-3" />
                      {space.type}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                      space.status === 'Active' 
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                        : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${space.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                      {space.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600 font-mono">{space.load}</td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-slate-400 hover:text-indigo-600 text-xs font-medium">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}