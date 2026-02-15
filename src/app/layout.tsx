import React from 'react';
import './globals.css';
// 👇 关键修复 1：引入字体
import { Inter } from 'next/font/google';

// 👇 关键修复 2：定义字体变量 (之前就是缺了这行！)
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SpaceSQ Genesis',
  description: 'Sovereign Digital Territory Infrastructure',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-black text-white antialiased">
      {/* 👇 这里应用了 inter.className，现在它终于被定义了 */}
      <body className={`${inter.className} h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}