import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.robertpotter.net',
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: [
        {
          find: "@",
          replacement: "src",
        },
      ],
    },
  },
});
