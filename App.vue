<template>
	<div class="app">
		<component :is="currentComponent" <!-- :datas="currentDatas" -->></component>
	</div>
</template>

<script>
  import Hello from '@/components/Hello'

	export default {
	  components: { Hello },
		props: ['componentName'],
		computed: {
      currentComponent: this.componentName,
//			currentDatas: () => {
//        return this.datas
//			}
		}
	}
</script>