import { readAuthCookie } from "@/service/auth";
export default defineNuxtPlugin((nuxtApp) => {
  readAuthCookie();
});
