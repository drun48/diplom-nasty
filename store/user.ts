import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    list: [
      {
        id: 1,
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
      },
      {
        id: 2,
        name: "Courtney Henry",
        title: "Designer",
        email: "courtney.henry@example.com",
      },
      {
        id: 3,
        name: "Tom Cook",
        title: "Director of Product",
        email: "tom.cook@example.com",
        role: "Member",
      },
    ],
  }),
  actions: {},
  getters: {
    getList: (state) => state.list,
  },
});
