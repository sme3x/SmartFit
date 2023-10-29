// Scss
import './assets/styles/main.scss'

// App
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDataTable } from "vuetify/labs/VDataTable";

// Fontawesome icons
import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

// i18n translations
import { createI18n } from 'vue-i18n';
import en from '@/assets/lang/en.json'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: en,
  },
});

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas) // Include needed solid icons
library.add(far) // Include needed regular icons


const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
  components: {
    ...components,
    VDataTable,
  },
  directives,
})

app.use(createPinia())
app.use(vuetify)
app.use(i18n)
app.use(router)

app.mount('#app')
