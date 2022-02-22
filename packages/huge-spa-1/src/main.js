import './public-path';
import { createApp, reactive } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import daoStyle from '@dao-style/core';
import './assets/common.less';
import '@dao-style/core/dist/style.css';
import App from './App.vue';
import routes from './router';
// import store from './store';
import { createPinia } from "pinia"

let router = null;
let instance = null;
let history = null;


let q = reactive({ p: 1 });

setInterval(() => {
 q.p += 1;
}, 5000);

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
  // const createDefaultGlobal= defineStore(props.defaultStore);
  // props.handlers.token.push(createDefaultGlobal().setToken);
  // instance.config.globalProperties.$createDefaultGlobal = createDefaultGlobal;
  instance.provide('defaultStore',props.defaultStore);
  // instance.config.globalProperties.$defaultStore = props.defaultStore;
  instance.provide('handlers',props.handlers);
  // instance.config.globalProperties.$handlers = props.handlers;
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
  router = null;
  history.destroy();
}
