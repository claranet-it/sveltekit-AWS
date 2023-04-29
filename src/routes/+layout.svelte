<script lang="ts">
	import Navbar from '../components/navbar/Navbar.svelte';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<Navbar isAuthenticated={data.session?.isAuthenticated ?? false} />

<slot />

<style>
	@import './styles.scss';
</style>
