<script lang="ts">
	import AboutMe from '$lib/components/about-me.svelte';
	import Top4 from '$lib/components/top-4.svelte';
	import AudioPlayer from './audio-player.svelte';
	import RetroWindow from '$lib/components/retro-window.svelte';
	import Location from './location.svelte';
</script>

<div
	class="grid h-fit grid-cols-1 gap-4 p-3 max-lg:flex max-lg:flex-wrap max-lg:justify-center max-sm:grid-cols-2"
>
	<RetroWindow>
		<AboutMe />
	</RetroWindow>

	<RetroWindow>
		<Location />
	</RetroWindow>

	<RetroWindow>
		<Top4 />
	</RetroWindow>

	<RetroWindow>
		<AudioPlayer />
	</RetroWindow>
</div>
