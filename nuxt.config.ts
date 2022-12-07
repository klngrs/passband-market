// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    builder: 'webpack',
    modules: ['@nuxtjs/tailwindcss'],
    css: [
        '~/assets/style/_variables.scss',
    ],
    // vite: {
    //   build: {
    //       assetsDir: 'static'
    //   }
    // },
    // webpack: {
    //     devMiddleware: {
    //         writeToDisk: true
    //     },
    // },
    // runtimeConfig: {
    //     "public": {},
    //     "app": {
    //         "baseURL": "/",
    //         "buildAssetsDir": "/static/",
    //         "cdnURL": ""
    //     }
    // },
})
