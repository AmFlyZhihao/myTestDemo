// my-component.js
import {  ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `<div class="red">Count is: {{ count }}</div>`
}