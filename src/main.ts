import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import VueCompositionApi from '@vue/composition-api'

import { library } from '@fortawesome/fontawesome-svg-core'
// @ts-ignore
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue)
Vue.use(VueCompositionApi)

library.add(faTwitter)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
