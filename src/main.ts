import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
// Vue Router
import router from './router'


// Vuetify icon configuration
const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',  // Specify Material Design Icons (mdi)
    },
    components,
    directives,
  })

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.mount('#app')