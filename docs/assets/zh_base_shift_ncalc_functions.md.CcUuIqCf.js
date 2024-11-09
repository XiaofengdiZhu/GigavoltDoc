import{_ as d,o,c as r,a3 as e}from"./chunks/framework.C-GLQy3h.js";const b=JSON.parse('{"title":"NCalc 函数","description":"","frontmatter":{},"headers":[],"relativePath":"zh/base/shift/ncalc/functions.md","filePath":"zh/base/shift/ncalc/functions.md"}'),a={name:"zh/base/shift/ncalc/functions.md"};function c(n,t,i,s,u,l){return o(),r("div",{"data-pagefind-body":!0},t[0]||(t[0]=[e('<h1 id="ncalc-函数" tabindex="-1">NCalc 函数 <a class="header-anchor" href="#ncalc-函数" aria-label="Permalink to &quot;NCalc 函数&quot;">​</a></h1><blockquote><p>节选、翻译自 <a href="https://ncalc.github.io/ncalc/articles/operators.html#built-in-functions" target="_blank" rel="noreferrer">NCalc docs - Operators</a></p></blockquote><p>该框架已内置一系列可用函数。</p><table tabindex="0"><thead><tr><th>名称</th><th>描述</th><th>使用方法</th><th>结果</th></tr></thead><tbody><tr><td>Abs</td><td>返回指定数字的绝对值。</td><td>Abs(-1)</td><td>1d</td></tr><tr><td>Acos</td><td>将指定数字进行反余弦计算，返回结果。</td><td>Acos(1)</td><td>0d</td></tr><tr><td>Asin</td><td>将指定数字进行反正弦计算，返回结果。</td><td>Asin(0)</td><td>0d</td></tr><tr><td>Atan</td><td>将指定数字进行反正切计算，返回结果。</td><td>Atan(0)</td><td>0d</td></tr><tr><td>Ceiling</td><td>返回比指定数字大或相等的最小整数。</td><td>Ceiling(1.5)</td><td>2d</td></tr><tr><td>Cos</td><td>返回指定角的余弦值。</td><td>Cos(0)</td><td>1d</td></tr><tr><td>Exp</td><td>返回自然常数e的指定次幂。</td><td>Exp(0)</td><td>1d</td></tr><tr><td>Floor</td><td>返回比指定数字小或相等的最大整数。</td><td>Floor(1.5)</td><td>1d</td></tr><tr><td>IEEERemainder</td><td>返回一指定数字被另一指定数字相除的余数。</td><td>IEEERemainder(3, 2)</td><td>-1d</td></tr><tr><td>Ln</td><td>返回指定数的自然对数。</td><td>Ln(1)</td><td>0d</td></tr><tr><td>Log</td><td>返回指定数以另一个指定数为底的对数。</td><td>Log(1, 10)</td><td>0d</td></tr><tr><td>Log10</td><td>返回指定数的以10为底的对数。</td><td>Log10(1)</td><td>0d</td></tr><tr><td>Max</td><td>返回两个指定数中较大的数。</td><td>Max(1, 2)</td><td>2</td></tr><tr><td>Min</td><td>返回两个指定数中较小的数。</td><td>Min(1, 2)</td><td>1</td></tr><tr><td>Pow</td><td>返回一个指定的数的指定次幂。</td><td>Pow(3, 2)</td><td>9d</td></tr><tr><td>Round</td><td>将一个值四舍五入到最接近的整数或指定的小数位数。可以通过在构造表达式对象时使用<code>ExpressionOptions.RoundAwayFromZero</code>来改变中间数的行为。</td><td>Round(3.222, 2)</td><td>3.22d</td></tr><tr><td>Sign</td><td>返回一个整数，该整数指示指定的数的符号：如果该数大于零，则返回1；如果该数小于零，则返回-1；如果该数为零，则返回0。</td><td>Sign(-10)</td><td>-1</td></tr><tr><td>Sin</td><td>返回指定角的正弦值。</td><td>Sin(0)</td><td>0d</td></tr><tr><td>Sqrt</td><td>返回指定数的平方根。</td><td>Sqrt(4)</td><td>2d</td></tr><tr><td>Tan</td><td>返回指定角的正切值。</td><td>Tan(0)</td><td>0d</td></tr><tr><td>Truncate</td><td>返回指定数的整数部分。</td><td>Truncate(1.7)</td><td>1</td></tr></tbody></table><blockquote><p>译者：<br> 三角函数相关的计算单位为弧度<br> 结果中，数字后面的<code>d</code>是指该数字是双精度浮点数<br> 其中<code>Round</code>使用两个参数会得出奇怪结果未能解决</p></blockquote><p>它还内置一些一般用途函数。</p><table tabindex="0"><thead><tr><th>名称</th><th>描述</th><th>使用方法</th><th>结果</th></tr></thead><tbody><tr><td>in</td><td>返回一个元素是否存在于一个集合中。</td><td>in(1 + 1, 1, 2, 3)</td><td>true</td></tr><tr><td>if</td><td>基于条件返回其中一个值。</td><td>if(3 % 2 = 1, &#39;value is true&#39;, &#39;value is false&#39;)</td><td>&#39;value is true&#39;</td></tr><tr><td>ifs</td><td>基于多个条件返回其中一个值，如果所有条件都不满足则返回默认值。</td><td>ifs(foo &gt; 50, &quot;bar&quot;, foo &gt; 75, &quot;baz&quot;, &quot;quux&quot;)</td><td>如果<code>foo</code>在 50 和 75之间，则返回<code>&quot;bar&quot;</code>，如果<code>foo</code>大于 75，则返回<code>&quot;baz&quot;</code>，其他情况返回<code>&quot;quux&quot;</code></td></tr></tbody></table><p>你能使用逗号<code>,</code>或者分号<code>;</code>作为参数分隔符。</p><blockquote><p>译者：在十亿伏特真值表，必须使用英文逗号<code>,</code>作为参数分隔符</p></blockquote>',9)]))}const p=d(a,[["render",c]]);export{b as __pageData,p as default};
