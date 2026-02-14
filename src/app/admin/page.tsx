import React from 'react';
// 👇 关键修改：引用新的控制中心，而不是那个被删掉的旧文件
import GenesisControlCenter from '@/components/admin/GenesisControlCenter';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-500">Manage your SpaceSQ Genesis instance</p>
        </header>
        
        {/* 👇 关键修改：使用新组件 */}
        <GenesisControlCenter />
      </div>
    </div>
  );
}