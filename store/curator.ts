import { defineStore } from "pinia";

export const useCuratorStore = defineStore("curator", {
  state: () => ({
    list: [
      {
        id: 1,
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        phone:'89006008913',
        role:'Куратор',
        district:'Липецк'
      },
      {
        id: 1,
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        phone:'89006008913',
        role:'Админ',
        district:'Липецк'
      },
      {
        id: 1,
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        phone:'89006008913',
        role:'Куратор',
        district:'Липецк'
      },
      {
        id: 1,
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        phone:'89006008913',
        role:'Куратор',
        district:'Липецк'
      },
    ],
  }),
  actions: {},
  getters: {
    getList: (state) => state.list,
  },
});
