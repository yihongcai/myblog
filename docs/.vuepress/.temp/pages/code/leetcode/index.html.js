import comp from "/Users/caiyihong/Desktop/myblog/docs/.vuepress/.temp/pages/code/leetcode/index.html.vue"
const data = JSON.parse("{\"path\":\"/code/leetcode/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"code/leetcode/README.md\",\"excerpt\":\"<p>Leetcode</p>\\n\"}")
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
