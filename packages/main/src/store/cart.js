// @ts-check
import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    commonData: 0,
    axios: null,
  }),
  // getters: {
  //   /**
  //    * @returns {Array<{ name: string; amount: number }>}
  //    */
  //   items: (state) =>
  //     state.rawItems.reduce((items, item) => {
  //       const existingItem = items.find((it) => it.name === item)

  //       if (!existingItem) {
  //         items.push({ name: item, amount: 1 })
  //       } else {
  //         existingItem.amount++
  //       }

  //       return items
  //     }, []),
  // },
  actions: {
    setCommonData(val){
      this.commonData = val;
    },
    setAxios(val){
      this.axios = val;
    }
  },
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
// }
