<script>
	import { InstagramSolid, HeartSolid, HeartOutline } from 'flowbite-svelte-icons';
</script>

<div class="grid w-full grid-cols-1 p-2 max-sm:grid-cols-1">
	<div class=" h-60 w-full bg-black"></div>
	<div class="mx-auto flex flex-col justify-between px-2">
		<div class=" grid grid-cols-[90px_100%] gap-1">
			<p class="text-right font-bold">Name:</p>
			<p>Clare</p>
			<p class="text-right font-bold">Skills:</p>
			<p>Tattooer</p>
			<p class="text-right font-bold">Location:</p>
			<p>San Diego, CA</p>
			<p class="text-right font-bold">Shop:</p>
			<a class="cursor-pointer" href=" http://maps.apple.com/?q=32.749262,-117.091521">
				<p>Tower Tattoo</p>
			</a>
			<p class="text-right font-bold">Experience:</p>
			<p class="flex h-4 items-center text-fuchsia-600">
				<HeartSolid size="sm" />
				<HeartSolid size="sm" />
				<HeartSolid size="sm" />
				<HeartSolid size="sm" />
				<HeartOutline size="sm" />
				<span class="text-xs text-black">
					{new Date().getFullYear() - 2017}yrs
				</span>
			</p>
		</div>
	</div>
	<div class="flex w-full flex-row items-center text-lg">
		<p>Follow Me:</p>
		<a href="https://www.instagram.com/claretattoos/">
			<InstagramSolid size="sm" />
		</a>
	</div>
</div>
