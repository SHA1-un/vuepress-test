import { defineUserConfig } from "vuepress";
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
});
