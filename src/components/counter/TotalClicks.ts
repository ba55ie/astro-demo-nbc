import { $clicks } from './store.ts';

export class Totalclicks extends HTMLElement {
	#unsubscribe?: () => void;

	connectedCallback() {
		const initial = this.getAttribute('clicks');

		if (initial !== null && $clicks.get() === 0) {
			$clicks.set(Number(initial));
		}

		const output = this.querySelector('output');

		this.#unsubscribe = $clicks.subscribe((value) => {
			output!.textContent = String(value);
		});
	}

	disconnectedCallback() {
		this.#unsubscribe?.();
	}
}

customElements.define('total-clicks', Totalclicks);
