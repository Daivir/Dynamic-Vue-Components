<template>
	<div class="app">
		<component :is="currentComponent" v-bind="items"></component>
	</div>
</template>

<script>
import Hello from './components/Hello'
import Hello2 from './components/Hello2'

export default {
	components: { Hello, Hello2 },
	props: ['componentName', 'items'],
	computed: {
		currentComponent() {
			return this.componentName
		}
	}
}
</script>