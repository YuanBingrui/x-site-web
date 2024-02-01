import {openBrowserByUrl} from './scripts/open.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/dbb',
        destination: '/',
        permanent: true,
      },
    ];
  },
  webpack: (config, options) => {
    const {dev, isServer} = options;

    // 服务启动后自动打开浏览器
    // 入参为是否以https协议启动服务
    if (dev && !isServer) openBrowserByUrl(false);

    return config;
  },
};

export default nextConfig;
