import { defineCollection, z } from 'astro:content';

export const collections = {
    services: defineCollection({
        type: 'data',
        schema: z.object({
            title: z.string(),
            img: z.string(),
        }),
    }),
    gallery: defineCollection({
        type: 'data',
        schema: z.object({
            photo: z.string(),
        }),
    }),
};