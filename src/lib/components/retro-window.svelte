<script>
	import { CloseOutline, MinusOutline } from 'flowbite-svelte-icons';
</script>

<div class="border-groove win h-fit w-fit bg-[#c0c0c0]">
	<div class="flex justify-between border-3 border-[#c0c0c0] bg-blue-700 p-1">
		<p class="text-white">Girlpop OS</p>
		<div class="flex items-end justify-end gap-1">
			<div class="win bg-gray-200">
				<MinusOutline />
			</div>
			<div class="win bg-gray-200">
				<CloseOutline />
			</div>
		</div>
	</div>
	<slot />
</div>

<style>
	.win {
		border: 2px outset #c0c0c0;
	}
</style>
