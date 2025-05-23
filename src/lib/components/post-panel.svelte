<script lang="ts">
	export let post: {
		id: string;
		title: string;
		content: string;
	};
</script>

<div>
	<div class="post mb-4 rounded border border-pink-400 bg-pink-50 p-4 shadow">
		<h2 class="text-xl font-bold text-pink-800">{post.title}</h2>
		<p class="text-pink-700">{post.content}</p>
		<p class="mt-2 text-sm text-pink-600">{new Date()}</p>
	</div>
</div>
