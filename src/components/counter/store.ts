import { atom } from 'nanostores';

export const $count = atom(0);
export const $clicks = atom(0);

export function increment() {
	$count.set($count.get() + 1);
	click();
}

export function decrement() {
	$count.set($count.get() - 1);
	click();
}

export function click() {
	$clicks.set($clicks.get() + 1);
}
