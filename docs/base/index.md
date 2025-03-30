# 闭包

## 闭包的定义

在 JavaScript 中，根据词法作用域的规则，内部函数总是可以访问其外部函数中的变量。

当调用一个外部函数返回的内部函数时，就是该外部函数已经执行结束了，但是内部函数访问外部函数中的变量仍然保存在内部函数的作用域链中，我们把这些变量的集合称为闭包 Closure。

闭包的代码示例：

```js
function makeFunc() {
  const name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  return displayName;
}
const myFunc = makeFunc();
myFunc();
```

## 闭包的特点

1.函数嵌套：闭包必须是一个嵌套的函数（即在一个函数内部定义另一个函数）。

2.访问外部变量：内层函数可以访问外层函数的变量，即使外层函数已经执行完毕。

3.变量持久化：由于闭包的存在，外部函数的参数和变量不会被垃圾回收（GC），因为内部函数仍然引用它。

## 闭包的使用场景

1.作为事件的回调函数

2.封装私有变量和私有方法

在 JavaScript 中，可以使用闭包来封装私有变量和私有方法。私有变量只能在私有方法中访问，外部无法直接访问。

私有方法不仅有利于限制代码访问，还为管理全局命名空间提供强大能力（可以用于模块封装）。

```js
const counter = function () {
  let privateCounter = 0;
  return {
    increment: function () {
      return ++privateCounter;
    },
    decrement: function () {
      return --privateCounter;
    },
    value: function () {
      return privateCounter;
    },
  };
};
counter.value(); // 0
counter.increment();
counter.increment();
counter.value(); // 2
```

3.闭包作用域链

在一系列的嵌套函数中，所有的嵌套函数都能访问外部函数的作用域。也就是说，在当前上下文中，闭包能访问全部的外部作用域。

```js
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}
console.log(sum(1)(2)(3)(4)); // 10
```

4.在循环中创建闭包，使用闭包保存循环变量

```js
for (let i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}
```

## 闭包的优点和缺点

:::tip
需要明确的是，大量使用闭包并不会造成内存泄漏。只要闭包使用得当，只要引用闭包的函数被正常销毁，闭包所占用的内存都会被垃圾回收机制自动回收，并不会造成内存泄漏。
:::

1.优点

1）变量长期存储在内存中，实现数据共享；

2）避免全局变量的污染；

3）封装私有变量和私有方法。

2.缺点

1）常驻内存，增加内存使用量；

2）使用不当容易造成内存泄漏；

3）闭包在处理速度和内存消耗方面对性能具有负面影响。
