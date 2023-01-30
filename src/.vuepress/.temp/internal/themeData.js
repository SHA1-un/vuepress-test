export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$35NrgNvNY8B77mrwILlAqeAhaVXMmHdBu1RJeKbOFyd/jD.39u5tG\"],\"/zh/demo/encrypt.html\":[\"$2a$10$EAbErOUvabmDDvTR2Ud1.OtpVQhF8ruGHSwKg.z1vT.emqLc0jTSG\"]}},\"locales\":{\"/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page on GitHub\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"encryptLocales\":{\"iconLabel\":\"Page Encrypted\",\"placeholder\":\"Enter password\",\"remember\":\"Remember password\",\"errorHint\":\"Please enter the correct password!\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"},\"author\":{\"name\":\"Mr.Hope\",\"url\":\"https://mrhope.site\"},\"logo\":\"/logo.svg\",\"repo\":\"vuepress-theme-hope/vuepress-theme-hope\",\"docsDir\":\"demo/theme-docs/src\",\"navbar\":[\"/\",{\"text\":\"Demo\",\"icon\":\"discover\",\"link\":\"/demo/\"},{\"text\":\"Guide\",\"icon\":\"creative\",\"prefix\":\"/guide/\",\"children\":[{\"text\":\"Bar\",\"icon\":\"creative\",\"prefix\":\"bar/\",\"children\":[\"baz\",{\"text\":\"...\",\"icon\":\"more\",\"link\":\"\"}]},{\"text\":\"Foo\",\"icon\":\"config\",\"prefix\":\"foo/\",\"children\":[\"ray\",{\"text\":\"...\",\"icon\":\"more\",\"link\":\"\"}]}]},{\"text\":\"V2 Docs\",\"icon\":\"note\",\"link\":\"https://theme-hope.vuejs.press/\"}],\"sidebar\":{\"/\":[\"\",{\"icon\":\"discover\",\"text\":\"Demo\",\"prefix\":\"demo/\",\"link\":\"demo/\",\"children\":\"structure\"},{\"text\":\"Docs\",\"icon\":\"note\",\"prefix\":\"guide/\",\"children\":\"structure\"},\"slides\"]},\"footer\":\"Default footer\",\"displayFooter\":true}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
