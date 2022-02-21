import './public-path';
import { createApp, reactive, toRaw } from 'vue';
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

// function storeTest(props) {
//   props.onGlobalStateChange &&
//     props.onGlobalStateChange(
//       (value, prev) => console.error(`[onGlobalStateChange - ${props.q}]:`, value, prev),
//       true,
//     );
//   props.setGlobalState &&
//     props.setGlobalState({
//       ignore: props.data,
//       store: {
//         data: props.data,
//       },
//     });
// }

export async function mount(props) {
  console.error('props from main framework', props.q); 

  // storeTest(props);
  render(props);
  instance.provide('message', props.q);
  instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
  instance.config.unwrapInjectedRef = true;
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
  instance.config.globalProperties.$pinia = reactive(props.data);
  instance.config.globalProperties.$q = reactive(props.q);
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
  router = null;
  history.destroy();
}
