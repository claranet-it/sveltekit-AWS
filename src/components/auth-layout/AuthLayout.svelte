<script lang="ts">
	import Avatar from "../avatar/Avatar.svelte";
	export let closeEyes = false;
</script>

<div class="h-[calc(100vh-80px)] flex justify-center">
	<div class="flex flex-col justify-center">
		<div class="relative py-3 sm:max-w-xl sm:mx-auto">
			<div
				class="hidden sm:block absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
			/>
			<div class="relative p-14 bg-white shadow-lg rounded-3xl">
				<div class="relative mb-4">
					<img class="w-40 h-40 m-auto" src="/bear.png" alt="Avatar" />
					<Avatar {closeEyes} />
				</div>
				<div class="max-w-md mx-auto">
					<slot />
				</div>
			</div>
		</div>
	</div>
</div>
