import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: '/porfolio',
  site: 'https://xiviwillburn.github.io',
  build: {
    assets: 'astro'
  },
  URL:{  
    title: 'Link',
    name: 'href',
    type: 'url',
    validation: Rule => Rule.uri({
      scheme: ['http', 'https', 'mailto', 'tel']
    })}
});
