import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	return fetch('https://jsonplaceholder.typicode.com/photos');
};
