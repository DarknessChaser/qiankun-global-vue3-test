import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun'

createApp(App).use(router).mount('#app')

const apps = [
  {
    name: 'huge-spa-1',
    entry: process.env.NODE_ENV === 'production' ? window.location.origin + '/huge-spa-1' : 'http://localhost:7001', // 通过fetch加载html，js并且动态执行，所以子应用必须支持跨域
    container: '#vue', // 容器
    activeRule: '/huge-spa-1' // 激活条件
  },
  {
    name: 'huge-spa-2',
    entry: process.env.NODE_ENV === 'production' ? window.location.origin + '/huge-spa-2' : 'http://localhost:7002', // 通过fetch加载html，js并且动态执行，所以子应用必须支持跨域
    container: '#vue',
    activeRule: '/huge-spa-2'
  },
]

const lifeCycles = {
  beforeLoad: () => {
    console.log('加载前')
  },
  beforeMount: () => {
    console.log('挂载前')
  },
  afterMount: () => {
    console.log('挂载后')
  },
  beforeUnmount: () => {
    console.log('销毁前')
  },
  afterUnmount: () => {
    console.log('销毁后')
  },
}

registerMicroApps(apps, lifeCycles)
