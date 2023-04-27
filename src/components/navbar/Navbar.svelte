<script>
	let clicked = false;
	const handleClickMenu = () => {
		clicked = !clicked;
	};
</script>

<nav
	class="
  flex flex-wrap
  items-center
  justify-between
  w-full
  py-4
  md:py-0
  px-4
  text-lg text-gray-700
  bg-white
"
>
	<div>
		<a href="/">
			<img src="src/lib/images/svelte-logo.svg" alt="logo" class="h-8 w-8" />
		</a>
	</div>

	<button on:click={handleClickMenu}>
		<img
			src="src/lib/images/hamburger-menu.svg"
			alt="menu"
			class="h-6 w-6 cursor-pointer md:hidden block"
		/>
	</button>

	<div
		class={clicked
			? 'w-full md:flex md:items-center md:w-auto'
			: ' hidden w-full md:flex md:items-center md:w-auto'}
	>
		<ul
			class="
	  pt-4
	  text-base text-gray-700
	  md:flex
	  md:justify-between
	  md:pt-0"
		>
			<li>
				<a class="md:p-4 py-2 block hover:text-purple-400" href="/signin">Signin</a>
			</li>
			<li>
				<a class="md:p-4 py-2 block hover:text-purple-400" href="/confirm">Confirm</a>
			</li>
			<li>
				<a class="md:p-4 py-2 block hover:text-purple-400 text-purple-500" href="/signup">Sign Up</a
				>
			</li>
		</ul>
	</div>
</nav>
