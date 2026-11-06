/**
 * TypeScript type definitions for the JSON-Placeholder
 * sample data API.
 * @see https://jsonplaceholder.typicode.com/
 * @see https://gist.github.com/cdoremus/558f65f732d2e502429744c61c5c17b3
 */
interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}

interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geolocation;
}

interface Geolocation {
	lat: string;
	lng: string;
}

interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

interface Post {
	id: number;
	userId: number;
	title: string;
	body: string;
}

interface Comment {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
}

interface Album {
	id: number;
	userId: number;
	title: string;
}

interface Photo {
	id: number;
	albumId: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}

interface Todo {
	id: number;
	userId: number;
	title: string;
	completed: boolean;
}
