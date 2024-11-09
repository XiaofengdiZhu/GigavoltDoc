import{_ as e,o as t,c as s,a3 as n}from"./chunks/framework.C-GLQy3h.js";const u=JSON.parse('{"title":"Ncalc 数值","description":"","frontmatter":{},"headers":[],"relativePath":"zh/base/shift/ncalc/values.md","filePath":"zh/base/shift/ncalc/values.md"}'),i={name:"zh/base/shift/ncalc/values.md"};function o(l,a,r,p,c,d){return t(),s("div",{"data-pagefind-body":!0},a[0]||(a[0]=[n(`<h1 id="ncalc-数值" tabindex="-1">Ncalc 数值 <a class="header-anchor" href="#ncalc-数值" aria-label="Permalink to &quot;Ncalc 数值&quot;">​</a></h1><blockquote><p>节选、翻译自 <a href="https://ncalc.github.io/ncalc/articles/values.html" target="_blank" rel="noreferrer">NCalc docs - Values</a></p></blockquote><p>数值是表示具体元素的终端标记，可以是：</p><ul><li><a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noreferrer">int</a></li><li>浮点数，例如 <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noreferrer">double</a></li><li><a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noreferrer">DateTime</a> 或 <a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noreferrer">TimeSpan</a></li><li><a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noreferrer">bool</a></li><li><a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noreferrer">string</a></li><li><a href="https://ncalc.github.io/ncalc/api/NCalc.Domain.Function.html" target="_blank" rel="noreferrer">Function</a></li><li><a href="https://ncalc.github.io/ncalc/api/NCalc.Domain.Identifier.html" target="_blank" rel="noreferrer">Identifier</a>（参数）</li><li><a href="https://ncalc.github.io/ncalc/api/NCalc.Domain.LogicalExpressionList.html" target="_blank" rel="noreferrer">LogicalExpressionList</a>（其他表达式组成的列表）</li></ul><blockquote><p>译者：十亿伏特使用的 NCalc 版本看起来不支持 <a href="https://learn.microsoft.com/dotnet/api/system.char" target="_blank" rel="noreferrer">char</a></p></blockquote><h2 id="整数" tabindex="-1">整数 <a class="header-anchor" href="#整数" aria-label="Permalink to &quot;整数&quot;">​</a></h2><p>用数字表示整数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>123456</span></span></code></pre></div><p>它们将被解释为 <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noreferrer">int</a>， 如果一个值过大，它将被解释为 <a href="https://learn.microsoft.com/dotnet/api/system.int64" target="_blank" rel="noreferrer">long</a>。</p><h2 id="浮点数" tabindex="-1">浮点数 <a class="header-anchor" href="#浮点数" aria-label="Permalink to &quot;浮点数&quot;">​</a></h2><p>使用小数点来定义小数部分。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>123.456</span></span>
<span class="line"><span>.123</span></span></code></pre></div><p>它们将被解释为 <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noreferrer">double</a>。</p><h2 id="科学记数法" tabindex="-1">科学记数法 <a class="header-anchor" href="#科学记数法" aria-label="Permalink to &quot;科学记数法&quot;">​</a></h2><p>你可以使用<code>e</code>来定义以 10 为底的幂（10^）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1.22e1</span></span>
<span class="line"><span>1e2</span></span>
<span class="line"><span>1e+2</span></span>
<span class="line"><span>1e+2</span></span>
<span class="line"><span>1e-2</span></span>
<span class="line"><span>.1e-2</span></span>
<span class="line"><span>1e10</span></span></code></pre></div><p>它们将被解释为 <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noreferrer">double</a>。</p><h2 id="datetime" tabindex="-1">DateTime <a class="header-anchor" href="#datetime" aria-label="Permalink to &quot;DateTime&quot;">​</a></h2><p>必须封闭在两个英文井号<code>#</code>之间。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#2008/01/31# // for en-US culture</span></span>
<span class="line"><span>#08/08/2001 09:30:00#</span></span></code></pre></div><p>NCalc 使用当前 <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noreferrer">CultureInfo</a> 来解释它们。</p><h2 id="timespan" tabindex="-1">TimeSpan <a class="header-anchor" href="#timespan" aria-label="Permalink to &quot;TimeSpan&quot;">​</a></h2><p>必须封闭在两个英文井号<code>#</code>之间。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#20:42:00#</span></span></code></pre></div><h2 id="布尔值" tabindex="-1">布尔值 <a class="header-anchor" href="#布尔值" aria-label="Permalink to &quot;布尔值&quot;">​</a></h2><p>布尔值可以是<code>true</code>或<code>false</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>true</span></span></code></pre></div><h2 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to &quot;字符串&quot;">​</a></h2><p>任何在单引号或双引号之间的字符将被解释为 <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noreferrer">string</a>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;hello&#39;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>greeting(&quot;Chers&quot;)</span></span></code></pre></div><p>你可以用反斜杠<code>\\</code>转义特殊字符，例如<code>\\\\</code>​<code>\\&#39;</code>​<code>\\n</code>​<code>\\r</code>​<code>\\t</code></p><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><p>函数由名称和括号组成，括号中可以包含任意值作为参数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  Abs(1)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>doSomething(1, &#39;dummy&#39;)</span></span></code></pre></div><p>详情请看 <a href="./functions.html">NCalc 函数</a> 。</p><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><p>参数是一个名称，并且可以包含在括号中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  2 + x, 2 + [x]</span></span></code></pre></div><blockquote><p>译者：十亿伏特真值表中，传入的参数仅有<code>i1</code>​<code>i2</code>​<code>i3</code>​<code>i4</code></p></blockquote><h2 id="列表" tabindex="-1">列表 <a class="header-anchor" href="#列表" aria-label="Permalink to &quot;列表&quot;">​</a></h2><p>列表是使用英文圆括号<code>(</code>和<code>)</code>括起来的表达式的集合，等价于 <a href="https://learn.microsoft.com/dotnet/standard/clr" target="_blank" rel="noreferrer">CLR</a> 中的 <code>List&lt;LogicalExpression&gt;</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(&#39;Chers&#39;, secretOperation(), 3.14)</span></span></code></pre></div>`,44)]))}const b=e(i,[["render",o]]);export{u as __pageData,b as default};
