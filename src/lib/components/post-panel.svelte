<script lang="ts">
	export let post: {
		id: string;
		content: string;
		img: string;
	};

	const date = new Date(
		Date.now() +
			(parseInt(post.id) * 7 + Math.floor(Math.random() * 7)) * 864e5 +
			Math.floor(Math.random() * 864e5)
	);

	const dateStr = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
	const timeStr = date.toLocaleTimeString('en-US', {
		hour: 'numeric',
		minute: '2-digit',
		hour12: true
	});

	const postDate = `${dateStr} @ ${timeStr}`;
</script>

<div class="">
	<div class=" gap -2 flex flex-col p-4 shadow">
		<p class="text-black">{post.content}</p>
		<img src={post.img} alt="" class="mx-auto h-auto w-90" />
		<p class="mt-2 text-sm">
			{postDate}
		</p>
	</div>
</div>
