export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt Starter',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      // script: [{ src: '/js/script.js', body: true, defer: true }],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  modules: ['@nuxt/content'],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  content: {
    documentDriven: true,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/style/main.scss'],
});
