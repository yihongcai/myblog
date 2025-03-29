import comp from "/Users/caiyihong/Desktop/myblog/docs/.vuepress/.temp/pages/code/programme/index.html.vue"
const data = JSON.parse("{\"path\":\"/code/programme/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"code/programme/README.md\",\"excerpt\":\"<p>算法编程</p>\\n\"}")
export { comp, data }

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
