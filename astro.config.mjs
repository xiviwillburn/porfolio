import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  integrations: [tailwind()],
  site: `xiviwillburn.github.io`,
  base: 'portfolio',
  output: 'static',
  outDir: './docs',
  build: {
    assets: 'astro'
  }
});
