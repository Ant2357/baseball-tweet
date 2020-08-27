import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(BootstrapVue)
Vue.use(VueCompositionApi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
