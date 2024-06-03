import { defineStore } from "pinia";

export const useCuratorStore = defineStore("curator", {
  state: () => ({
    list: [],
  }),
  actions: {},
  getters: {
    getList: (state) => state.list,
  },
});
