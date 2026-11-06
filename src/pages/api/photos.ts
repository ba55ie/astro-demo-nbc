import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/photos');

	if (!res.ok) {
		return res;
	}

	const photos: Photo[] = await res.json();

	return new Response(JSON.stringify(photos), {
		headers: { 'Content-Type': res.headers.get('content-type')! },
	});
};
