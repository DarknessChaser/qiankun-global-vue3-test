<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="changeToken">改个token</button>{{globalStore.token}}
    <hr>
    注意修改必须用set方法
    <button @click="$globalStore.setName('改个name')">改个name</button>{{$globalStore.name}}
  </div>
</template>

<script>
import {defineComponent, inject} from 'vue';

export default defineComponent({
  setup() {
    const globalStore = inject('globalStore');

    const changeToken = () => {
      globalStore.setToken(3);
    }

    return {
      globalStore,
      changeToken,
    };
  },
});
</script>
<style>
</style>
