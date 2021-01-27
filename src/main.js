import * as Vue from 'vue'
import App from './App.vue'
import router from './router'
import vClickOutside from 'v-click-outside'

Vue.createApp(App).use(router, vClickOutside).mount('#app')
