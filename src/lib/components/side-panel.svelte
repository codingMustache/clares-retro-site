<script lang="ts">
	import AboutMe from '$lib/components/about-me.svelte';
	import Top4 from '$lib/components/top-4.svelte';
	import AudioPlayer from './audio-player.svelte';
</script>

<div class="grid grid-flow-row gap-4 p-3">
	<AboutMe />
	<Top4 />
	<AudioPlayer />
</div>
