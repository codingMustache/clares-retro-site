<script lang="ts">
	import '../app.css';
	import Brand from '$lib/components/brand.svelte';
	import BookBtn from '$lib/components/book-btn.svelte';

	let { children } = $props();
</script>

<nav class="flex items-center justify-between bg-pink-300 px-6 py-3">
	<Brand />
	<BookBtn />
</nav>

<main class="bg relative min-h-dvh overflow-x-hidden bg-size-[100%] p-2">
	{@render children()}
</main>

<style>
	.bg {
		background: url('/bg.png'), rgb(255, 200, 200);
		background-size: cover;
		background-attachment: fixed;
	}
</style>
