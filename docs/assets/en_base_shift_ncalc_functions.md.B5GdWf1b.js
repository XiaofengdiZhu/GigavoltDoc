import{_ as e,o as d,c as r,a3 as n}from"./chunks/framework.C-GLQy3h.js";const f=JSON.parse('{"title":"NCalc Functions","description":"","frontmatter":{},"headers":[],"relativePath":"en/base/shift/ncalc/functions.md","filePath":"en/base/shift/ncalc/functions.md"}'),o={name:"en/base/shift/ncalc/functions.md"};function a(i,t,s,u,c,l){return d(),r("div",{"data-pagefind-body":!0},t[0]||(t[0]=[n('<h1 id="ncalc-functions" tabindex="-1">NCalc Functions <a class="header-anchor" href="#ncalc-functions" aria-label="Permalink to &quot;NCalc Functions&quot;">​</a></h1><blockquote><p>Excerpts from <a href="https://ncalc.github.io/ncalc/articles/operators.html#built-in-functions" target="_blank" rel="noreferrer">NCalc docs - Operators</a></p></blockquote><p>The framework includes a set of already implemented functions.</p><table tabindex="0"><thead><tr><th>Name</th><th>Description</th><th>Usage</th><th>Result</th></tr></thead><tbody><tr><td>Abs</td><td>Returns the absolute value of a specified number.</td><td>Abs(-1)</td><td>1d</td></tr><tr><td>Acos</td><td>Returns the angle whose cosine is the specified number.</td><td>Acos(1)</td><td>0d</td></tr><tr><td>Asin</td><td>Returns the angle whose sine is the specified number.</td><td>Asin(0)</td><td>0d</td></tr><tr><td>Atan</td><td>Returns the angle whose tangent is the specified number.</td><td>Atan(0)</td><td>0d</td></tr><tr><td>Ceiling</td><td>Returns the smallest integer greater than or equal to the specified number.</td><td>Ceiling(1.5)</td><td>2d</td></tr><tr><td>Cos</td><td>Returns the cosine of the specified angle.</td><td>Cos(0)</td><td>1d</td></tr><tr><td>Exp</td><td>Returns e raised to the specified power.</td><td>Exp(0)</td><td>1d</td></tr><tr><td>Floor</td><td>Returns the largest integer less than or equal to the specified number.</td><td>Floor(1.5)</td><td>1d</td></tr><tr><td>IEEERemainder</td><td>Returns the remainder resulting from the division of a specified number by another specified number.</td><td>IEEERemainder(3, 2)</td><td>-1d</td></tr><tr><td>Ln</td><td>Returns the natural logarithm of a specified number.</td><td>Ln(1)</td><td>0d</td></tr><tr><td>Log</td><td>Returns the logarithm of a specified number.</td><td>Log(1, 10)</td><td>0d</td></tr><tr><td>Log10</td><td>Returns the base 10 logarithm of a specified number.</td><td>Log10(1)</td><td>0d</td></tr><tr><td>Max</td><td>Returns the larger of two specified numbers.</td><td>Max(1, 2)</td><td>2</td></tr><tr><td>Min</td><td>Returns the smaller of two numbers.</td><td>Min(1, 2)</td><td>1</td></tr><tr><td>Pow</td><td>Returns a specified number raised to the specified power.</td><td>Pow(3, 2)</td><td>9d</td></tr><tr><td>Round</td><td>Rounds a value to the nearest integer or specified number of decimal places. The mid number behaviour can be changed by using <code>ExpressionOptions.RoundAwayFromZero</code> during construction of the Expression object.</td><td>Round(3.222, 2)</td><td>3.22d</td></tr><tr><td>Sign</td><td>Returns a value indicating the sign of a number.</td><td>Sign(-10)</td><td>-1</td></tr><tr><td>Sin</td><td>Returns the sine of the specified angle.</td><td>Sin(0)</td><td>0d</td></tr><tr><td>Sqrt</td><td>Returns the square root of a specified number.</td><td>Sqrt(4)</td><td>2d</td></tr><tr><td>Tan</td><td>Returns the tangent of the specified angle.</td><td>Tan(0)</td><td>0d</td></tr><tr><td>Truncate</td><td>Calculates the integral part of a number.</td><td>Truncate(1.7)</td><td>1</td></tr></tbody></table><blockquote><p>Doc editor:<br> The unit of measurement related to trigonometric functions is radian.<br> The<code>d</code>after numbers in the result is to indicate that the number is a double-precision floating point number.<br> The<code>Rount</code>function with two parameters will give strange results, and it&#39;s not solved.</p></blockquote><p>It also includes other general purpose ones.</p><table tabindex="0"><thead><tr><th>Name</th><th>Description</th><th>Usage</th><th>Result</th></tr></thead><tbody><tr><td>in</td><td>Returns whether an element is in a set of values.</td><td>in(1 + 1, 1, 2, 3)</td><td>true</td></tr><tr><td>if</td><td>Returns a value based on a condition.</td><td>if(3 % 2 = 1, &#39;value is true&#39;, &#39;value is false&#39;)</td><td>&#39;value is true&#39;</td></tr><tr><td>ifs</td><td>Returns a value based on evaluating a number of conditions, returning a default if none are true.</td><td>ifs(foo &gt; 50, &quot;bar&quot;, foo &gt; 75, &quot;baz&quot;, &quot;quux&quot;)</td><td>if foo is between 50 and 75 &quot;bar&quot;, foo greater than 75 &quot;baz&quot;, otherwise &quot;quux&quot;</td></tr></tbody></table><p>You can use comma<code>,</code>or semicolon<code>;</code>as argument separator.</p><blockquote><p>Doc editor: You must use<code>,</code>as argument separator in the Gigavolt Truth Table.</p></blockquote>',9)]))}const b=e(o,[["render",a]]);export{f as __pageData,b as default};