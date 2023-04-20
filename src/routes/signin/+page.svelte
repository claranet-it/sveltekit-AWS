<script>
	import Avatar from '../../components/avatar/Avatar.svelte';

	let closeEyes = false;
</script>

<svelte:head>
	<title>SignIn</title>
	<meta name="description" content="SignIn" />
</svelte:head>

<div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
		/>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="relative mb-4">
				<img class="w-40 h-40 m-auto" src="/bear.png" alt="Avatar" />
				<Avatar {closeEyes} />
			</div>
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Enter your user and password</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
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
						<div class="relative text-center">
							<button class="bg-blue-500 text-white rounded-md m-2 p-4 w-[100px]">SignIn</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
