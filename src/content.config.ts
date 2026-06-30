import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Astro 7 Content Layer API — posts live in src/content/blog/*.md
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    // extra fields used by the magazine layouts (all optional)
    category: z.string().optional(),
    readingTime: z.string().optional(),
    // public path like /images/<slug>/<name>.jpg (served as-is, not optimized)
    cover: z.string().optional(),
    pull: z.string().optional(),
    type: z.enum(['essay', 'fiction']).optional().default('essay'),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
