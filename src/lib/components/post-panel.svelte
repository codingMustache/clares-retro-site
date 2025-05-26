<script lang="ts">
	export let post: {
		content: string;
		img: string;
	};
</script>

<div class="">
	<div class=" gap -2 flex flex-col p-4 shadow">
		<p class="text-black">{post.content}</p>
		<img src={post.img} alt="" class="mx-auto h-auto w-90" />
		<p class="mt-2 text-sm">{new Date()}</p>
	</div>
</div>
