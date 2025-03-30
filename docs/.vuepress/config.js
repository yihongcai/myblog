import { blogPlugin } from '@vuepress/plugin-blog';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { webpackBundler } from '@vuepress/bundler-webpack';

export default defineUserConfig({
  base: '/myblog/',
  lang: 'en-US',

  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      '/',
      {
        text: '前端基础',
        link: '/base/',
      },
      {
        text: '前端框架',
        link: '/framework/',
      },
      {
        text: '算法编程',
        link: '/code/',
      },
      {
        text: '前端最新资讯',
        link: '/news/',
      },
      {
        text: 'Github',
        link: 'https://github.com/yihongcai/myblog',
      },
    ],

    sidebarDepth: 2,

    sidebar: {
      '/base/': [
        {
          text: 'JavaScript基础',
          link: '/base/javascript/',
          sidebarDepth: 1,
          collapsible: false,
          children: [
            '',
            'javascript/函数柯里化',
            'javascript/this指向',
            'javascript/作用域链',
            'javascript/原型和原型链',
            'javascript/继承',
            'javascript/箭头函数',
            'javascript/异步编程',
          ],
        },
        {
          text: '浏览器和网络',
          link: '/base/browserAndNetwork/',
          sidebarDepth: 1,
          collapsible: false,
          children: [
            'browserAndNetwork/',
            'browserAndNetwork/跨标签页通信',
            'browserAndNetwork/浏览器缓存机制',
            'browserAndNetwork/V8的垃圾回收机制',
          ],
        },
      ],
      '/framework/': [
        {
          text: '前端框架',
          link: '/framework/',
        },
        {
          text: 'Vue篇',
          link: '/framework/vue/',
          sidebarDepth: 1,
          collapsible: false,
        },
        {
          text: 'React篇',
          link: '/framework/react/',
          sidebarDepth: 1,
          collapsible: false,
        },
      ],
      '/code/': [
        {
          text: 'Leetcode',
          link: '/code/leetcode/',
          sidebarDepth: 1,
          collapsible: false,
          children: ['/code/leetcode/数组和字符串', '/code/leetcode/滑动窗口'],
        },
        {
          text: '算法编程',
          link: '/code/programme/',
          sidebarDepth: 1,
          collapsible: false,
          children: [],
        },
      ],
      '/news/': [''],
    },
  }),

  plugins: [
    blogPlugin({
      // Only files under posts are articles
      // filter: ({ filePathRelative }) =>
      //   filePathRelative ? filePathRelative.startsWith('posts/') : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || '',
      }),

      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== 'string',

      category: [
        {
          key: 'category',
          getter: (page) => page.frontmatter.category || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: () => ({
            title: 'Categories',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: 'tag',
          getter: (page) => page.frontmatter.tag || [],
          layout: 'Tag',
          itemLayout: 'Tag',
          frontmatter: () => ({
            title: 'Tags',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: 'article',
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: 'Article',
          frontmatter: () => ({
            title: 'Articles',
            sidebar: false,
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky;

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky)
              return -1;

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1;

            if (!pageB.frontmatter.date) return 1;
            if (!pageA.frontmatter.date) return -1;

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            );
          },
        },
        {
          key: 'timeline',
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: 'Timeline',
          frontmatter: () => ({
            title: 'Timeline',
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: webpackBundler(),
});
