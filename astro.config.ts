import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), react(), vue()],

	adapter: node({
		mode: 'standalone',
	}),

	output: 'server',

	server: {
		port: 5000,
	},

	vite: {
		ssr: {
			noExternal: ['reveal.js'],
		},
	},
});
