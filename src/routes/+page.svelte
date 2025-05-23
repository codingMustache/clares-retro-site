<script lang="ts">
	import PostList from '$lib/components/post-list.svelte';
	import SidePanel from '$lib/components/side-panel.svelte';
</script>

<div class="max-w- grid grid-cols-2">
	<SidePanel />
	<PostList />
</div>
