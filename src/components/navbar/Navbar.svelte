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
			<span class="text-white text-5xl font-bold ml-2 mt-1"> SvelteKit ❤️ AWS </span>
		</a>
		<div class="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul
				class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
			>
				{#if isAuthenticated}
					<li>
						<a
							href="/signout"
							class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z"
									fill="#263141"
								/>
							</svg>
							Sign out
						</a>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</nav>
