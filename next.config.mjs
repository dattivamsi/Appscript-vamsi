/** @type {import('next').NextConfig} */
// const nextConfig = {};
// next.config.js

// next.config.mjs

// next.config.mjs

// const nextConfig = {
//   images: {
//     remotePatterns: [{ protocol: "https", hostname: "fakestoreapi.com" ,pathname:"/products"}],
//   },
// };

// export default nextConfig;
// next.config.js

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
            port: '3000',
            pathname: '/products',
          },
        ],
      },
  }

  

export default nextConfig;
