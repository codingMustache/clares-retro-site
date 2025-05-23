<script lang="ts">
	import '../app.css';
	import Brand from '$lib/components/brand.svelte';

	let { children } = $props();
</script>

<nav class="flex justify-between bg-pink-300 p-3">
	<Brand />
</nav>

<main
	class="relative min-h-dvh min-w-dvh overflow-x-hidden bg-pink-300 bg-[url(/prints.png)] bg-size-[100%] p-2"
>
	{@render children()}
</main>

<style>
</style>
