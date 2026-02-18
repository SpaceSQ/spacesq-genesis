import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  // 1. 定位数据文件路径
  // 在 Vercel 部署环境中，文件通常被放在项目根目录下的 public
  const publicDir = path.join(process.cwd(), 'public');
  const humansPath = path.join(publicDir, 'space2_humans_history.jsonl');
  const siliconsPath = path.join(publicDir, 'space2_silicons_history.jsonl');

  let humans = [];
  let silicons = [];
  let debug_info = {
    cwd: process.cwd(),
    public_content: [] as string[],
    errors: [] as string[]
  };

  // 调试辅助：尝试读取 public 目录下的内容
  try {
    debug_info.public_content = await fs.readdir(publicDir);
  } catch (e: any) {
    debug_info.errors.push(`Directory access error: ${e.message}`);
  }

  // 读取 Humans 数据
  try {
    const hData = await fs.readFile(humansPath, 'utf-8');
    humans = hData.split('\n').filter(l => l.trim()).map(line => JSON.parse(line));
  } catch (e: any) {
    debug_info.errors.push(`Humans file error: ${e.message}`);
  }

  // 读取 Silicons 数据
  try {
    const sData = await fs.readFile(siliconsPath, 'utf-8');
    silicons = sData.split('\n').filter(l => l.trim()).map(line => JSON.parse(line));
  } catch (e: any) {
    debug_info.errors.push(`Silicons file error: ${e.message}`);
  }

  // 格式化输出
  const formattedHumans = humans.map((h: any, index: number) => ({
    seq: index + 1,
    role: 'HUMAN',
    id: h.identity_id,
    suns: h.space?.suns_code || 'N/A',
    origin: h.space?.origin_field || 'DRIFTER',
    trinity: h.trinity,
    status: h.space ? 'ACTIVE' : 'WANDERING',
    last_pulse: 'Live'
  }));

  const formattedSilicons = silicons.map((s: any, index: number) => ({
    seq: index + 1 + humans.length,
    role: 'SILICON',
    id: s.identity_id,
    suns: s.space?.suns_code || 'N/A',
    origin: s.space?.origin_field || 'MIA',
    trinity: s.trinity,
    status: 'ACTIVE',
    last_pulse: 'Syncing'
  }));

  const allUsers = [...formattedSilicons, ...formattedHumans].reverse();

  return NextResponse.json({
    data: allUsers,
    stats: {
      total: allUsers.length,
      human: humans.length,
      silicon: silicons.length
    },
    debug: debug_info
  });
}
