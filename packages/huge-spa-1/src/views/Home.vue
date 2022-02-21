<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="sendHttp">发个http</button>
    <button @click="changeParentState">改个ParentState</button>
    {{ mes }}/
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, inject, watchEffect, computed, toRefs, customRef, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    const mes = ref(inject('message'));


    setInterval(() => {
      console.error('mes', mes)
    }, 5000);

    setInterval(() => {
      console.error('setTimeout mes', mes); 
    }, 6000);


    const sendHttp = () => {
      console.error('message2', mes);
    }

    const changeParentState = () => {
      proxy.$pinia.useCartStore().commonData = 3;
    }

    watchEffect(mes, () => {
      console.error('watchEffect', mes)
    }, { deep: true, immediate: true })

    return {
      mes,
      sendHttp,
      changeParentState,
    };
  },
});
</script>
<style>
</style>
