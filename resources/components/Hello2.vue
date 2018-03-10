<template>
	<div class="hello2">
		<h1>Hello2 {{ greet }}!</h1>
	</div>
</template>

<script>
	module.exports = {
	  props: {
	    greet: {
	      type: String,
				default: 'World'
			}
		}
	}
</script>

<style lang="scss">
	$color: blue;
	.hello2 {
		h1 {
			color: $color;
		}
	}
</style>