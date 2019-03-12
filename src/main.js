import Vue from 'vue'
import { Tabs, TabItem } from 'buefy/src/components/tabs'
import { Radio } from 'buefy/src/components/radio'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('b-tabs', Tabs)
Vue.component('b-tab-item', TabItem)
Vue.component('b-radio', Radio)

new Vue({
  render: h => h(App)
}).$mount('#app')
