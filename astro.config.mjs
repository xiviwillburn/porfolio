import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  integrations: [tailwind()],
  base: 'portfolio\\docs',
  outDir:'docs',
  output: 'static',
  build: {
    assets: 'astro'
  }
});
