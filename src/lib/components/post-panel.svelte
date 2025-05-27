<script lang="ts">
	export let post: {
		id: string;
		content: string;
		img: string;
	};
	export let index: number; // Add this to control recency order

	// Subtract (index * 6 + 1 to 5) days to simulate slightly staggered posting
	const date = new Date(
		Date.now() -
			(index * 2 + Math.floor(Math.random() * 2)) * 864e5 -
			Math.floor(Math.random() * 3600 * 1000) // subtract up to 1 hour
	);

	const dateStr = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
	const timeStr = date.toLocaleTimeString('en-US', {
		hour: 'numeric',
		minute: '2-digit',
		hour12: true
	});

	const postDate = `${dateStr} @ ${timeStr}`;
</script>

<div>
	<div class="flex flex-col gap-2 p-4 shadow">
		<p class="text-black">{post.content}</p>
		<img src={post.img} alt="" width="100px" height="auto" class="mx-auto h-auto w-full" />
		<p class="mt-2 text-sm">{postDate}</p>
	</div>
</div>
