import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/home/shaun/Documents/Personal/VuePress/vuepress-test/node_modules/.pnpm/vuepress-plugin-pwa2@2.0.0-beta.170_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import PWAInstall from "/home/shaun/Documents/Personal/VuePress/vuepress-test/node_modules/.pnpm/vuepress-plugin-pwa2@2.0.0-beta.170_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-pwa2/lib/client/components/PWAInstall.js";
import SWUpdatePopup from "/home/shaun/Documents/Personal/VuePress/vuepress-test/node_modules/.pnpm/vuepress-plugin-pwa2@2.0.0-beta.170_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    PWAInstall,
    SWUpdatePopup,
    
  ],
});
