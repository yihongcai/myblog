# 基础

## 1.React 组件之间的通信方式

## 2.组件的生命周期

## 3.React Context

## 4.高阶组件（HOC）

## 5.React 如何避免不必要的渲染

### React 渲染控制的方式

React 渲染控制的方式可以分为以下几类：

- 从父组件直接隔断子组件的渲染，如缓存 React.element 对象、React.useMemo。
- 组件内部控制是否渲染，如 PureComponent、shouldComponentUpdate、React.memo。
- 打破渲染限制，如 forceUpdate、context 穿透。

（1）从父组件直接隔断子组件的渲染

1）缓存 React.element 对象

该方法适用于类组件。当父组件需要重新渲染，而子组件没有必要跟着一起渲染时，可以使用 React.cloneElement 缓存子组件。如果子组件的 props 变化，则返回新的 element 对象，否则返回缓存的 element 对象。

2）React.useMemo

该方法适用于函数组件。

```jsx
import { useMemo } from 'react';
export default function Parent() {
  const [numberA, setNumberA] = React.useState(0);
  return (
    <div>
      {useMemo(
        () => (
          <Child numberA={numberA} />
        ),
        [numberA]
      )}
      <button onClick={() => setNumberA(numberA + 1)}>+</button>
    </div>
  );
}
```

（2）组件内部控制是否渲染

1）PureComponent

PureComponent 是一种组件本身的渲染优化策略，当类组件选择继承 PureComponent 就意味着要遵循其渲染规则：浅比较 state 和 props 是否相等。

PureComponent 的浅比较规则只会比较基础数据类型，

（3）打破渲染限制

### 对渲染控制的思考

（1）有没有必要在乎组件不必要的渲染
在正常情况下，无须过分在乎 React 没有必要的渲染，要理解执行 render 不等于真正的浏览器渲染视图，render 阶段执行是在 js 当中，js 中运行代码远快于浏览器的 Rendering 和 Painting 的，更何况 React 还提供了 diff 算法等手段去复用真实的 DOM。

（2）什么时候需要注意渲染节流

## 6.React 的 diff 算法
