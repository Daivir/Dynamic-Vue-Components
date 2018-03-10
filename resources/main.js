import Vue from 'vue'
import App from './App'

export function render(name, properties) {
  new Vue({
    el: '#' + name,
    render: h => h(App, {
      props: {
        componentName: name,
        items: properties
      }
    })
  });
}
