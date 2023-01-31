export const data = JSON.parse("{\"key\":\"v-2e3eac9e\",\"path\":\"/slides.html\",\"title\":\"Slide page\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Slide page\",\"icon\":\"slides\",\"layout\":\"Slide\"},\"headers\":[],\"readingTime\":{\"minutes\":3.25,\"words\":975},\"filePathRelative\":\"slides.md\"}")

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
