<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.session?.isAuthenticated}
	<div>
		<div class="min-h-[24rem] max-w-6xl m-auto rounded-lg p-4 space-y-4">
			<div class="min-h-screen flex flex-col justify-center items-center">
				<div
					class="relative flex flex-col items-center rounded-[20px] w-[400px] sm:w-[500px] mx-auto p-8 bg-white bg-clip-border hover:shadow-2xl hover:shadow-orange-600"
				>
					<div class="relative flex h-32 w-full justify-center rounded-xl bg-cover">
						<img
							src="/account-background.png"
							class="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
							alt="background"
						/>
						<div
							class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400"
						>
							<img class="h-full w-full rounded-full" src="/user-icon.webp" alt="user icon" />
						</div>
					</div>
					<div class="mt-16 flex flex-col items-center pb-4">
						<h4 class="text-xl md:text-3xl font-bold">
							{data.session?.fullName}
						</h4>
					</div>
					<div class="flex flex-col items-center justify-center text-center">
						<div class="text-sm md:text-lg">
							<span class="px-2">{data.session?.email}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
