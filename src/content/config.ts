import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tag: z.string(),
    tags: z.array(z.string()).default([]),
    published: z.boolean().default(true),
    externalUrl: z.string().url().optional(),
    coverImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    coverImage: z.string().optional(),
  }),
});

const comics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    season: z.number().int().positive(),
    episode: z.number().int().positive(),
    description: z.string(),
    date: z.coerce.date(),
    published: z.boolean().default(true),
    coverImage: z.string().optional(),
    panels: z.array(
      z.object({
        image: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      })
    ),
  }),
});

export const collections = { articles, projects, comics };
