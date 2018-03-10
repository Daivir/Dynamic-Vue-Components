<template>
	<div class="hello">
		<h1>Hello {{ greet }}!</h1>
	</div>
</template>

<script>
	module.exports = {
	  props: ["greet"]
	}
</script>