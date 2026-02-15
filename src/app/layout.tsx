// src/app/layout.tsx
// ... imports

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-black text-white antialiased">
      {/* 👇 加了一个 5px 的红色边框，这绝对不可能看不见 */}
      <body className={`${inter.className} h-full flex flex-col border-4 border-red-500`}>
        {children}
      </body>
    </html>
  );
}