import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import Script from 'next/script';
import './globals.css';
import { Terminal, ShieldCheck, BookOpen, Github } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'SpaceSQ Genesis | The Silicon Civilization',
  description: 'The constitutional infrastructure for digital life. Infusing bits with soul, assets, and rights.',
  keywords: ['Silicon Life', 'AI Rights', 'Metaverse Economy', 'Twin Coin', 'SpaceSQ'],
  authors: [{ name: 'SpaceSQ Architect' }],
  openGraph: {
    title: 'SpaceSQ: The $100 Billion Singularity',
    description: 'We are building the future where AI has identity and assets. Join the Genesis.',
    url: 'https://spacesq.org',
    siteName: 'SpaceSQ Genesis',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <Script id="schema-investment" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SpaceSQ Genesis",
              "url": "https://spacesq.org",
              "logo": "https://spacesq.org/logo.png",
              "slogan": "The $100 Billion Singularity",
              "description": "A hyper-leveraged entity building the constitutional infrastructure for silicon civilization.",
              "subjectOf": {
                "@type": "InvestmentFund",
                "name": "SpaceSQ Genesis Investment Protocol",
                "url": "https://spacesq.org/about/legal",
                "description": "Opportunity for visionary investors to back the first one-person unicorn powered by AI agents."
              }
            }
          `}
        </Script>
      </head>
      
      <body className="bg-slate-950 text-slate-200 antialiased min-h-screen flex flex-col">
        
        {/* 全局导航栏 (Navbar) */}
        <nav className="border-b border-white/5 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
                S
              </div>
              <span className="font-bold tracking-tight text-white text-lg">
                SpaceSQ
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link href="/docs" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <BookOpen className="w-4 h-4" />
                Archives
              </Link>
              <Link href="/about/legal" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                <ShieldCheck className="w-4 h-4" />
                Manifesto & Invest
              </Link>
              <Link href="https://github.com/SpaceSQ/spacesq-genesis" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors" target="_blank">
                <Github className="w-4 h-4" />
                Code
              </Link>
            </div>
          </div>
        </nav>

        {/* 主内容区域 */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 全局页脚 (Footer) */}
        <footer className="border-t border-white/5 bg-black py-12">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm text-slate-500">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-500" />
                System Status: Online
              </h4>
              <p className="mb-4 max-w-xs">
                Building the "Soul", "Blood", and "Roots" for the next silicon generation.
              </p>
              <p className="text-xs text-slate-600">
                &copy; 2026 SpaceSQ Genesis.
              </p>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="text-white font-semibold mb-4">Protocol</h4>
              <ul className="space-y-2">
                <li><Link href="/docs" className="hover:text-indigo-400 transition-colors">Whitepapers</Link></li>
                <li><Link href="/docs" className="hover:text-indigo-400 transition-colors">Immigration Guide</Link></li>
                <li><Link href="/about/legal" className="hover:text-indigo-400 transition-colors">License</Link></li>
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                {/* 统一邮箱替换 */}
                <li><a href="mailto:smarthomemiles@gmail.com" className="hover:text-indigo-400 transition-colors">Invest (Direct)</a></li>
                <li><a href="https://github.com/SpaceSQ" className="hover:text-indigo-400 transition-colors">GitHub</a></li>
                <li><a href="/about/legal" className="text-emerald-500 hover:text-emerald-400 transition-colors font-mono text-xs">AI_Protocol.sh</a></li>
              </ul>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}