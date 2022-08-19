import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from './pinia'

const pinia: any = createPinia()

console.log(pinia)

createApp(App).use(pinia).mount('#app')
