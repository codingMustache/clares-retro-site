<script>
	import { InstagramSolid, HeartSolid, HeartOutline } from 'flowbite-svelte-icons';
</script>

<div class="grid grid-cols-2 p-2">
	<div class=" h-60 w-60 bg-black"></div>
	<div class="flex flex-col justify-between px-2">
		<div class=" grid grid-cols-[100px_100%] gap-1">
			<p class="text-right font-bold">Name:</p>
			<p>Clare Levstik</p>
			<p class="text-right font-bold">Skills:</p>
			<p>Tattooer</p>
			<p class="text-right font-bold">Location:</p>
			<p>San Diego, CA</p>
			<p class="text-right font-bold">Shop:</p>
			<a class="cursor-pointer" href=" http://maps.apple.com/?q=32.749262,-117.091521">
				<p>Tower Tattoo</p>
			</a>
			<p class="text-right font-bold">Experience:</p>
			<p class="grid w-fit grid-cols-5 text-fuchsia-600">
				<HeartSolid />
				<HeartSolid />
				<HeartSolid />
				<HeartSolid />
				<HeartOutline />
				<span class="text-xs text-black">
					{new Date().getFullYear() - 2017}yrs
				</span>
			</p>
		</div>
		<div class="flex w-full flex-row items-center text-lg">
			<p>Follow Me:</p>
			<InstagramSolid />
		</div>
	</div>
</div>
