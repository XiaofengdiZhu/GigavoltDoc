import{_ as s,o as a,c as e,a3 as t}from"./chunks/framework.C-GLQy3h.js";const c=JSON.parse('{"title":"NCalc Operators","description":"","frontmatter":{},"headers":[],"relativePath":"en/base/shift/ncalc/operators.md","filePath":"en/base/shift/ncalc/operators.md"}'),l={name:"en/base/shift/ncalc/operators.md"};function n(p,i,o,h,r,d){return a(),e("div",{"data-pagefind-body":!0},i[0]||(i[0]=[t(`<h1 id="ncalc-operators" tabindex="-1">NCalc Operators <a class="header-anchor" href="#ncalc-operators" aria-label="Permalink to &quot;NCalc Operators&quot;">​</a></h1><blockquote><p>From <a href="https://ncalc.github.io/ncalc/articles/operators.html" target="_blank" rel="noreferrer">NCalc docs - Operators</a></p></blockquote><p>Expressions can be combined using operators, each of which has a precedence priority. Below is the list of expression priorities in descending order:</p><ol><li>Primary</li><li>Unary</li><li>Power</li><li>Multiplicative</li><li>Additive</li><li>Relational</li><li>Bitwise</li><li>Logical</li></ol><blockquote><p>Doc editor: The original omits <code>7. Bitwise</code>.</p></blockquote><p>These operators follow the precedence rules to determine the order in which operations are performed in an expression.</p><h2 id="logical" tabindex="-1">Logical <a class="header-anchor" href="#logical" aria-label="Permalink to &quot;Logical&quot;">​</a></h2><p>Logical operators perform logical comparisons between expressions.</p><ul><li><code>or</code>,<code>||</code></li><li><code>and</code>,<code>&amp;&amp;</code></li></ul><p>Examples:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">true </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">or</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> false </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> false</span></span></code></pre></div><p>The<code>and</code>operator has higher priority than the<code>or</code>operator, thus in the example above,<code>false and true</code>is evaluated first.</p><h2 id="relational" tabindex="-1">Relational <a class="header-anchor" href="#relational" aria-label="Permalink to &quot;Relational&quot;">​</a></h2><p>Relational operators compare two values and return a boolean result.<br> The<code>in</code>and<code>not in</code>operators right value must be a <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noreferrer">string</a> or <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noreferrer">IEnumerable</a>.</p><ul><li><code>=</code>,<code>==</code>,<code>!=</code>,<code>&lt;&gt;</code></li><li><code>&lt;</code>,<code>&lt;=</code>,<code>&gt;</code>,<code>&gt;=</code></li><li><code>in</code>,<code>not in</code></li></ul><p>Examples:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">42</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Insert&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Insert&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Update&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Sergio&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Sergio is at Argentina&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Mozart&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Chopin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Beethoven&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, GetComposer())</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">945</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 202</span></span></code></pre></div><h2 id="additive" tabindex="-1">Additive <a class="header-anchor" href="#additive" aria-label="Permalink to &quot;Additive&quot;">​</a></h2><p>Additive operators perform addition and subtraction.</p><ul><li><code>+</code>,<code>-</code></li></ul><p>Examples:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span></code></pre></div><h2 id="multiplicative" tabindex="-1">Multiplicative <a class="header-anchor" href="#multiplicative" aria-label="Permalink to &quot;Multiplicative&quot;">​</a></h2><p>Multiplicative operators perform multiplication, division, and modulus operations.</p><ul><li><code>*</code>,<code>/</code>,<code>%</code></li></ul><p>Examples:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> % </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span></code></pre></div><h2 id="bitwise" tabindex="-1">Bitwise <a class="header-anchor" href="#bitwise" aria-label="Permalink to &quot;Bitwise&quot;">​</a></h2><p>Bitwise operators perform bitwise operations on integers.</p><ul><li><code>&amp;</code>(bitwise and), <code>|</code>(bitwise or), <code>^</code>(bitwise xor), <code>&lt;&lt;</code>(left shift), <code>&gt;&gt;</code>(right shift)</li></ul><p>Examples:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span></code></pre></div><h2 id="unary" tabindex="-1">Unary <a class="header-anchor" href="#unary" aria-label="Permalink to &quot;Unary&quot;">​</a></h2><p>Unary operators operate on a single operand.</p><ul><li><code>!</code>,<code>not</code>,<code>-</code>,<code>~</code>(bitwise not)</li></ul><p>Examples:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">not</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> true</span></span></code></pre></div><h2 id="exponential" tabindex="-1">Exponential <a class="header-anchor" href="#exponential" aria-label="Permalink to &quot;Exponential&quot;">​</a></h2><p>Exponential operators perform exponentiation.</p><ul><li><code>**</code></li></ul><p>Examples:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> **</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span></code></pre></div><h2 id="primary" tabindex="-1">Primary <a class="header-anchor" href="#primary" aria-label="Permalink to &quot;Primary&quot;">​</a></h2><p>Primary operators include grouping of expressions, lists and direct values. Check <a href="./values.html">Ncalc Values</a> for more info.</p><ul><li><code>(</code>,<code>)</code></li><li>values</li></ul><p>Examples:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">drop_database()</span></span></code></pre></div>`,47)]))}const g=s(l,[["render",n]]);export{c as __pageData,g as default};