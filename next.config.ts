import type {NextConfig} from "next";

export const DEV_API_URL = "http://127.0.0.1:8000/api/:path*"

const nextConfig: NextConfig = {
    rewrites: async () => [
        {
            source: "/api/:path*",
            destination: DEV_API_URL
        }
    ]
};

export default nextConfig;
