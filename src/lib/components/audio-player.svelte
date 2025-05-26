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

<div class="flex w-fit flex-row items-center justify-between gap-3 px-3 py-6">
	<audio bind:this={audioElement} class="hidden">
		<source src="paris_hilton-stars_are_blind.mp3" type="audio/mpeg" />
	</audio>

	<button
		on:click={togglePlayback}
		class="py-auto group blorder-black h-12 w-12 items-center justify-center rounded-full border bg-gray-300 text-center text-gray-600 shadow-[inset_0px_0px_7px_5px_rgba(255,255,255,0.2)] transition hover:shadow-[inset_0px_0px_5px_3px_rgba(0,0,0,0.2)]"
	>
		<div class="mx-auto h-full w-full group-hover:scale-90">
			{#if isPlaying}
				<PauseSolid size="lg" />
			{:else}
				<PlaySolid size="lg" />
			{/if}
		</div>
	</button>
	<div class="  relative h-full items-center justify-center overflow-hidden bg-white py-2">
		<div
			class="animate-smooth-marquee flex w-full gap-8 text-sm font-bold whitespace-nowrap text-pink-700"
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
