<script lang="ts">
	export let className = ''
</script>

<div class="relative text-center">
	<button class="bg-orange-600 text-white text-xl rounded-md m-2 p-4 w-[100px] {className}">
		<slot />
	</button>
</div>
