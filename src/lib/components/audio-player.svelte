<script lang="ts">
	let audioElement: HTMLAudioElement;
	let isPlaying: boolean = false;
	import { PlaySolid, PauseSolid } from 'flowbite-svelte-icons';

	function togglePlayback() {
		if (audioElement.paused) {
			audioElement.play();
			isPlaying = true;
		} else {
			audioElement.pause();
			isPlaying = false;
		}
	}
</script>

<div
	class="relative flex w-full flex-row items-center justify-between border-4 border-fuchsia-400 bg-pink-200 px-3 py-6"
>
	<audio bind:this={audioElement} class="hidden">
		<source src="paris_hilton-stars_are_blind.mp3" type="audio/mpeg" />
	</audio>

	<button
		on:click={togglePlayback}
		class="sparkle py-auto group relative h-12 w-12 items-center justify-center rounded-full bg-fuchsia-400 text-center text-fuchsia-600 shadow-[inset_0px_0px_7px_5px_rgba(255,255,255,0.2)] transition hover:shadow-[inset_0px_0px_5px_3px_rgba(0,0,0,0.2)]"
	>
		<div class="mx-auto w-fit group-hover:scale-90">
			{#if isPlaying}
				<PauseSolid size="xl" color="#c800de" />
			{:else}
				<PlaySolid size="xl" color="#c800de" />
			{/if}
		</div>
	</button>
	<div
		class=" bg-pink-100-300 relative h-full items-center justify-center overflow-hidden border-2 border-pink-100 py-2"
	>
		<div
			class="animate-smooth-marquee flex gap-8 text-xl font-bold whitespace-nowrap text-pink-700"
		>
			<span>💖 Paris Hilton - Stars Are Blind 💖</span>
		</div>
	</div>
</div>

<style>
	@keyframes smooth-marquee {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(-50%);
		}
	}

	.animate-smooth-marquee {
		animation: smooth-marquee 4s linear infinite;
		will-change: transform;
	}
</style>
