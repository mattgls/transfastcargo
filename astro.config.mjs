import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://transfastcargo.fr',
  markdown: {
    shiki: {
      theme: 'github-light',
    },
  },
});
