import React from 'react';
// 👇 重新引入我们的核心控制台
import GenesisControlCenter from '@/components/admin/GenesisControlCenter';

export const metadata = {
  title: 'Genesis Admin | SpaceSQ',
  description: 'System Administration Console',
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-500">Manage your SpaceSQ Genesis instance</p>
        </header>
        
        {/* 👇 恢复组件显示 */}
        <GenesisControlCenter />
      </div>
    </div>
  );
}