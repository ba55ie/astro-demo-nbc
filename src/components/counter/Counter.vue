<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = withDefaults(
	defineProps<{
		count?: number;
	}>(),
	{
		count: 0,
	},
);

const count = ref(props.count);
const isInteractive = ref(false);

onMounted(() => {
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
				@click="count--"
			>
				−
			</button>

			<output>{{ count }}</output>

			<button
				type="button"
				aria-label="Increment"
				:disabled="!isInteractive"
				@click="count++"
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
