import Vue from 'vue'
import App from './App.vue'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
import { DropdownsInstaller } from '@progress/kendo-dropdowns-vue-wrapper'

Vue.use(ButtonsInstaller)
Vue.use(DropdownsInstaller)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
