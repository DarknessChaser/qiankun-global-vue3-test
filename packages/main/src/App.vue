<template>
  <button @click="globalStore.setToken(100)">setToken(100)</button>
  {{ globalStore.token }}
  <button @click="globalStore.setName('父name')">globalStore.setName('父name')</button>
  {{ globalStore.name }}
  <router-view></router-view>
</template>

<script setup>
import {useGlobalStore} from "./store/global";

const globalStore = useGlobalStore();
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
