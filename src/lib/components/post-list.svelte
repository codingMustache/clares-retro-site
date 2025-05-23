<script lang="ts">
	import PostPanel from './post-panel.svelte';

	const posts = [
		{
			id: '1',
			title: 'Post One',
			content:
				'This is the first post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod...',
			date: '2023-01-01'
		},
		{
			id: '2',
			title: 'Post Two',
			content:
				'This is the second post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod...',
			date: '2023-01-02'
		},
		{
			id: '3',
			title: 'Post Three',
			content:
				'This is the third post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod...',
			date: '2023-01-03'
		},
		{
			id: '4',
			title: 'Post Four',
			content:
				'This is the fourth post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod...',
			date: '2023-01-04'
		}
	];
</script>

<div class="">
	{#each posts as post (post.id)}
		<PostPanel {post} />
	{/each}
</div>
