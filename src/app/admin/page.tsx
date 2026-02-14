import React from 'react';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Genesis Control Center</h1>
      <p className="text-slate-400">System is compiling... Interface loading soon.</p>
      <div className="mt-8 p-4 bg-slate-900 border border-slate-800 rounded text-green-500 font-mono text-sm">
        > Status: ONLINE
        <br/>
        > Mode: Safe Mode
      </div>
    </div>
  );
}