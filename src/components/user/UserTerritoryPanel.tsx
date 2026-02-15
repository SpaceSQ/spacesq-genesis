'use client';

import React from 'react';
import { Map, Zap } from 'lucide-react';

export default function UserTerritoryPanel() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
            <Map className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Territory Management</h2>
        </div>
        <div className="p-8 border-2 border-dashed border-slate-200 rounded-lg bg-slate-50 text-center">
          <p className="text-slate-500">No territories claimed yet.</p>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
            Scan for Land
          </button>
        </div>
      </div>
    </div>
  );
}