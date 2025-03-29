"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[145],{1684:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>c,data:()=>l});var p=a(6254);const t={id:"_76-最小覆盖子串",tabindex:"-1"},e={class:"header-anchor",href:"#_76-最小覆盖子串"},o={},c=(0,a(6995).A)(o,[["render",function(n,s){const a=(0,p.g2)("Badge");return(0,p.uX)(),(0,p.CE)("div",null,[s[1]||(s[1]=(0,p.Lk)("h1",{id:"滑动窗口",tabindex:"-1"},[(0,p.Lk)("a",{class:"header-anchor",href:"#滑动窗口"},[(0,p.Lk)("span",null,"滑动窗口")])],-1)),(0,p.Lk)("h2",t,[(0,p.Lk)("a",e,[(0,p.Lk)("span",null,[s[0]||(s[0]=(0,p.eW)("76.最小覆盖子串 ")),(0,p.bF)(a,{text:"Hard",type:"danger"})])])]),s[2]||(s[2]=(0,p.Fv)('<p><a href="https://leetcode.cn/problems/minimum-window-substring/description/" target="_blank" rel="noopener noreferrer">Leetcode 地址</a></p><p>题目描述：给你一个字符串<code>s</code>、一个字符串<code>t</code> 。返回<code>s</code>中涵盖<code>t</code>所有字符的最小子串。如果<code>s</code>中不存在涵盖<code>t</code>所有字符的子串，则返回空字符串<code>&quot;&quot;</code> 。</p><p>示例如下：</p><blockquote><p>输入：s = &quot;ADOBECODEBANC&quot;, t = &quot;ABC&quot;</p><p>输出：&quot;BANC&quot;</p><p>解释：最小覆盖子串 &quot;BANC&quot; 包含来自字符串 t 的 &#39;A&#39;、&#39;B&#39; 和 &#39;C&#39;。</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">var</span> <span class="token function-variable function">minWindow</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> t<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">let</span> typeSum <span class="token operator">=</span> map<span class="token punctuation">.</span>size<span class="token punctuation">;</span> <span class="token comment">// 包含的字符种类</span></span>\n<span class="line">  <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span></span>\n<span class="line">    r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>r <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 当前字符已经处理完毕</span></span>\n<span class="line">      typeSum<span class="token operator">--</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>typeSum <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 所有类型的字符都处理完毕，开始处理左边界</span></span>\n<span class="line">      <span class="token keyword">let</span> newRes <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>newRes<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> res<span class="token punctuation">.</span>length <span class="token operator">||</span> <span class="token operator">!</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        res <span class="token operator">=</span> newRes<span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> typeSum<span class="token operator">++</span><span class="token punctuation">;</span></span>\n<span class="line">        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">      l<span class="token operator">++</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">    r<span class="token operator">++</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token keyword">return</span> res<span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5))])}]]),l=JSON.parse('{"path":"/code/leetcode/%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3.html","title":"滑动窗口","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"76.最小覆盖子串","slug":"_76-最小覆盖子串","link":"#_76-最小覆盖子串","children":[]}],"git":{"updatedTime":1743245646000,"contributors":[{"name":"caiyihong","username":"caiyihong","email":"caiyihong@baidu.com","commits":1,"url":"https://github.com/caiyihong"}],"changelog":[{"hash":"ead6101e03cc3788ef1cd12937f92e7e1c13617d","time":1743245646000,"email":"caiyihong@baidu.com","author":"caiyihong","message":"新增算法编程模块"}]},"filePathRelative":"code/leetcode/滑动窗口.md","excerpt":"\\n<h2>76.最小覆盖子串 </h2>\\n<p><a href=\\"https://leetcode.cn/problems/minimum-window-substring/description/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Leetcode 地址</a></p>\\n<p>题目描述：给你一个字符串<code>s</code>、一个字符串<code>t</code> 。返回<code>s</code>中涵盖<code>t</code>所有字符的最小子串。如果<code>s</code>中不存在涵盖<code>t</code>所有字符的子串，则返回空字符串<code>\\"\\"</code> 。</p>"}')}}]);