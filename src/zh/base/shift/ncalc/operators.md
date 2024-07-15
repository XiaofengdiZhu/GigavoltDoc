# NCalc 操作符

> 翻译自 [NCalc docs - Operators](https://ncalc.github.io/ncalc/articles/operators.html)

表达式能够通过操作符组合起来，操作符具有不同的运算优先级。下面是降序排列的优先级列表

1. 基本运算符
2. 一元运算符
3. 幂运算符
4. 乘除运算符
5. 加减运算符
6. 关系运算符
7. 位运算符
8. 逻辑运算符

> 译者：原文此处漏了`7. 位运算符`

这些运算符遵循优先级规则，确定表达式中操作执行的顺序。

## 逻辑运算符

逻辑运算符对表达式进行逻辑对比。

* `or`, `||`
* `and`, `&&`

例子：

```sql
true or false and true
(1 == 1) || false
```

`and`运算符具有比`or`更高的优先级，所以在上面的例子中，`false and true`先被计算。

## 关系运算符

关系运算符对比两个值并返回一个布尔值。  
`in`和`not in`操作符右边的值必须是 [string](https://learn.microsoft.com/dotnet/api/system.string) 或 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable).

* `=`, `==`, `!=`, `<>`
* `<`, `<=`, `>`, `>=`
* `in`, `not in`

例子：

```sql
3 < 2 
42 == 42 
'Insert' in ('Insert', 'Update') 
"Sergio" in "Sergio is at Argentina" 
"Mozart" not in ("Chopin", "Beethoven", GetComposer())
945 != 202
```

## 加减运算符

加法运算符进行加、减计算

* `+`, `-`

例子：

```sql
1 + 2 - 3
```

## 乘除运算符

乘法运算符进行乘、除、取模计算

* `*`, `/`, `%`

例子：

```sql
1 * 2 % 3
```

## 位运算

位运算符对整数进行位计算操作。

* `&` (二进制与), `|` (二进制或), `^` (二进制异或), `<<` (左移), `>>` (右移)

例子：

```sql
2 >> 3
```

## 一元运算符

一元运算符用来对单个数进行操作。

* `!`, `not`, `-`, `~` (按位取反)

例子：

```sql
not true
```

## 幂运算符

幂运算符用来进行幂计算。

* `**`

例子：

```sql
2 ** 2
```

## 基本运算符

基本运算符包含组合、列表、直接数值，查看 [NCalc 数值](values) 来获取更多信息。

* `(`, `)`
* 数值

例子：

```sql
2 * (3 + 2)
("foo","bar", 5)
drop_database()
```