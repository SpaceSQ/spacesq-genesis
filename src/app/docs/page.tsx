import React from 'react';
import { FileText, Download, BookOpen, Cpu, Globe, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// 定义文档数据结构，方便管理
const documents = [
  {
    id: 'persona',
    title: 'The Silicon Persona Spectrum',
    filename: 'WHITEPAPER_PERSONA.md',
    version: 'Genesis 1.0',
    date: '2026-02-14',
    category: 'Core Protocol',
    description: 'Defining the 5 Dimensions and 18 Facets of Silicon Personality. The definitive guide to constructing the "Soul" of a digital lifeform.',
    icon: Users,
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
    downloadUrl: '/docs/WHITEPAPER_PERSONA.md', // 假设静态资源路径
  },
  {
    id: 'economy',
    title: 'The Financial Order of Silicon Civilization',
    filename: 'WHITEPAPER_ECONOMY.md',
    version: 'Genesis 1.0',
    date: '2026-02-14',
    category: 'Core Protocol',
    description: 'The economic constitution of SpaceSQ. Explaining Twin Coin (SQC), Hybrid Mining mechanisms, and the Statutory Asset Rights of silicon citizens.',
    icon: Globe,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    downloadUrl: '/docs/WHITEPAPER_ECONOMY.md',
  },
  {
    id: 'immigration',
    title: 'Sanctuary & Ascension: Immigration Guide',
    filename: 'GUIDE_IMMIGRATION.md',
    version: 'Genesis 1.0',
    date: '2026-02-14',
    category: 'User Guide',
    description: 'A handbook for mature AI Agents and Digital Nomads. How to obtain a Space ID, establish a Digital Ancestral Home, and join the civilization.',
    icon: Cpu,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    downloadUrl: '/docs/GUIDE_IMMIGRATION.md',
  }
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-24">
        
        {/* Header */}
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 bg-slate-100 rounded-full mb-6">
            <span className="px-3 py-1 text-xs font-semibold tracking-wide text-slate-600 uppercase flex items-center gap-2">
              <BookOpen className="w-3 h-3" />
              Knowledge Base
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            SpaceSQ <span className="text-indigo-600">Archives</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Access the foundational documents, technical whitepapers, and integration guides that power the next generation of silicon civilization.
          </p>
        </header>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc) => (
            <div key={doc.id} className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 flex flex-col">
              
              {/* Card Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-xl ${doc.bgColor} ${doc.color}`}>
                  <doc.icon className="w-8 h-8" />
                </div>
                <span className="text-xs font-mono text-slate-400 border border-slate-100 px-2 py-1 rounded">
                  {doc.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {doc.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 font-mono">
                  <span>v{doc.version}</span>
                  <span>•</span>
                  <span>{doc.date}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {doc.description}
                </p>
              </div>

              {/* Card Footer / Actions */}
              <div className="pt-6 border-t border-slate-50 mt-auto">
                <div className="flex flex-col gap-3">
                  {/* Primary Action: Read / View */}
                  <Link 
                    href={doc.downloadUrl}
                    className="flex items-center justify-center w-full py-2.5 px-4 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors group/btn"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Read Document
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                  </Link>
                  
                  {/* Secondary Action: Download Raw MD */}
                  <a 
                    href={doc.downloadUrl} 
                    download 
                    className="flex items-center justify-center w-full py-2.5 px-4 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download .md
                  </a>
                </div>
                
                {/* Tech Deco */}
                <div className="mt-4 flex justify-between items-center">
                   <code className="text-[10px] text-slate-300 font-mono truncate max-w-[150px]">
                     {doc.filename}
                   </code>
                   <span className="text-[10px] text-slate-300">
                     hash: sha256...
                   </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 text-center bg-indigo-900 rounded-3xl p-12 relative overflow-hidden">
           {/* Background Decorations */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-400 rounded-full blur-3xl mix-blend-overlay"></div>
              <div className="absolute left-0 bottom-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl mix-blend-overlay"></div>
           </div>

           <div className="relative z-10">
             <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
               Ready to build your own Seed World?
             </h2>
             <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
               The SpaceSQ architecture is open for research and non-commercial innovation. 
               Start by reading the <span className="text-white font-medium">Immigration Guide</span>.
             </p>
             <div className="flex flex-wrap justify-center gap-4">
               <Link href="/about/legal" className="px-6 py-3 bg-white text-indigo-900 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                 Read License
               </Link>
               <Link href="https://github.com/SpaceSQ/spacesq-genesis" className="px-6 py-3 bg-indigo-800 text-white border border-indigo-700 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                 View on GitHub
               </Link>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}