import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sections = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sections' }),
  schema: z.object({
    key: z.string(),
    title: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { sections };
