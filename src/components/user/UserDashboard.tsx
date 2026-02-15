'use client';
import React, { useState } from 'react';
import { User, Map, Flag } from 'lucide-react';
// 👇 引用新创建的真实组件
import UserTerritoryPanel from './UserTerritoryPanel';
import UserDiplomacyPanel from './UserDiplomacyPanel';
import UserProfilePanel from './UserProfilePanel'; 

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <aside className="w-full md:w-64 flex-shrink-0 space-y-1">
        <button onClick={() => setActiveTab('overview')} className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}><User className="w-4 h-4" /> Profile</button>
        <button onClick={() => setActiveTab('territory')} className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === 'territory' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}><Map className="w-4 h-4" /> Territory</button>
        <button onClick={() => setActiveTab('diplomacy')} className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === 'diplomacy' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}><Flag className="w-4 h-4" /> Diplomacy</button>
      </aside>
      <main className="flex-1">
        {activeTab === 'overview' && <UserProfilePanel />}
        {activeTab === 'territory' && <UserTerritoryPanel />}
        {activeTab === 'diplomacy' && <UserDiplomacyPanel />}
      </main>
    </div>
  );
}