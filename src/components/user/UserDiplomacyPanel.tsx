'use client';

import React from 'react';
import { Flag, Handshake } from 'lucide-react';

export default function UserDiplomacyPanel() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
            <Flag className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Diplomatic Relations</h2>
        </div>
        <div className="p-8 border-2 border-dashed border-slate-200 rounded-lg bg-slate-50 text-center">
          <Handshake className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-500">No active treaties.</p>
          <span className="text-xs text-slate-400">Wait for incoming signals...</span>
        </div>
      </div>
    </div>
  );
}