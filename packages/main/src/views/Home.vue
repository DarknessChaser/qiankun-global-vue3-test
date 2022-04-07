<template>
  <div class="mainapp">
    <!-- 标题栏 -->
    <header class="mainapp-header">
      <div class="mainapp-header_title">QianKun</div>
      <button @click="globalStore.setToken(100)">setToken(100)</button>
      globalStore.token: {{ globalStore.token }}
      <button @click="globalStore.setName('父name')">globalStore.setName('父name')</button>
      globalStore.name: {{ globalStore.name }}
    </header>
    <div class="mainapp-main">
      <!-- 侧边栏 -->
      <div class="mainapp-sidemenu">
        <li>
          <router-link to="/huge-spa-1">No.1 App</router-link>
        </li>
        <li>
          <router-link to="/huge-spa-1-sub">No.1 Sub-App</router-link>
        </li>
        <li>
          <router-link to="/huge-spa-2">No.2 App</router-link>
        </li>
        <li>
          <router-link to="/dao-style-c">Dao Style</router-link>
        </li>
      </div>
      <!-- 子应用  -->
      <main id="subapp-container">
        <router-view />
      </main>
    </div>
  </div>
  <!-- <router-view /> -->
</template>

<script>
import { defineComponent } from 'vue';
import { useGlobalStore } from "@/store/global";

export default defineComponent({
  setup() {
    const globalStore = useGlobalStore();

    return {
      globalStore,
    };
  },
});
</script>

<style lang="scss">
.mainapp {
  height: 100%;

  &-header {
    z-index: 2000;
    display: flex;
    height: 40px;
    background-color: #1f2126;
    color: white;
    align-items: center;
    &_title {
      margin-left: 10px;
      color: grey;
    }
  }

  &-main {
    display: flex;
    height: 100%;

    .mainapp-sidemenu {
      list-style: none;
      width: 200px;
      background-color: #373b41;
      display: flex;
      flex-direction: column;
      position: relative;
      height: 100%;

      li {
        margin: 20px 15px;
        font-size: 18px;
        font-weight: 400;
        text-align: left;
        cursor: pointer;

        a {
          color: #aaa;
          text-decoration: none;

          &:active, &:focus{
            color: #fff;
          }
        }
      }
    }
  }

  // 子应用区域
  #subapp-container {
    flex: 1;
    position: relative;
    overflow: scroll;

    .subapp-loading {
      color: #444;
      font-size: 28px;
      font-weight: 600;
      text-align: center;
    }
  }
}
</style>
