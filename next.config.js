/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. 确保没有 output: 'export' (除非你是纯静态部署，但在Vercel上不需要)
  // 2. 确保没有错误的 basePath
  reactStrictMode: true,
  swcMinify: true,
  // 如果你用了图片，这里可能需要配置域名，暂时先允许所有
  images: {
    domains: ['images.unsplash.com', 'grainy-gradients.vercel.app'],
    unoptimized: true, // 临时开启这个，防止图片优化服务报错
  },
};

module.exports = nextConfig;