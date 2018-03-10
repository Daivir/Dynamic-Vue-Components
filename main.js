import Vue from 'vue'
import App from './App'

export function createComponent(name, properties) {
  new Vue({
    el: "#app",
    render: h => h(App, {
      props: {
        componentName: name,
        items: properties
      }
    })
  });
}
