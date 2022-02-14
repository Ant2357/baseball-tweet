// @ts-ignore
import { createApp } from 'vue'
import App from './App.vue'

// @ts-ignore
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core'
// @ts-ignore
import { faBlog, faFutbol } from '@fortawesome/free-solid-svg-icons'
// @ts-ignore
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBlog as IconDefinition,
  faTwitter as IconDefinition,
  faGithub as IconDefinition,
  faFutbol as IconDefinition)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
