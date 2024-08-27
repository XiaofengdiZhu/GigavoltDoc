# Ncalc 数值

> 节选、翻译自 [NCalc docs - Values](https://ncalc.github.io/ncalc/articles/values.html)

数值是表示具体元素的终端标记，可以是：

- [int](https://learn.microsoft.com/dotnet/api/system.int32)
- 浮点数，例如 [double](https://learn.microsoft.com/dotnet/api/system.double)
- [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime) 或 [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)
- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
- [string](https://learn.microsoft.com/dotnet/api/system.string)
- [Function](https://ncalc.github.io/ncalc/api/NCalc.Domain.Function.html)
- [Identifier](https://ncalc.github.io/ncalc/api/NCalc.Domain.Identifier.html)（参数）
- [LogicalExpressionList](https://ncalc.github.io/ncalc/api/NCalc.Domain.LogicalExpressionList.html)（其他表达式组成的列表）

> 译者：十亿伏特使用的 NCalc 版本看起来不支持 [char](https://learn.microsoft.com/dotnet/api/system.char)

## 整数

用数字表示整数。

```
123456
```

它们将被解释为 [int](https://learn.microsoft.com/dotnet/api/system.int32)， 如果一个值过大，它将被解释为 [long](https://learn.microsoft.com/dotnet/api/system.int64)。

## 浮点数

使用小数点来定义小数部分。

```
123.456
.123
```

它们将被解释为 [double](https://learn.microsoft.com/dotnet/api/system.double)。

## 科学记数法

你可以使用`e`来定义以 10 为底的幂（10\^）。

```
1.22e1
1e2
1e+2
1e+2
1e-2
.1e-2
1e10
```

它们将被解释为 [double](https://learn.microsoft.com/dotnet/api/system.double)。

## DateTime

必须封闭在两个英文井号`#`之间。

```
#2008/01/31# // for en-US culture
#08/08/2001 09:30:00# 
```

NCalc 使用当前 [CultureInfo](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo) 来解释它们。

## TimeSpan

必须封闭在两个英文井号`#`之间。

```
#20:42:00#
```

## 布尔值

布尔值可以是`true`或`false`。

```
true
```

## 字符串

任何在单引号或双引号之间的字符将被解释为 [string](https://learn.microsoft.com/dotnet/api/system.string)。

```
'hello'
```

```
greeting("Chers")
```

你可以用反斜杠`\`转义特殊字符，例如`\\`&#8203;`\'`&#8203;`\n`&#8203;`\r`&#8203;`\t`

## 函数

函数由名称和括号组成，括号中可以包含任意值作为参数。

```
  Abs(1)
```

```
doSomething(1, 'dummy')
```

详情请看 [NCalc 函数](functions) 。

## 参数

参数是一个名称，并且可以包含在括号中。

```
  2 + x, 2 + [x]
```

> 译者：十亿伏特真值表中，传入的参数仅有`i1`&#8203;`i2`&#8203;`i3`&#8203;`i4`

## 列表

列表是使用英文圆括号`(`和`)`括起来的表达式的集合，等价于 [CLR](https://learn.microsoft.com/dotnet/standard/clr) 中的 `List<LogicalExpression>`。

```
('Chers', secretOperation(), 3.14)
```