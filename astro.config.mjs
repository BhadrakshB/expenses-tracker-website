// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: "https://expensestracker.app",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes("/admin"),
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  adapter: cloudflare(),
  redirects: {
    "/tos": "/terms",
    "/privacy-policy": "/privacy",
    "/refund": "/refunds",
  },
});
