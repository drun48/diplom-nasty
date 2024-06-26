import { defineStore } from "pinia";
import diagrm_ganta from "@/assets/img/diagrm_ganta.svg?raw";
import { type NavList } from "@/types/Nav";
export const useAppStore = defineStore("app", {
  state: () => ({
    currentTitle: "",
    email: "",
    role: "",
    id: "",
    navCurator: [
      {
        icon: "mdi:account-eye",
        href: "/users",
      },
      {
        icon: "solar:calendar-bold",
        href: "/",
      },
      {
        href: "/diagram",
        image: diagrm_ganta,
      },
      {
        href: "/applications",
        icon: "i-material-symbols-approval-delegation-outline",
      },
    ],
    navAdmin: [
      {
        href: "/curators",
        icon: "i-mdi-account",
      },
      {
        href: "/event",
        icon: "solar:calendar-bold",
      },
      {
        href:"/support-measures",
        icon:"i-mdi-account-question"
      }
    ],
  }),
  actions: {},
  getters: {
    getNav: (state): NavList => {
      return state.role == "CURATOR" ? state.navCurator : state.navAdmin;
    },
    getRole: (state) => {
      return state.role;
    },
  },
});
