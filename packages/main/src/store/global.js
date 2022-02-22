// @ts-check
import {defineStore} from 'pinia';

export const handlers = {
    'token': [

    ]
}

let running = false;

export const defaultStore = {
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
            if(!running) {
                running = true;
                handlers.token.forEach(fn=>fn());
                running = false;
            }
        }
    },
}

export const useGlobalStore = defineStore(defaultStore)
