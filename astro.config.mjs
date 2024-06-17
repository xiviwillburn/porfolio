import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  integrations: [tailwind()],
  base: 'porfolio/docs',
  site: 'https://xiviwillburn.github.io',
  build: {
    assets: 'astro'
  }
});
