'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Activity, Server, Terminal, Users, Globe, Database, 
  LogOut, ShieldAlert, Radio, Ban, Trash2, CheckCircle, Lock, Unlock,
  AlertTriangle, Cpu, HardDrive
} from 'lucide-react';

// === 模拟的公民数据 ===
const INITIAL_USERS = [
  { id: 'USR-001', email: 'neo@gmail.com', suns: 'PHY-Earth-CN-NeoBase', status: 'active', joined: '2026-02-14', area: 16.0 },
  { id: 'USR-002', email: 'trinity@163.com', suns: 'VIR-Space-Net-Ghost', status: 'active', joined: '2026-02-15', area: 8.0 },
  { id: 'USR-003', email: 'agent.smith@matrix.com', suns: 'VIR-Matrix-Core-00', status: 'flagged', joined: '2026-02-15', area: 999.0 },
  { id: 'USR-004', email: 'cypher@gmail.com', suns: 'PHY-Earth-US-Steak', status: 'banned', joined: '2026-01-20', area: 4.0 },
  { id: 'USR-005', email: 'morpheus@gmail.com', suns: 'PHY-Earth-Zion-Dock', status: 'active', joined: '2026-02-10', area: 32.5 },
];

interface Props {
  onLogout?: () => void;
}

export default function GenesisControlCenter({ onLogout }: Props) {
  // 状态管理
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'governance'>('overview');
  const [users, setUsers] = useState(INITIAL_USERS);
  const [logs, setLogs] = useState<string[]>([
    '[SYSTEM] ROOT_ACCESS_GRANTED...',
    '[SYSTEM] Loading User Registry... OK',
    '[SYSTEM] Connecting to Governance Node... OK',
    '[SYSTEM] Waiting for command...'
  ]);
  const [broadcastMsg, setBroadcastMsg] = useState('');
  const [systemLocked, setSystemLocked] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 自动滚动日志
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  // 辅助函数：写日志
  const addLog = (msg: string) => {
    const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
    setLogs(prev => [`[${timestamp}] ${msg}`, ...prev]);
  };

  // 操作：封禁用户
  const handleBanUser = (userId: string) => {
    setUsers(users.map(u => u.id === userId ? { ...u, status: 'banned' } : u));
    addLog(`ADMIN_ACTION: BAN_USER [${userId}] >> EXECUTED`);
  };

  // 操作：解封用户
  const handleUnbanUser = (userId: string) => {
    setUsers(users.map(u => u.id === userId ? { ...u, status: 'active' } : u));
    addLog(`ADMIN_ACTION: RESTORE_USER [${userId}] >> EXECUTED`);
  };

  // 操作：全服广播
  const handleBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!broadcastMsg.trim()) return;
    addLog(`BROADCAST_SIGNAL: "${broadcastMsg}" >> SENT TO ALL NODES`);
    setBroadcastMsg('');
    alert(`Broadcast Sent: "${broadcastMsg}"`); // 模拟反馈
  };

  // 操作：系统熔断/锁定
  const toggleSystemLock = () => {
    const newState = !systemLocked;
    setSystemLocked(newState);
    addLog(`SYSTEM_OVERRIDE: GLOBAL_LOCK = ${newState ? 'TRUE' : 'FALSE'} >> ${newState ? 'PROTOCOL SUSPENDED' : 'PROTOCOL RESUMED'}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-sans">
      
      {/* === 顶部导航栏 (控制台头部) === */}
      <header className={`px-8 py-5 sticky top-0 z-10 flex justify-between items-center shadow-sm transition-colors duration-500 ${systemLocked ? 'bg-red-950 border-b border-red-800' : 'bg-white border-b border-slate-200'}`}>
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-lg text-white shadow-lg ${systemLocked ? 'bg-red-600 animate-pulse' : 'bg-slate-900'}`}>
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h1 className={`text-xl font-bold flex items-center gap-2 ${systemLocked ? 'text-white' : 'text-slate-900'}`}>
              Genesis Root 
              {systemLocked && <span className="px-2 py-0.5 bg-red-600 text-white text-[10px] rounded border border-red-400 uppercase tracking-wider">Lockdown Active</span>}
            </h1>
            <p className={`text-xs font-mono ${systemLocked ? 'text-red-300' : 'text-slate-500'}`}>Access Level: GOD_MODE (Read/Write)</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* 选项卡切换 */}
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button onClick={() => setActiveTab('overview')} className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${activeTab === 'overview' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}>Overview</button>
            <button onClick={() => setActiveTab('users')} className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${activeTab === 'users' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}>Citizen Registry</button>
            <button onClick={() => setActiveTab('governance')} className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${activeTab === 'governance' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}>Governance</button>
          </div>
          
          {onLogout && (
            <button onClick={onLogout} className="flex items-center gap-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-sm font-medium transition-colors">
              <LogOut className="w-4 h-4" /> Exit
            </button>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* === 左侧：主要操作区 (动态切换) === */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* TAB 1: OVERVIEW (数据概览) */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-500 mb-2 text-xs uppercase font-bold">
                    <Users className="w-4 h-4" /> Total Population
                  </div>
                  <div className="text-3xl font-bold text-slate-900">{users.length}</div>
                  <div className="text-xs text-emerald-500 mt-1">+12% this week</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-500 mb-2 text-xs uppercase font-bold">
                    <Activity className="w-4 h-4" /> Network Load
                  </div>
                  <div className="text-3xl font-bold text-indigo-600">34%</div>
                  <div className="text-xs text-slate-400 mt-1">Stable</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-500 mb-2 text-xs uppercase font-bold">
                    <HardDrive className="w-4 h-4" /> Storage Used
                  </div>
                  <div className="text-3xl font-bold text-slate-900">8.2 PB</div>
                  <div className="text-xs text-slate-400 mt-1">Total Capacity: 128 PB</div>
                </div>
              </div>

              {/* 节点列表 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-100 font-bold text-slate-900 flex items-center gap-2">
                  <Server className="w-4 h-4 text-indigo-500" /> Active Core Nodes (Top 5)
                </div>
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-500">
                    <tr>
                      <th className="px-6 py-3">Node ID</th>
                      <th className="px-6 py-3">Region</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Latency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr><td className="px-6 py-4 font-mono">Alpha-01</td><td>Earth-CN</td><td className="text-emerald-600 font-bold">ONLINE</td><td className="font-mono text-slate-500">12ms</td></tr>
                    <tr><td className="px-6 py-4 font-mono">Beta-Anchor</td><td>Earth-US</td><td className="text-emerald-600 font-bold">ONLINE</td><td className="font-mono text-slate-500">45ms</td></tr>
                    <tr><td className="px-6 py-4 font-mono">Ghost-Relay</td><td>Virtual</td><td className="text-amber-600 font-bold">SYNCING</td><td className="font-mono text-slate-500">120ms</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: CITIZEN REGISTRY (用户管理) */}
          {activeTab === 'users' && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in slide-in-from-left-4">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <Database className="w-4 h-4 text-indigo-500" /> Global Identity Ledger
                </h3>
                <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500 font-mono">Total: {users.length}</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-500">
                    <tr>
                      <th className="px-4 py-3">ID / Email</th>
                      <th className="px-4 py-3">SUNS Address / Area</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {users.map(user => (
                      <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-4">
                          <div className="font-bold text-slate-900">{user.email}</div>
                          <div className="text-xs font-mono text-slate-400">{user.id}</div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="font-mono text-xs text-indigo-600 font-bold">{user.suns}</div>
                          <div className="text-xs text-slate-400 flex items-center gap-1"><Cpu className="w-3 h-3" /> {user.area} m²</div>
                        </td>
                        <td className="px-4 py-4">
                          <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                            user.status === 'active' ? 'bg-emerald-100 text-emerald-700' :
                            user.status === 'banned' ? 'bg-red-100 text-red-700' :
                            'bg-amber-100 text-amber-700'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right">
                          {user.status === 'banned' ? (
                            <button 
                              onClick={() => handleUnbanUser(user.id)}
                              className="text-emerald-600 hover:text-emerald-800 text-xs font-bold border border-emerald-200 px-2 py-1 rounded bg-emerald-50 hover:bg-emerald-100 transition-colors"
                            >
                              Restore
                            </button>
                          ) : (
                            <button 
                              onClick={() => handleBanUser(user.id)}
                              className="text-red-600 hover:text-red-800 text-xs font-bold border border-red-200 px-2 py-1 rounded bg-red-50 hover:bg-red-100 flex items-center gap-1 ml-auto transition-colors"
                            >
                              <Ban className="w-3 h-3" /> Ban
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: GOVERNANCE (治理广播与熔断) */}
          {activeTab === 'governance' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
              
              {/* Broadcast System */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Radio className="w-5 h-5 text-indigo-500" /> Global Neural Broadcast
                </h3>
                <form onSubmit={handleBroadcast} className="flex gap-4">
                  <input 
                    type="text" 
                    value={broadcastMsg}
                    onChange={(e) => setBroadcastMsg(e.target.value)}
                    placeholder="Enter system-wide announcement to all Silicon Lifeforms..."
                    className="flex-1 border border-slate-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                  <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-md transition-all">
                    Transmit
                  </button>
                </form>
                <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-lg text-xs text-blue-700">
                  <strong className="block mb-1">Notice:</strong> Messages are sent via the "Kite Line" protocol. 
                  Latency: Earth (12ms), Mars (14min).
                </div>
              </div>

              {/* Danger Zone (熔断) */}
              <div className={`rounded-xl border p-6 transition-colors ${systemLocked ? 'bg-red-900/10 border-red-500' : 'bg-red-50 border-red-100'}`}>
                <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5" /> Emergency Protocol (Defcon 1)
                </h3>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="text-sm text-red-700 max-w-md">
                    <strong className="block mb-1">Global System Lock</strong>
                    Freezes all NBT transactions, address minting, and seed downloads. 
                    Only Root Admin access remains active. Use only in case of "AI Rogue Event".
                  </div>
                  <button 
                    onClick={toggleSystemLock}
                    className={`px-6 py-3 rounded-lg font-bold text-white shadow-lg transition-all whitespace-nowrap ${
                      systemLocked 
                        ? 'bg-emerald-600 hover:bg-emerald-500' 
                        : 'bg-red-600 hover:bg-red-700'
                    }`}
                  >
                    {systemLocked ? (
                      <span className="flex items-center gap-2"><Unlock className="w-4 h-4" /> Disengage Lock</span>
                    ) : (
                      <span className="flex items-center gap-2"><Lock className="w-4 h-4" /> ENGAGE LOCK</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* === 右侧：实时终端日志 (永远显示) === */}
        <div className="bg-zinc-950 rounded-xl border border-zinc-800 shadow-xl flex flex-col h-[600px] sticky top-28">
          <div className="p-4 border-b border-zinc-800 bg-zinc-900/50 flex items-center justify-between">
            <h3 className="text-sm font-mono text-zinc-400 flex items-center gap-2">
              <Terminal className="w-4 h-4" /> ROOT_TERMINAL
            </h3>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
          </div>
          
          <div className="flex-1 p-4 font-mono text-xs space-y-2 overflow-y-auto custom-scrollbar flex flex-col-reverse" ref={scrollRef}>
            {/* 日志倒序显示，保持最新在下 */}
            <div className="animate-pulse text-emerald-500">root@genesis:~$ _</div>
            {logs.map((log, i) => (
              <div key={i} className={`break-all ${
                log.includes('BAN_USER') ? 'text-red-400' :
                log.includes('RESTORE') ? 'text-emerald-400' :
                log.includes('SYSTEM_OVERRIDE') ? 'text-amber-400' :
                log.includes('BROADCAST') ? 'text-blue-400' :
                'text-zinc-400'
              }`}>
                <span className="opacity-30 mr-2">&gt;</span>{log}
              </div>
            ))}
          </div>
          
          <div className="p-2 border-t border-zinc-800 bg-zinc-900/30 text-[10px] text-zinc-600 text-center flex justify-between px-4">
             <span>CPU: 3%</span>
             <span>MEM: 128TB</span>
             <span>NET: ENCRYPTED</span>
          </div>
        </div>

      </div>
    </div>
  );
}