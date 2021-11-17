import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBlog, faFutbol } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBlog, faTwitter, faGithub, faFutbol)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
