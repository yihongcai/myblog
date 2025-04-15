# 基础

## 1.Vue 组件之间的通信方式有哪些

## 2.Vue2 的响应式原理

## 3.虚拟 DOM

虚拟 DOM 本质上是 JavaScript 对象，是真实 DOM 的描述，用一个 JavaScript 对象来描述一个 DOM 节点。

虚拟 DOM 可以看作是一棵模拟 DOM 树的 JavaScript 树，主要通过 VNode 实现一个无状态的组件，当组件状态变更时，通过新旧虚拟 DOM 的对比，再对真实的 DOM 进行更新。<span style="color:red;">虚拟 DOM 说白了就是以 js 的计算性能来换取操作真实 DOM 所消耗的性能。</span>

**虚拟 DOM 的实现原理**

1）用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象；

2）diff 算法-对比两个虚拟 DOM 对象的差异；

3）patch 算法-将两个虚拟 DOM 对象的差异应用到真实的 DOM 树上。

**虚拟 DOM 的优缺点**

（1）优点

- 跨平台与分层设计

虚拟 DOM 本质上是 JavaScript 对象，而真实的 DOM 与平台强相关，相比之下虚拟 DOM 带来了分层设计、跨平台以及 SSR 等特性。

- 以最小的代价更新变化的视图

优化、整合 DOM 操作，减少 DOM 的操作次数。虚拟 DOM 的优化并不在于单次的操作，而是在大量、频繁的数据更新下，能够对视图进行合理、有效的更新。

- 无需手动操作 DOM

框架会根据虚拟 DOM 和页面数据之间的双向绑定关系，帮助我们以可预期的方式更新视图，极大提高开发效率。

- 保证性能下限

虚拟 DOM 需要适应任何上层 API 可能产生的操作（分层设计），它的 DOM 操作必须是普适的，所以它的性能并不是最优的，但还是比直接操作真实 DOM 的性能要好很多。因此虚拟 DOM 至少可以保证在不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限。

（2）缺点

- 无法进行极致优化

虽然虚拟 DOM 加上合理的优化足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。

## 4.Vue 中的 diff 算法

diff 算法是一种通过同层的树节点进行比较的高效算法。<span style="color:red;">整体策略为：深度优先，同层比较。</span>

**diff 算法的特点**

1）比较只会在同层级进行，不会跨层级进行比较。

2）在 diff 比较的过程中，循环从两边向中间比较（双端比较法）。

**diff 算法的比较过程如下**

优先比较新旧虚拟 dom 的头尾 vnode 节点。头尾 vnode 节点两两比较，会存在以下 3 种情况：

1）当新旧子树的开始节点或结束节点相同时（`oldStartVnode == newStartVnode || oldEndVnode == newEndVnode`），直接保留该 vnode 节点。

2）当旧子树的开始节点与新子树的结束节点相同时（`oldStartVnode == newEndVnode`），说明 oldStartVnode 已经移动到 oldEndVnode 后面去了，保留该 vnode 节点的同时将该节点移动到 oldEndVnode 之后。

3）当旧子树的结束节点与新子树的开始节点相同时（`oldEndVnode == newStartVnode`），说明 oldEndVnode 已经移动到 oldStartVnode 前面去了，保留该 vnode 节点的同时将该节点移动到 oldStartVnode 之前。

如果以上情况均不符合，则进入 key 的比较。通过 createKeyToOldIdx 创建 oldKeyToIdx（哈希表），里面存放了旧节点的 key 与节点的映射关系。拿新节点的 key 去 oldKeyToIdx 中查找是否存在 key 相同的节点。如果 key 相同，则进一步比较是否是同一节点。如果是同一节点则保留并移动该 vnode 节点；如果具有相同的 key 但是是不同的节点，则通过 createElm 创建新节点并就地修改。

::: tip key 的作用
key 主要用在虚拟 dom 的 diff 算法中，是 vnode 节点的唯一标识，如果两端两两对比的情况都没有匹配，则进入 key 的比较。通过 key 的对比，diff 操作可以更准确、快速的达到复用节点和更新视图的目的。
:::

::: tip 为什么不能使用 index 作为 key？
如果使用 index 作为 key，不管数组的顺序怎么颠倒，index 的排序始终是一样的。key 的顺序没变，传入的值却完全变了，将会导致 vue 无法复用正确的 vnode 节点，所有节点都需要重新创建，违背了虚拟 dom 用于减少真实 dom 操作的原则。
:::

## 5.Vue2 和 Vue3 有什么区别

## 6.父子组件生命周期钩子执行顺序

父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted

## 7.VueRouter 原理

VueRouter 的实现原理就是更新视图而不重新请求页面。

VueRouter 可以通过 mode 参数设置为三种模式：hash 模式、history 模式和 abstract 模式。

其中，hash 模式和 history 模式都是通过`window.addEventListenter()`方法监听 hashChange 和 popState 事件来进行对应路由的操作，可以通过 back、forward、go 等方法访问浏览器的历史记录栈进行各种跳转。

而 abstract 模式是自己维护的一个模拟浏览器历史记录栈的数组。

## 8.Vue 路由守卫

## 9.Vuex 原理

## 10.Vue 中的$nextTick 的作用与原理是什么？

## 11.computed 和 watch 的区别

## 12.v-for 和 v-if 哪个优先级更高？为什么不能把 v-if 和 v-for 同时用在同一个元素上，原理是什么？

## 13.动态给 data 添加一个新的属性时会发生什么？

## 14.Vue 的错误处理机制有哪些

## 15.手写发布订阅者模式
