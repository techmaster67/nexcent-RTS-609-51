import '@/assets/style/style.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'

const app = createApp(App)

app.use(router)

app.mount('#app')

// открытие | закрытие навигации
const buttonMenu = document.querySelector('.mobile-nav__header-button')
const mobileNav = document.querySelector('.mobile-nav')

buttonMenu.addEventListener('click', buttonMenuClicked)

function buttonMenuClicked(){
    mobileNav.classList.toggle('opened')
}