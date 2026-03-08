import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "sequelize",
    "sequelize-typescript",
    "pg",
    "pg-hstore",
  ],
};

export default nextConfig;