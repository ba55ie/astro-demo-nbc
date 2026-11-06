<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

withDefaults(
	defineProps<{
		icon?: string;
	}>(),
	{
		icon: '⚠️',
	},
);

const date = ref(new Date());

let timer: ReturnType<typeof setInterval>;

onMounted(() => {
	timer = setInterval(() => (date.value = new Date()), 1000);
});

onUnmounted(() => {
	clearInterval(timer);
});
</script>

<template>
	<div class="alert">
		<span>{{ icon }}</span> <slot />
		<time :datetime="date.toISOString()">{{ date.toLocaleString('nl') }}</time date={{date}}>
	</div>
</template>

<style scoped>
.alert {
	display: grid;
	grid-template-columns: min-content 1fr auto;
	gap: 1rem;

	padding: 1rem;
	margin-block: 2rem;

	color: #042d4d;
	border: solid thin #1f7dc5;
	background-color: #dcebf6;

	border-radius: 0.5rem;
}
</style>
