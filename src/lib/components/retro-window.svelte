<script>
	import { CloseOutline, MinusOutline } from 'flowbite-svelte-icons';
</script>

<div class="border-groove win h-fit w-fit bg-[#c0c0c0]">
	<div class="flex justify-between border-3 border-[#c0c0c0] bg-blue-700 p-1">
		<p class="text-white">Girlpop OS</p>
		<div class="flex items-end justify-end gap-1">
			<div class="win bg-gray-200">
				<MinusOutline size="sm" />
			</div>
			<div class="win bg-gray-200">
				<CloseOutline size="sm" />
			</div>
		</div>
	</div>
	<div class="m-1 mt-0 bg-white">
		<slot />
	</div>
</div>

<style>
	.win {
		border: 2px outset #c0c0c0;
	}
</style>
