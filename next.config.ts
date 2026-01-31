import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.myanimelist.net', 'i.pinimg.com', '//static.yani.tv'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lpmfvuphmrnioumtlyuo.supabase.co', // Твій особистий Supabase домен
        port: '',
        pathname: '/storage/v1/object/public/**', // Дозволяємо доступ тільки до публічних файлів
      },
    ],
  },
};

export default nextConfig;
