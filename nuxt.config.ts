// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/html-validator',
    '@nuxtjs/tailwindcss',
  ],

  $production: {
    htmlValidator: {
      enabled: false,
    },
  },

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    typedPages: true,
    buildCache: true,
  },

  compatibilityDate: '2025-05-15',

  nitro: {
    preset: 'bun',
  },

  eslint: {
    config: {
      nuxt: {
        sortConfigKeys: true,
      },
      standalone: false,
    },
  },

  htmlValidator: {
    usePrettier: true,
  },
})
