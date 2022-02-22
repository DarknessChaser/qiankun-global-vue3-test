<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="changeToken">改个token</button>{{globalStore.token}}
  </div>
</template>

<script>
import {defineComponent, getCurrentInstance, inject} from 'vue';
import {defineStore} from "pinia"

const copyStore = {
  id: 'global',
  state: () => ({
    name: 'initGlobalState',
    token: 'initToken'
  }),
  getters: {
    getName() {
      return this.name;
    },
    getToken() {
      return this.token;
    }
  },
  actions: {
    setName(val) {
      this.name = val;
    },
    setToken(val) {
      this.token = val;
    }
  },
}

export default defineComponent({
  setup() {
    const currentInstance = getCurrentInstance();
    currentInstance;
    // console.log(currentInstance,currentInstance.proxy.$defaultStore,currentInstance.$handlers,defineStore);
    const defaultStore = copyStore || inject('defaultStore');
    const handlers = inject('handlers');
    const useGlobalStore = defineStore(defaultStore);
    const globalStore = useGlobalStore();
    handlers.token.push(globalStore.setToken);
    console.log(handlers.token)

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
