export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/caiyihong/Desktop/myblog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/caiyihong/Desktop/myblog/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"_blog":{"title":"Get Started","author":"","date":null,"category":[],"tag":[],"excerpt":"\n<p>This is a normal page, which contains VuePress basics.</p>\n<h2>Pages</h2>\n<p>You can add markdown files in your vuepress directory, every markdown file will be converted to a page in your site.</p>\n<p>See <a href=\"https://vuejs.press/guide/page.html#routing\" target=\"_blank\" rel=\"noopener noreferrer\">routing</a> for more details.</p>"},"title":"Get Started"} }],
  ["/code/", { loader: () => import(/* webpackChunkName: "code_index.html" */"/Users/caiyihong/Desktop/myblog/docs/.vuepress/.temp/pages/code/index.html.js"), meta: {"_blog":{"title":"","author":"","date":null,"category":[],"tag":[],"excerpt":""},"title":""} }],
  ["/code/leetcode/", { loader: () => import(/* webpackChunkName: "code_leetcode_index.html" */"/Users/caiyihong/Desktop/myblog/docs/.vuepress/.temp/pages/code/leetcode/index.html.js"), meta: {"_blog":{"title":"","author":"","date":null,"category":[],"tag":[],"excerpt":"<p>Leetcode</p>\n"},"title":""} }],
  ["/code/leetcode/%E6%95%B0%E7%BB%84%E5%92%8C%E5%AD%97%E7%AC%A6%E4%B8%B2.html", { loader: () => import(/* webpackChunkName: "code_leetcode_数组和字符串.html" */"/Users/caiyihong/Desktop/myblog/docs/.vuepress/.temp/pages/code/leetcode/数组和字符串.html.js"), meta: {"_blog":{"title":"数组和字符串","author":"","date":null,"category":[],"tag":[],"excerpt":"\n"},"title":"数组和字符串"} }],
  ["/code/leetcode/%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3.html", { loader: () => import(/* webpackChunkName: "code_leetcode_滑动窗口.html" */"/Users/caiyihong/Desktop/myblog/docs/.vuepress/.temp/pages/code/leetcode/滑动窗口.html.js"), meta: {"_blog":{"title":"滑动窗口","author":"","date":null,"category":[],"tag":[],"excerpt":"\n<h2>76.最小覆盖子串 </h2>\n<p><a href=\"https://leetcode.cn/problems/minimum-window-substring/description/\" target=\"_blank\" rel=\"noopener noreferrer\">Leetcode 地址</a></p>\n<p>题目描述：给你一个字符串<code>s</code>、一个字符串<code>t</code> 。返回<code>s</code>中涵盖<code>t</code>所有字符的最小子串。如果<code>s</code>中不存在涵盖<code>t</code>所有字符的子串，则返回空字符串<code>\"\"</code> 。</p>"},"title":"滑动窗口"} }],
  ["/code/programme/", { loader: () => import(/* webpackChunkName: "code_programme_index.html" */"/Users/caiyihong/Desktop/myblog/docs/.vuepress/.temp/pages/code/programme/index.html.js"), meta: {"_blog":{"title":"","author":"","date":null,"category":[],"tag":[],"excerpt":"<p>算法编程</p>\n"},"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/caiyihong/Desktop/myblog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/caiyihong/Desktop/myblog/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/caiyihong/Desktop/myblog/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/caiyihong/Desktop/myblog/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/caiyihong/Desktop/myblog/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
