<script lang="ts">
	let clicked = false;
	const handleClickMenu = () => {
		clicked = !clicked;
	};

	export let isAuthenticated: boolean;
</script>

<nav class="h-[80px]">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<div />
		<a href="/" class="flex">
			<img src="src/lib/images/svelte-logo.svg" alt="logo" class="h-14 w-14" />
			<span class="text-white text-3xl sm:text-5xl font-bold ml-2 mt-2 sm:mt-1">
				SvelteKit ❤️ AWS
			</span>
		</a>
		<div>
			{#if isAuthenticated}
				<a href="/signout" class="bg-transparent pr-4">
					<svg width="40" height="40" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z"
							fill="white"
						/>
					</svg>
				</a>
			{/if}
		</div>
	</div>
</nav>
