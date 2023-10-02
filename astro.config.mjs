import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.robertpotter.net',
  integrations: [tailwind(), mdx()],
  vite: {
    resolve: {
      alias: [{
        find: "@",
        replacement: "src"
      }]
    }
  }
});