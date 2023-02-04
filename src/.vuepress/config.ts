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
    }),

    pwaPlugin({
      // your options
      showInstall: true,
      update: "force",
      appendBase: true,
      manifest: {
        "name": "VuePress",
        "short_name": "VuePress",
        "description": "Vue-powered Static Site Generator",
        "start_url": "/vuepress-test/",
        "display": "standalone",
        "background_color": "#fff",
        "theme_color": "#3eaf7c",
        "icons": [
            {
                "src": "/assets/icon/guide-maskable.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/assets/icon/guide-maskable.png",
                "sizes": "384x384",
                "type": "image/png"
            }
        ]
      }
    }),
  ],
});
