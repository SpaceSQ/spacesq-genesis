'use client';
import React from 'react';
import { Flag, Users } from 'lucide-react'; // 用 Users 代替 Handshake 以防报错

export default function UserDiplomacyPanel() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm animate-in fade-in">
      <div className="flex items-center gap-3 mb-4">
        <Flag className="w-6 h-6 text-rose-600" />
        <h2 className="text-xl font-bold text-slate-900">Diplomacy</h2>
      </div>
      <div className="p-10 bg-slate-50 rounded border-2 border-dashed border-slate-200 text-center text-slate-500">
        <Users className="w-8 h-8 mx-auto mb-2 text-slate-400" />
        No active diplomatic treaties.
      </div>
    </div>
  );
}