<script lang="ts">
	import PostList from '$lib/components/post-list.svelte';
	import SidePanel from '$lib/components/side-panel.svelte';
</script>

<div class="mx-auto grid w-full max-w-7xl grid-cols-2 justify-center max-lg:grid-cols-1">
	<SidePanel />
	<PostList />
</div>
