"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[70],{4018:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>e,data:()=>c});var p=a(6254);const t={},e=(0,a(6995).A)(t,[["render",function(n,s){return(0,p.uX)(),(0,p.CE)("div",null,s[0]||(s[0]=[(0,p.Fv)('<h1 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包"><span>闭包</span></a></h1><h2 id="闭包的定义" tabindex="-1"><a class="header-anchor" href="#闭包的定义"><span>闭包的定义</span></a></h2><p>在 JavaScript 中，根据词法作用域的规则，内部函数总是可以访问其外部函数中的变量。</p><p>当调用一个外部函数返回的内部函数时，就是该外部函数已经执行结束了，但是内部函数访问外部函数中的变量仍然保存在内部函数的作用域链中，我们把这些变量的集合称为闭包 Closure。</p><p>闭包的代码示例：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">makeFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;Mozilla&#39;</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">function</span> <span class="token function">displayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token keyword">return</span> displayName<span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"><span class="token keyword">const</span> myFunc <span class="token operator">=</span> <span class="token function">makeFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="闭包的特点" tabindex="-1"><a class="header-anchor" href="#闭包的特点"><span>闭包的特点</span></a></h2><p>1.函数嵌套：闭包必须是一个嵌套的函数（即在一个函数内部定义另一个函数）。</p><p>2.访问外部变量：内层函数可以访问外层函数的变量，即使外层函数已经执行完毕。</p><p>3.变量持久化：由于闭包的存在，外部函数的参数和变量不会被垃圾回收（GC），因为内部函数仍然引用它。</p><h2 id="闭包的使用场景" tabindex="-1"><a class="header-anchor" href="#闭包的使用场景"><span>闭包的使用场景</span></a></h2><p>1.作为事件的回调函数</p><p>2.封装私有变量和私有方法</p><p>在 JavaScript 中，可以使用闭包来封装私有变量和私有方法。私有变量只能在私有方法中访问，外部无法直接访问。</p><p>私有方法不仅有利于限制代码访问，还为管理全局命名空间提供强大能力（可以用于模块封装）。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">counter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">let</span> privateCounter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">return</span> <span class="token operator">++</span>privateCounter<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token function-variable function">decrement</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">return</span> <span class="token operator">--</span>privateCounter<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token function-variable function">value</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">return</span> privateCounter<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line">counter<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span></span>\n<span class="line">counter<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">counter<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">counter<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.闭包作用域链</p><p>在一系列的嵌套函数中，所有的嵌套函数都能访问外部函数的作用域。也就是说，在当前上下文中，闭包能访问全部的外部作用域。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c <span class="token operator">+</span> d<span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.在循环中创建闭包，使用闭包保存循环变量</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="闭包的优点和缺点" tabindex="-1"><a class="header-anchor" href="#闭包的优点和缺点"><span>闭包的优点和缺点</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>需要明确的是，大量使用闭包并不会造成内存泄漏。只要闭包使用得当，只要引用闭包的函数被正常销毁，闭包所占用的内存都会被垃圾回收机制自动回收，并不会造成内存泄漏。</p></div><p>1.优点</p><p>1）变量长期存储在内存中，实现数据共享；</p><p>2）避免全局变量的污染；</p><p>3）封装私有变量和私有方法。</p><p>2.缺点</p><p>1）常驻内存，增加内存使用量；</p><p>2）使用不当容易造成内存泄漏；</p><p>3）闭包在处理速度和内存消耗方面对性能具有负面影响。</p>',31)]))}]]),c=JSON.parse('{"path":"/base/","title":"闭包","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"闭包的定义","slug":"闭包的定义","link":"#闭包的定义","children":[]},{"level":2,"title":"闭包的特点","slug":"闭包的特点","link":"#闭包的特点","children":[]},{"level":2,"title":"闭包的使用场景","slug":"闭包的使用场景","link":"#闭包的使用场景","children":[]},{"level":2,"title":"闭包的优点和缺点","slug":"闭包的优点和缺点","link":"#闭包的优点和缺点","children":[]}],"git":{"updatedTime":1743338197000,"contributors":[{"name":"caiyihong","username":"caiyihong","email":"caiyihong@baidu.com","commits":2,"url":"https://github.com/caiyihong"}],"changelog":[{"hash":"f7b5243a3c7e2a9cb883a4f54dbe0eccf09a0e1e","time":1743338197000,"email":"caiyihong@baidu.com","author":"caiyihong","message":"新增闭包模块"},{"hash":"01230644abb783e79e8bff855325dd6d2228a9fc","time":1743254131000,"email":"caiyihong@baidu.com","author":"caiyihong","message":"update"}]},"filePathRelative":"base/index.md","excerpt":"\\n<h2>闭包的定义</h2>\\n<p>在 JavaScript 中，根据词法作用域的规则，内部函数总是可以访问其外部函数中的变量。</p>\\n<p>当调用一个外部函数返回的内部函数时，就是该外部函数已经执行结束了，但是内部函数访问外部函数中的变量仍然保存在内部函数的作用域链中，我们把这些变量的集合称为闭包 Closure。</p>\\n<p>闭包的代码示例：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"js\\"><pre><code><span class=\\"line\\"><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">makeFunc</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">  <span class=\\"token keyword\\">const</span> name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\'Mozilla\'</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">  <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">displayName</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">  <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">  <span class=\\"token keyword\\">return</span> displayName<span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">const</span> myFunc <span class=\\"token operator\\">=</span> <span class=\\"token function\\">makeFunc</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">myFunc</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}')}}]);