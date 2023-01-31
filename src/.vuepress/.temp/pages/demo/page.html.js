export const data = JSON.parse("{\"key\":\"v-6e19edb7\",\"path\":\"/demo/page.html\",\"title\":\"Page Config\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Page Config\",\"icon\":\"page\",\"order\":1,\"author\":\"Ms.Hope\",\"date\":\"2020-01-01T00:00:00.000Z\",\"category\":[\"Guide\"],\"tag\":[\"Page config\",\"Guide\"],\"sticky\":true,\"star\":true,\"footer\":\"Footer content for test\",\"copyright\":\"No Copyright\"},\"headers\":[{\"level\":2,\"title\":\"Page Information\",\"slug\":\"page-information\",\"link\":\"#page-information\",\"children\":[]},{\"level\":2,\"title\":\"Page Content\",\"slug\":\"page-content\",\"link\":\"#page-content\",\"children\":[]},{\"level\":2,\"title\":\"Page Structure\",\"slug\":\"page-structure\",\"link\":\"#page-structure\",\"children\":[]}],\"readingTime\":{\"minutes\":0.97,\"words\":291},\"filePathRelative\":\"demo/page.md\",\"localizedDate\":\"January 1, 2020\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
