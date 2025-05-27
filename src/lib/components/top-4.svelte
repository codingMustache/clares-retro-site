<script>
	import Top4 from '$lib/data/top4';
</script>

<div class="flex flex-col px-3 py-2">
	<h3 class="mb-2 text-lg">Top 4:</h3>
	<div class="grid grid-cols-2 grid-rows-2 gap-4 max-md:grid-cols-4 max-md:grid-rows-1">
		{#each Top4 as item, index (index)}
			<div class="text-center">
				<img
					src={item.image}
					alt={item.name}
					class="h-23 w-32 border-1 border-black bg-black object-cover"
				/>
				<p class="text-xs">{item.name}</p>
			</div>
		{/each}
	</div>
</div>
