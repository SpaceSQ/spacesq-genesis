// src/components/layout/Footer.tsx (部分更新建议)
// ...
{/* 4. 协议与法律 (Protocol) */}
<div className="md:col-span-2">
  <h3 className="text-white font-bold mb-6">Protocol</h3>
  <ul className="space-y-4 text-sm text-zinc-500">
    <li>
      <Link href="/legal" className="hover:text-white transition flex items-center gap-2">
        <ShieldCheck className="w-3 h-3" />
        SCL-1.0 License
      </Link>
    </li>
    <li>
      <Link href="/collaboration" className="hover:text-white transition flex items-center gap-2">
        <Users className="w-3 h-3" />
        Partnership
      </Link>
      <Link href="/terminal" className="opacity-20 hover:opacity-100 transition-opacity font-mono text-[10px]">
  [ >_ ]
</Link>
    </li>
    {/* ... 其他链接 ... */}
  </ul>
</div>
// ...