<script>
	import Angel from '$lib/images/angels_41.gif';
	import { InstagramSolid } from 'flowbite-svelte-icons';
</script>

<div
	class="sparkle relative grid grid-cols-2 border-4 border-fuchsia-400 bg-pink-200 p-3 px-3 py-6 text-fuchsia-700"
>
	<div class="absolute -right-10 -bottom-15 scale-50">
		<img src={Angel} alt="" />
	</div>
	<div class="flex flex-col justify-between">
		<p>About Me:</p>
		<div class="h-32 w-32 bg-black"></div>
	</div>
	<div class="flex flex-col justify-between">
		<div class=" grid h-fit grid-cols-2">
			<p>Name:</p>
			<p>Clare</p>
			<p>Skills:</p>
			<p>Slangin' Ink</p>
			<p>Location:</p>
			<p>San Diego, CA</p>
			<p>Shop:</p>
			<p>Tower Tattoo</p>
		</div>
		<div class=" h-5">
			<InstagramSolid size="lg" />
		</div>
	</div>
</div>
