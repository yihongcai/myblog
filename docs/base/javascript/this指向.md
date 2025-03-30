# this 指向

由于 this 是和执行上下文绑定的，所以 this 也分为全局执行上下文中的 this 和函数执行上下文中的 this。

## 全局执行上下文中的 this

全局执行上下文中的 this 一般指向 window，严格模式下指向 undefined。

## 函数执行上下文中的 this

函数执行上下文中的 this 根据函数调用方式的不同而不同。具体分为以下几种情况：

1.作为函数被调用，this 指向全局 window。

2.作为对象属性被调用，this 执行该对象。

3.作为构造函数被调用，this 指向当前实例对象。

4.使用 call、apply 和 bind 改变 this 指向。

:::tip 简单粗暴的判断方法
看执行函数时函数前面有没有点。如果有点，this 指向点前面的对象；如果没有，this 指向全局 window。
:::

### call、apply 和 bind

call、apply 和 bind 方法都是用于修改函数的 this 指向。

（1）call、apply 和 bind 的区别

call 和 apply 方法都是立即执行，只是参数上有所区别。

- call 方法接收一个参数列表，`fn.call(this, arg1, arg2,..., argn)`
- apply 方法接收一个参数数组，`fn.apply(this, [arg1, arg2,..., argn])`

bind 方法不会立即执行，而是返回一个闭包函数。

- bind 方法接收一个参数列表，`fn.bind(this, arg1, arg2,..., argn)`

（2）多次使用 bind 绑定 this，函数最后绑定的是哪个 this 呢？

由于 bind 的原理是返回一个闭包函数，所以多次使用 bind 绑定 this，函数最后绑定的是最后一次的 this。
