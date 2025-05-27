<script lang="ts">
	import PostList from '$lib/components/post-list.svelte';
	import SidePanel from '$lib/components/side-panel.svelte';
</script>

<div class="grid w-full grid-cols-2 max-sm:grid-cols-1">
	<SidePanel />
	<PostList />
</div>
