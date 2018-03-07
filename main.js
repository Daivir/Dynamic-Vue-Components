import Vue from 'vue'
import App from '@/App'

// export function createComponent(name, params) {
const vm = new Vue({
  el: "#app",
  render: h => h(App, {
    props: {
      componentName: 'hello' // name
      // datas: params
    }
  })
});
// }

console.log(vm);
