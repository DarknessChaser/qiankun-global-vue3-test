// @ts-check
import {defineStore} from 'pinia';

const handlers = new Map();

const setFn = (id, val) => {
    handlers.get(id).forEach(fn => {
        if (typeof fn === 'function') {
            fn(val)
        }
    });
}

const globalStoreConfig = {
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
            setFn('name',val);
        },
        setToken(val) {
            setFn('token',val);
        }
    },
}

export const useGlobalStore = defineStore(globalStoreConfig);

export const initGlobalStore = ()=> {
    const state = globalStoreConfig.state();
    const store = useGlobalStore();
    Object.keys(state).forEach(key => {
        handlers.set(key,new Set());
        handlers.get(key).add((val)=>store[key]=val);
    })
}

export const registerGlobalStoreHandler = (app,defineStore)=> {
    const useChildStore= defineStore(globalStoreConfig);
    const childStore = useChildStore();
    const state = globalStoreConfig.state();
    Object.keys(state).forEach(key => {
        handlers.get(key).add((val)=>childStore[key]=val);
    })
    app.provide('globalStore',childStore);
    app.config.globalProperties.$globalStore = childStore;
    return childStore;
}
