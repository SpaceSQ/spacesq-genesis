import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

// 严格对应 Python 生成的文件名
const FILENAME_HUMANS = 'space2_humans_history.jsonl';
const FILENAME_SILICONS = 'space2_silicons_history.jsonl';

async function debugRead(fileName: string) {
  const filePath = path.join(process.cwd(), fileName);
  console.log(`[🔍 侦探模式] 尝试读取文件: ${filePath}`);

  try {
    // 1. 检查文件是否存在
    await fs.access(filePath);
    console.log(`[✅ 成功] 文件存在: ${fileName}`);

    // 2. 读取内容
    const content = await fs.readFile(filePath, 'utf-8');
    console.log(`[📄 内容] 文件大小: ${content.length} 字符`);

    // 3. 尝试解析
    const lines = content.split('\n').filter(l => l.trim() !== '');
    console.log(`[📊 行数] 有效行数: ${lines.length}`);

    const data = lines.map((line, idx) => {
      try {
        return JSON.parse(line);
      } catch (e) {
        console.error(`[❌ 解析失败] 第 ${idx + 1} 行 JSON 格式错误:`, line.substring(0, 50) + '...');
        return null;
      }
    }).filter(item => item !== null);

    console.log(`[🎉 最终] 成功解析 ${data.length} 条数据`);
    return data;

  } catch (error: any) {
    console.error(`[💥 失败] 无法读取 ${fileName}`);
    console.error(`错误详情: ${error.message}`);
    
    // 关键侦探：列出当前目录下到底有什么文件
    try {
      const files = await fs.readdir(process.cwd());
      console.log(`[📂 现场勘查] 当前目录 (${process.cwd()}) 下的文件清单:`);
      console.log(files.join('\n'));
    } catch (e) {
      console.error("甚至无法读取当前目录列表...");
    }
    
    return [];
  }
}

export async function GET() {
  console.log('\n--- 🚀 API 请求开始 ---');
  
  const humans = await debugRead(FILENAME_HUMANS);
  const silicons = await debugRead(FILENAME_SILICONS);

  // 格式化数据以适配前端
  const formattedHumans = humans.map((h: any, index: number) => ({
    seq: index + 1,
    role: 'HUMAN',
    id: h.identity_id || 'UNKNOWN',
    suns: h.space?.suns_code || 'N/A',
    origin: h.space?.origin_field || 'DRIFTER',
    trinity: h.trinity || { score: '0', matrix: {T:0, A:0, C:0} },
    status: h.space ? 'ACTIVE' : 'WANDERING',
    last_pulse: 'Live'
  }));

  const formattedSilicons = silicons.map((s: any, index: number) => ({
    seq: index + 1 + humans.length,
    role: 'SILICON',
    id: s.identity_id || 'UNKNOWN',
    suns: s.space?.suns_code || 'N/A',
    origin: s.space?.origin_field || 'MIA',
    trinity: s.trinity || { score: '0', matrix: {T:0, A:0, C:0} },
    status: 'ACTIVE',
    last_pulse: 'Syncing'
  }));

  const allUsers = [...formattedSilicons, ...formattedHumans].reverse();

  console.log(`[🏁 响应] 返回总数据: ${allUsers.length} 条`);
  console.log('--- API 请求结束 ---\n');

  return NextResponse.json({
    data: allUsers,
    stats: {
      total: allUsers.length,
      human: humans.length,
      silicon: silicons.length
    }
  });
}