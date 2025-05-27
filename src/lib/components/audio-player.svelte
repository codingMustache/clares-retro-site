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

<div class="flex flex-row items-center justify-between gap-2 bg-[#c3c3c3] p-2">
	<audio bind:this={audioElement} class="hidden">
		<source src="paris_hilton-stars_are_blind.mp3" type="audio/mpeg" />
	</audio>

	<button
		on:click={togglePlayback}
		class="group blorder-black h-12 w-12 items-center justify-center rounded-full border bg-gray-300 text-center text-gray-600 shadow-[inset_0px_0px_7px_5px_rgba(255,255,255,0.2)] transition hover:shadow-[inset_0px_0px_5px_3px_rgba(0,0,0,0.2)]"
	>
		<div class="flex h-12 w-12 items-center justify-center text-lg group-hover:scale-90">
			{#if isPlaying}
				<PauseSolid size="lg" />
			{:else}
				<PlaySolid size="lg" />
			{/if}
		</div>
	</button>
	<div
		class="relative flex h-10 w-full items-center justify-center overflow-hidden border bg-white"
	>
		<div class="animate-smooth-marquee w-full text-sm font-bold whitespace-nowrap text-pink-700">
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
			transform: translateX(-100%);
		}
	}

	.animate-smooth-marquee {
		animation: smooth-marquee 3s linear infinite;
		will-change: transform;
	}
</style>
