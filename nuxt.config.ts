// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/apollo",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    '@nuxtjs/color-mode',
    "nuxt-icon",
  ],
  css: ["@/assets/styles/main.scss"],
  plugins: ["@/plugins/maska.ts", "@/plugins/apollo.ts"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/styles/_variable.scss" as *; @import "@/assets/styles/_variable.scss";',
        },
      },
    },
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.GRAPHQLPOINT ?? "localhost",
        credentials: "include",
      },
    },
    inMemoryCacheOptions: false,
  },
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/icon'
      },
    ],
  },
  colorMode: {
    preference: 'light'
  }
});
