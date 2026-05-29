// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    allowedHosts: true,
  },
  build: {
    inlineStylesheets: "always",
  },
  site: "https://la-velada-clone.vercel.app/",
  adapter: vercel(),
});