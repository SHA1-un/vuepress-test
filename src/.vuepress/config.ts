import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/vuepress-test/",

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
      

    }),
  ],
});
