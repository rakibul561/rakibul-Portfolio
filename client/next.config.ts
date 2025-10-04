import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
  remotePatterns: [
    { protocol: "https", hostname: "via.placeholder.com" },
    { protocol: "https", hostname: "cdn-icons-png.flaticon.com" },
    { protocol: "https", hostname: "i.ibb.co.com" }, 
  ],
},


};

export default nextConfig;