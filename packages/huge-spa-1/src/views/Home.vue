<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h3>huge-spa-1</h3>
    <button @click="globalStore.setToken(3)">globalStore.setToken(3)</button>{{globalStore.token}}
    <hr>
    注意修改必须用set方法
    <button @click="$globalStore.setName('huge-spa-1-name')">$globalStore.setName('huge-spa-1-name')</button>{{$globalStore.name}}
  </div>
</template>

<script>
import {defineComponent, inject} from 'vue';

export default defineComponent({
  setup() {
    const globalStore = inject('globalStore');

    return {
      globalStore,
    };
  },
});
</script>
<style>
</style>
