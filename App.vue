<template>
	<div class="app">
		<component :is="currentComponent" v-bind="items"></component>
	</div>
</template>

<script>
import Hello from '@/components/Hello'

export default {
	components: { Hello },
	props: ["componentName", "items"],
	computed: {
		currentComponent() {
			return this.componentName
		}
	}
}

	//export default {
	//  components: { Hello },
	//	props: ['componentName'],
	//	computed: {
  //    currentComponent: () => {
  //      return this.componentName
  //		}
//			currentDatas: () => {
//        return this.datas
//			}
	//	}
	//}
</script>