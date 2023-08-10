// @ts-ignore
import { createApp } from 'vue'
import App from './App.vue'

// @ts-ignore
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core'
// @ts-ignore
import { faBlog } from '@fortawesome/free-solid-svg-icons'
// @ts-ignore
import { faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// @ts-ignore
import VueScrollTo from 'vue-scrollto'

library.add(faBlog as IconDefinition,
  faXTwitter as IconDefinition,
  faGithub as IconDefinition)

createApp(App)
  .use(VueScrollTo)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
