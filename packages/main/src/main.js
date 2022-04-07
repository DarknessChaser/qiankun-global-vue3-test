import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import daoStyle from '@dao-style/core';
import '@dao-style/core/dist/style.css';

import {createPinia} from 'pinia';
import {registerGlobalStoreHandler, initGlobalStore} from "./store/global";

import {registerMicroApps} from "qiankun";

createApp(App).use(router).use(daoStyle).use(createPinia()).mount('#app')

initGlobalStore();

const apps = [
    {
        name: 'huge-spa-1',
        entry: process.env.NODE_ENV === 'production' ? `${window.location.protocol}//${window.location.hostname}:7010` : 'http://localhost:7010',
        container: '#vue', // 容器
        activeRule: '/huge-spa-1', // 激活条件
        props: {
            registerGlobalStoreHandler,
        }
    },
    {
        name: 'huge-spa-1-sub',
        entry: process.env.NODE_ENV === 'production' ? `${window.location.protocol}//${window.location.hostname}:7011` : 'http://localhost:7011',
        container: '#vue', // 容器
        activeRule: '/huge-spa-1-sub', // 激活条件
        props: {
            registerGlobalStoreHandler,
        }
    },
    {
        name: 'huge-spa-2',
        entry: process.env.NODE_ENV === 'production' ? `${window.location.protocol}//${window.location.hostname}:7002` : 'http://localhost:7002',
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
