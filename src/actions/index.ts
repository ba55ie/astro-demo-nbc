import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';

export const server = {
	user: defineAction({
		accept: 'form',
		input: z.object({
			name: z.string().min(3),
			email: z.email(),
			age: z.number().min(18).max(88),
		}),
		handler: async (input) => {
			// Do something with the user in the API.
			console.log('action input:', input);

			return { id: 1337, name: input.name };
		},
	}),
};
