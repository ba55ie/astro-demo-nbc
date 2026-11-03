import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const slides = defineCollection({
	loader: glob({ base: './src/content/slides', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		order: z.number(),
		title: z.string().optional(),
		transition: z
			.enum(['none', 'fade', 'slide', 'convex', 'concave', 'zoom'])
			.optional(),
		background: z.string().optional(), // CSS color or image URL
	}),
});

export const collections = { slides };
