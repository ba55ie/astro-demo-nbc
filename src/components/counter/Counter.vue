<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStore as getStore } from '@nanostores/vue';
import { $count, decrement, increment } from './store.ts';

const props = defineProps<{
	count?: number;
}>();

const count = getStore($count);
const isInteractive = ref(false);

onMounted(() => {
	if (props.count !== undefined && $count.get() !== props.count) {
		$count.set(props.count);
	}

	isInteractive.value = true;
});
</script>

<template>
	<article>
		<header>
			<strong>💚 Vue Counter</strong>
		</header>

		<div class="counter">
			<button
				type="button"
				aria-label="Decrement"
				:disabled="!isInteractive"
				@click="decrement"
			>
				−
			</button>

			<output>{{ isInteractive ? count : (props.count ?? count) }}</output>

			<button
				type="button"
				aria-label="Increment"
				:disabled="!isInteractive"
				@click="increment"
			>
				+
			</button>
		</div>
	</article>
</template>

<style scoped>
.counter {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
}

output {
	font-size: 1.5rem;
	font-weight: bold;
}
</style>
