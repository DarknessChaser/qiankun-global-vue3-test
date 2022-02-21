// @ts-check
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

export const useCartStore = proxy.$pinia.useCartStore();
