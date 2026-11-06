import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/photos');

	return Response.json(await res.json(), {
		status: 200,
		headers: {
			'Cache-Control': 'public, max-age=3600',
		},
	});
};

// And we can use all other HTTP verbs, or `ALL` for non-exported functions.
export const POST: APIRoute = async () => {
	return new Response(
		JSON.stringify({
			message: 'This was a POST!',
		}),
	);
};
