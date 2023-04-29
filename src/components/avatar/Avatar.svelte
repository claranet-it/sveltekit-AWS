<script>
	export let closeEyes = true;
</script>

<div class="absolute m-auto mb-8 top-[30px] left-[calc(50%-32.5px)] w-[65px]">
	<div class="eyes">
		<div class="eye-left" class:eye--close={closeEyes} />
		<div class="eye-right" class:eye--close={closeEyes} />
	</div>
</div>

<style>
	@import './Avatar.scss';
</style>
