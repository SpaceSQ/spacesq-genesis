import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

// [核心修复] 定义 metadataBase
// 如果有环境变量 NEXT_PUBLIC_SITE_URL 就用它，否则默认用 localhost
// 这消除了 "metadata.metadataBase is not set" 的警告
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL 
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL) 
  : new URL('http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: "SpaceSQ | Genesis Protocol",
    template: "%s | SpaceSQ"
  },
  description: "The Operating System for Civilization Switch. Integrating Tech, Art, and Capital into a single sovereign identity.",
  icons: {
    icon: '/favicon.ico', // 确保你的 public 文件夹里有 favicon.ico
  },
  openGraph: {
    title: 'SpaceSQ',
    description: 'The Genesis Registry for Silicon Sovereignty.',
    url: baseUrl,
    siteName: 'SpaceSQ',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${mono.variable} font-sans bg-black text-white antialiased selection:bg-emerald-500/30`}>
        {children}
      </body>
    </html>
  );
}