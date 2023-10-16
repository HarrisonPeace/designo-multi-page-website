export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
        {
          href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap",
          rel: "stylesheet",
        },
        { rel: "shortcut icon", href: "/favicon.png", type: "image/x-icon" },
      ],
    },
  },
  css: ["~/assets/scss/main.scss"],
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss", "@nuxt/image"],
});
