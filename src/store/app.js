import { defineStore } from 'pinia'

export const useAppstore = defineStore("app", {
  state: () => ({
    //狀態
    client: null,
    commentsActionMap: null,
  }),
  getters: {
    //getters
  },
  actions: {
    //actions
  },
});