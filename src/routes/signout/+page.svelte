<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<svelte:head>
	<title>SignOut</title>
	<meta name="description" content="SignOut" />
</svelte:head>

<div class="m-8">
	<form
		class="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
		method="POST"
		action="?/signOut"
	>
		<div class="relative text-center">
			{#if form?.error}
				<div class="text-red-500 text-sm">{form.error}</div>
			{/if}
			<button class="bg-blue-500 text-white rounded-md m-2 p-4 w-[100px]">Confirm SignOut</button>
		</div>
	</form>
</div>
