import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  integrations: [tailwind()],
  base: './docs',
  output: 'static',
  outDir: 'dist',
  site: 'https://xiviwillburn.github.io/porfolio',
  build: {
    assets: 'astro'
  }
});
