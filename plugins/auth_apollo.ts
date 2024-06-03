export default defineNuxtPlugin((nuxtApp) => {
  const cookie = useCookie("access_token");
  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    token.value = cookie.value;
  });
});
