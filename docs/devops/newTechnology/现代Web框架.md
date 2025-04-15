# 现代 Web 框架

## （1）React + Next

## （2）Vue + Nuxt

## （3）SolidJS

**核心特点**

- 响应式模型借鉴自 Knockout/Signals：使用 fine-grained reactivity（细粒度响应式），编译时优化响应依赖。
- 没有虚拟 DOM：直接操作真实 DOM，提升性能。
- 编译时优化：模版在构建时被编译成高效的原生 DOM 操作。
- React-like 语法：使用 JSX，看起来很像 React，但运行机制完全不同。
- 性能极高：在各种基准测试中经常排在第一或前几。

<p style="color: red;">直接操作DOM但是性能高的核心原因：细粒度响应式。</p>

**优势**

- 非常高效，适合性能要求极高的场景。
- 学习成本低（尤其是有 React 背景的开发者）。
- 小巧、无虚拟 DOM 开销。

**不足**

- 生态还在成长中，不如 React 完善。
- 调试工具和开发者支持相对较少（但正在改善）。

## （4）Qwik

**核心特点**

- 以“瞬间启动“（resumability）为核心理念：主打服务器生成应用后，在客户算无需完整加载 JS 就能交互。
- 延迟加载一切（Lazy everything）：直到用户交互才按需加载代码。
- 适合边缘计算和 SSR 场景：例如 Cloudflare Workers、Vercel Edge Functions。
- 使用 JSX 语法，和 React/Solid 类似。

**优势**

- 近乎“零 JS 启动时间”，非常适合 SEO 和首屏性能关键的应用。
- SSR 和客户端无缝结合。
- 能让大型应用“秒开”。

**不足**

- 更高的学习曲线，尤其是理解 resumability 的概念。
- 框架本身更复杂，对开发者心智负担稍大。
- 生态尚在发展阶段。
