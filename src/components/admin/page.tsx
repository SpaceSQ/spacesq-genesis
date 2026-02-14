import React from 'react';
// 确保只引用新的 GenesisControlCenter，绝不引用 SystemAdminDashboard
import GenesisControlCenter from '@/components/admin/GenesisControlCenter';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
        <GenesisControlCenter />
      </div>
    </div>
  );
}