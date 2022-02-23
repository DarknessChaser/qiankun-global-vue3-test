import './public-path';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import daoStyle from '@dao-style/core';
import './assets/common.less';
import '@dao-style/core/dist/style.css';
import App from './App.vue';
import routes from './router';
// import store from './store';
import { createPinia,defineStore } from "pinia"

let router = null;
let instance = null;
let history = null;

function render(props = {}) {
  const { container } = props;
  const store = createPinia();
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/huge-spa-1' : '/');
  router = createRouter({
    history,
    routes,
  });

  instance = createApp(App);
  instance.use(router);
  instance.use(store);
  instance.use(daoStyle);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('%c ', 'color: green;', 'vue3.0 app bootstraped');
}

export async function mount(props) {
  console.warn('props from main framework', props);
  render(props);
  props.registerGlobalStoreHandler(instance, defineStore);
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
  router = null;
  history.destroy();
}
