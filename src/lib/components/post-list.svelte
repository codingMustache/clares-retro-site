<script lang="ts">
	import PostPanel from './post-panel.svelte';
	import RetroWindow from './retro-window.svelte';
	import posts from '$lib/data/posts';
</script>

<div class="flex flex-col items-center justify-center gap-2 max-lg:mx-auto">
	{#each posts as post, index (post.id)}
		<RetroWindow>
			<PostPanel {post} {index} />
		</RetroWindow>
	{/each}
</div>
