const isProd = process.env.NODE_ENV === "production";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const basePath = isProd ? baseUrl : "";
export const assetPrefix = isProd ? `${baseUrl}/` : "";
