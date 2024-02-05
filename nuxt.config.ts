// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Barlow: true,
      Inter: true,
      "DM Sans": true
    },
  },
});
