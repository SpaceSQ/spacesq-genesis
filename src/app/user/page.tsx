import React from 'react';

// 👇 关键修复：去掉花括号！
// 错误写法: import { UserDashboardLayout } from ...
// 正确写法: import UserDashboardLayout from ...
import UserDashboardLayout from '@/components/user/UserDashboardLayout';

export const metadata = {
  title: 'SpaceSQ User Console | Sovereign Dashboard',
  description: 'Manage your personal space node and assets.',
};

export default function UserPage() {
  return (
    <UserDashboardLayout />
  );
}