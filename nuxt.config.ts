// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
  ],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-security',
  ],
  icon: {
    customCollections: [
      {
        prefix: 'original',
        dir: './public/icons'
      },
    ],
  },
  tailwindcss: {
    // Options
  },
  typescript: {
    typeCheck: true,
  },  
})