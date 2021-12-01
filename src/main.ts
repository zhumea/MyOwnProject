import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 引入pinia
import { createPinia } from 'pinia'

// 配置 antdesign
import Antd from "ant-design-vue"
import 'ant-design-vue/dist/antd.css';

// import Component from 'vue-class-component'
// Component.registerHooks([
//     'beforeRouteEnter',
//     'beforeRouteLeave',
//     'beforeRouteUpdate',
// ])

createApp(App).use(store).use(router).use(Antd).use(createPinia()).mount('#app')
