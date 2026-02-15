'use client';

import React, { useState } from 'react';
import { LayoutDashboard, Map, Flag, User } from 'lucide-react';

// 👇 引用我们刚才创建的两个新文件
import UserTerritoryPanel from './UserTerritoryPanel';
import UserDiplomacyPanel from './UserDiplomacyPanel';
import UserProfilePanel from './UserProfilePanel'; // 假设这个你之前没删，或者用下面的内联

// 如果 UserProfilePanel 也没了，可以用这个内联的顶着（如果有文件就用 import）
// import UserProfilePanel from './UserProfilePanel'; 

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* 侧边导航 */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <nav className="space-y-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
              activeTab === 'overview' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <User className="w-4 h-4" /> Profile
          </button>
          <button
            onClick={() => setActiveTab('territory')}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
              activeTab === 'territory' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Map className="w-4 h-4" /> Territory
          </button>
          <button
            onClick={() => setActiveTab('diplomacy')}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
              activeTab === 'diplomacy' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Flag className="w-4 h-4" /> Diplomacy
          </button>
        </nav>
      </aside>

      {/* 主内容区域 - 动态切换真实组件 */}
      <main className="flex-1 min-h-[500px]">
        {activeTab === 'overview' && <UserProfilePanel />} 
        {activeTab === 'territory' && <UserTerritoryPanel />}
        {activeTab === 'diplomacy' && <UserDiplomacyPanel />}
      </main>
    </div>
  );
}