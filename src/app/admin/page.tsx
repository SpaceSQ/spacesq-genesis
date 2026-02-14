// src/app/admin/page.tsx
import React from 'react';
import SystemAdminDashboard from '@/components/admin/SystemAdminDashboard'; // 注意引入路径

export const metadata = {
  title: 'SpaceSQ Genesis Admin | God Mode',
};

export default function AdminPage() {
  return <SystemAdminDashboard />;
}