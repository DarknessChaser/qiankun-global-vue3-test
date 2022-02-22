<template>
  <button @click="setToken(100)">setToken(100)</button>
  {{ globalStore.token }}
  <router-view></router-view>
</template>

<script setup>
import {defaultStore, handlers, useGlobalStore} from "./store/global";
import {registerMicroApps} from "qiankun";

const globalStore = useGlobalStore();

const setToken = (val)=>globalStore.setToken(val)
// handlers.token.push(globalStore.setToken);

const apps = [
  {
    name: 'huge-spa-1',
    entry: process.env.NODE_ENV === 'production' ? `${window.location.protocol}//${window.location.hostname}:7001` : 'http://localhost:7001',
    container: '#vue', // 容器
    activeRule: '/huge-spa-1', // 激活条件
    props: {
      // data: useCartStore,
      defaultStore,
      handlers,
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
</script>

<style>
* {
    margin: 0px;
}
#app {
    height: 100vh;
    text-align: center;
    position: relative;
}
</style>
