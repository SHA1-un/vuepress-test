import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/vuepress-test/",
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Gatekeeper Technology Docs",
      description: "",
    },
  },
  theme,
  shouldPrefetch: false,


  plugins: [
     searchProPlugin({
      // options
    }),

    pwaPlugin({
      // your options
      showInstall: true,
      update: "force",
      appendBase: true,
    }),
  ],
});
