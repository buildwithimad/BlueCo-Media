/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  
  // "remotePatterns" must be inside "images"
  images: { 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;