<template>
	<div class="hello">
		<h1>Hello {{ greet }}!</h1>
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
	$color: red;
	.hello {
		h1 {
			color: $color;
		}
	}
</style>