// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/mainStyle.css'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      domain: '/references/',
    }
  },
  build: { transpile: ['gsap'] }
})
