import React, { useState } from 'react';
import { 
  Activity, 
  Users, 
  Database, 
  Settings, 
  Shield, 
  Globe, 
  Terminal 
} from 'lucide-react';

// 关键引用：确保这里引用的文件名与实际文件名完全一致（大小写敏感）
import SpatialAdminPanel from './SpatialAdminPanel';

export default function SystemAdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      
      {/* Dashboard Header */}
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-600" />
            System Administrator
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            SpaceSQ Genesis Node Control Center
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-mono">
          <Activity className="w-3 h-3" />
          System Optimal
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-slate-100 px-6 bg-white">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'overview'
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <Activity className="w-4 h-4" />
          Overview
        </button>
        <button
          onClick={() => setActiveTab('spatial')}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'spatial'
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <Globe className="w-4 h-4" />
          Spatial Nodes
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'users'
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <Users className="w-4 h-4" />
          User Management
        </button>
      </div>

      {/* Main Content Area */}
      <div className="p-6 min-h-[400px]">
        
        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-100">
                <div className="text-indigo-600 font-bold text-lg mb-1">System Load</div>
                <div className="text-3xl font-mono font-bold text-slate-900">12%</div>
                <div className="text-xs text-indigo-400 mt-2">CPU / Memory Optimized</div>
              </div>
              <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                <div className="text-blue-600 font-bold text-lg mb-1">Total Assets</div>
                <div className="text-3xl font-mono font-bold text-slate-900">1,024 SQC</div>
                <div className="text-xs text-blue-400 mt-2">Circulating Supply</div>
              </div>
              <div className="p-5 bg-purple-50 rounded-xl border border-purple-100">
                <div className="text-purple-600 font-bold text-lg mb-1">AI Agents</div>
                <div className="text-3xl font-mono font-bold text-slate-900">8</div>
                <div className="text-xs text-purple-400 mt-2">Active Sessions</div>
              </div>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-slate-300 overflow-hidden">
               <div className="flex items-center gap-2 text-emerald-400 mb-2 border-b border-slate-700 pb-2">
                 <Terminal className="w-3 h-3" /> System Logs
               </div>
               <p>> [10:00:01] Genesis Block verified.</p>
               <p>> [10:05:23] New user registration: ID #9921</p>
               <p>> [10:12:00] Spatial index updated.</p>
               <p className="animate-pulse">> _</p>
            </div>
          </div>
        )}

        {/* Tab 2: Spatial Admin Panel (Here is the imported component) */}
        {activeTab === 'spatial' && (
          <div className="animate-in fade-in duration-300">
            <SpatialAdminPanel />
          </div>
        )}

        {/* Tab 3: Users Placeholder */}
        {activeTab === 'users' && (
          <div className="text-center py-20 text-slate-400 animate-in fade-in duration-300">
            <Users className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>User management module is loading...</p>
          </div>
        )}

      </div>
    </div>
  );
}