# 现代 Web 服务器

## （1）Bun

## （2）Deno

Deno 是一个由 Node.js 创始人 Ryan Dahl 重新打造的 JavaScript/TypeScript 运行时，目标是弥补他在设计 Node.js 的“悔恨”。
::: tip
一句话解释：Deno = 更现代、更安全、更简单的 Node.js 替代品。
:::

**Deno 特性**

- 用 Rust 编写，性能强劲。
- 原生支持 JavaScript 和 TypeScript。
- 默认无权限访问文件/网络，需手动开启（类似沙箱）。
- 内建工具链：自带 formatter、linter、test runner、bundler 等。
- 类似浏览器环境，支持 fetch、Request、Response 等。
- 模块系统：没有 node_modules，直接通过 URL 引入模块。
- 无需 webpack、babel，简洁直接运行代码。

**适合使用 Deno 的场景**

- 构建边缘应用（部署在 Vercel、Deno Deploy）
- 编写脚本、工具（TS 原生支持）
- 快速原型和 API 服务（用 Oak/Fresh 框架）
- 想用 TypeScript 全栈开发又不想配置一堆构建工具

## （3）Rust + Axum / Actix
