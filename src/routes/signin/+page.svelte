<script lang="ts">
	import AuthLayout from '../../components/auth-layout/AuthLayout.svelte';
	import Avatar from '../../components/avatar/Avatar.svelte';
	import Button from '../../components/button/Button.svelte';
	import type { ActionData } from './$types';

	let closeEyes = false;

	export let form: ActionData;
</script>

<svelte:head>
	<title>SignIn</title>
	<meta name="description" content="SignIn" />
</svelte:head>

<AuthLayout {closeEyes}>
	<div>
		<h1 class="text-2xl font-semibold">Enter your user and password</h1>
	</div>
	<div class="divide-y divide-gray-200">
		{#if form?.error}
			<div class="text-red-500 text-sm">{form.error}</div>
		{/if}
		<form
			class="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
			method="POST"
			action="?/signIn"
		>
			<div class="relative">
				<input
					autocomplete="off"
					id="email"
					name="email"
					type="text"
					class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
					placeholder="Email address"
				/>
				<label
					for="email"
					class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
					>Email Address</label
				>
			</div>
			<div class="relative">
				<input
					autocomplete="off"
					id="password"
					name="password"
					type="password"
					class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
					placeholder="Password"
					on:focus={() => (closeEyes = true)}
					on:blur={() => (closeEyes = false)}
				/>
				<label
					for="password"
					class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
					>Password</label
				>
			</div>
			<Button>Sign in</Button>
			<div class="py-4">
				<span class="text-black">Don’t have an account yet?</span>
				<a href="/signup" class="font-medium text-orange-600 hover:underline">Sign up</a>
			</div>
		</form>
	</div>
</AuthLayout>
