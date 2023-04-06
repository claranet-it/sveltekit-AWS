<script>
  export let closeEyes = true;
</script>

<div class="absolute w-24 m-auto mb-8 top-[30px] left-[39.5%] w-[65px]">
	<div class="eyes">
		<div class="eye-left" class:eye--close="{closeEyes}" />
		<div class="eye-right"  class:eye--close="{closeEyes}"  />
	</div>
</div>

<style>
  @import './Avatar.scss';
</style>