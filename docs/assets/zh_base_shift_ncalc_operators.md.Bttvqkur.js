import{_ as i,o as a,c as e,a3 as t}from"./chunks/framework.C-GLQy3h.js";const c=JSON.parse('{"title":"NCalc 操作符","description":"","frontmatter":{},"headers":[],"relativePath":"zh/base/shift/ncalc/operators.md","filePath":"zh/base/shift/ncalc/operators.md"}'),l={name:"zh/base/shift/ncalc/operators.md"};function n(h,s,p,d,k,o){return a(),e("div",{"data-pagefind-body":!0},s[0]||(s[0]=[t(`<h1 id="ncalc-操作符" tabindex="-1">NCalc 操作符 <a class="header-anchor" href="#ncalc-操作符" aria-label="Permalink to &quot;NCalc 操作符&quot;">​</a></h1><blockquote><p>翻译自 <a href="https://ncalc.github.io/ncalc/articles/operators.html" target="_blank" rel="noreferrer">NCalc docs - Operators</a></p></blockquote><p>表达式能够通过操作符组合起来，操作符具有不同的运算优先级。下面是降序排列的优先级列表</p><ol><li>基本运算符</li><li>一元运算符</li><li>幂运算符</li><li>乘除运算符</li><li>加减运算符</li><li>关系运算符</li><li>位运算符</li><li>逻辑运算符</li></ol><blockquote><p>译者：原文此处漏了<code>7. 位运算符</code></p></blockquote><p>这些运算符遵循优先级规则，确定表达式中操作执行的顺序。</p><h2 id="逻辑运算符" tabindex="-1">逻辑运算符 <a class="header-anchor" href="#逻辑运算符" aria-label="Permalink to &quot;逻辑运算符&quot;">​</a></h2><p>逻辑运算符对表达式进行逻辑对比。</p><ul><li><code>or</code>,<code>||</code></li><li><code>and</code>,<code>&amp;&amp;</code></li></ul><p>例子：</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">true </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">or</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> false </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> false</span></span></code></pre></div><p><code>and</code>运算符具有比<code>or</code>更高的优先级，所以在上面的例子中，<code>false and true</code>先被计算。</p><h2 id="关系运算符" tabindex="-1">关系运算符 <a class="header-anchor" href="#关系运算符" aria-label="Permalink to &quot;关系运算符&quot;">​</a></h2><p>关系运算符对比两个值并返回一个布尔值。<br><code>in</code>和<code>not in</code>操作符右边的值必须是 <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noreferrer">string</a> 或 <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noreferrer">IEnumerable</a>。</p><ul><li><code>=</code>,<code>==</code>,<code>!=</code>,<code>&lt;&gt;</code></li><li><code>&lt;</code>,<code>&lt;=</code>,<code>&gt;</code>,<code>&gt;=</code></li><li><code>in</code>,<code>not in</code></li></ul><p>例子：</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">42</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Insert&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Insert&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Update&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Sergio&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Sergio is at Argentina&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Mozart&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Chopin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Beethoven&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, GetComposer())</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">945</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 202</span></span></code></pre></div><h2 id="加减运算符" tabindex="-1">加减运算符 <a class="header-anchor" href="#加减运算符" aria-label="Permalink to &quot;加减运算符&quot;">​</a></h2><p>加法运算符进行加、减计算。</p><ul><li><code>+</code>,<code>-</code></li></ul><p>例子：</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span></code></pre></div><h2 id="乘除运算符" tabindex="-1">乘除运算符 <a class="header-anchor" href="#乘除运算符" aria-label="Permalink to &quot;乘除运算符&quot;">​</a></h2><p>乘法运算符进行乘、除、取模计算。</p><ul><li><code>*</code>,<code>/</code>,<code>%</code></li></ul><p>例子：</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> % </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span></code></pre></div><h2 id="位运算" tabindex="-1">位运算 <a class="header-anchor" href="#位运算" aria-label="Permalink to &quot;位运算&quot;">​</a></h2><p>位运算符对整数进行位计算操作。</p><ul><li><code>&amp;</code>(二进制与), <code>|</code>(二进制或), <code>^</code>(二进制异或), <code>&lt;&lt;</code>(左移), <code>&gt;&gt;</code>(右移)</li></ul><p>例子：</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span></code></pre></div><h2 id="一元运算符" tabindex="-1">一元运算符 <a class="header-anchor" href="#一元运算符" aria-label="Permalink to &quot;一元运算符&quot;">​</a></h2><p>一元运算符用来对单个数进行操作。</p><ul><li><code>!</code>,<code>not</code>,<code>-</code>,<code>~</code>(按位取反)</li></ul><p>例子：</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">not</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> true</span></span></code></pre></div><h2 id="幂运算符" tabindex="-1">幂运算符 <a class="header-anchor" href="#幂运算符" aria-label="Permalink to &quot;幂运算符&quot;">​</a></h2><p>幂运算符用来进行幂计算。</p><ul><li><code>**</code></li></ul><p>例子：</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> **</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span></code></pre></div><h2 id="基本运算符" tabindex="-1">基本运算符 <a class="header-anchor" href="#基本运算符" aria-label="Permalink to &quot;基本运算符&quot;">​</a></h2><p>基本运算符包含组合、列表、直接数值，查看 <a href="./values.html">NCalc 数值</a> 来获取更多信息。</p><ul><li><code>(</code>,<code>)</code></li><li>数值</li></ul><p>例子：</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">drop_database()</span></span></code></pre></div>`,47)]))}const g=i(l,[["render",n]]);export{c as __pageData,g as default};