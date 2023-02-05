import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/vuepress-test/",
  head: [
    ["link",
              {
                rel: "icon",
                href: `/assets/icon/chrome-mask-512.png`,
                type: "image/png",
                sizes: "512x512",
              },
            ],
            [
              "link",
              {
                rel: "icon",
                href: `/assets/icon/chrome-mask-192.png`,
                type: "image/png",
                sizes: "512x512",
              },
            ],
            [
              "link",
              {
                rel: "icon",
                href: `/assets/icon/chrome-512.png`,
                type: "image/png",
                sizes: "192x192",
              },
            ],
            [
              "link",
              {
                rel: "icon",
                href: `/assets/icon/chrome-192.png`,
                type: "image/png",
                sizes: "192x192",
              },
            ],
            ["meta", { name: "theme-color", content: "#46bd87" }],
            [
              "link",
              {
                rel: "apple-touch-icon",
                href: `/assets/icon/apple-icon-152.png`,
              },
            ],
            [
              "meta",
              {
                name: "apple-mobile-web-app-status-bar-style",
                content: "black",
              },
            ],
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
    }),
  ],
});
