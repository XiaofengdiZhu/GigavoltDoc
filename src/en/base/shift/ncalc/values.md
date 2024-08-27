# Ncalc Values

> Excerpts from [NCalc docs - Values](https://ncalc.github.io/ncalc/articles/values.html)

A value is a terminal token representing a concrete element. This can be:

- [int](https://learn.microsoft.com/dotnet/api/system.int32)
- Any floating point number, like [double](https://learn.microsoft.com/dotnet/api/system.double)
- [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime) or [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)
- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
- [string](https://learn.microsoft.com/dotnet/api/system.string)
- [Function](https://ncalc.github.io/ncalc/api/NCalc.Domain.Function.html)
- [Identifier](https://ncalc.github.io/ncalc/api/NCalc.Domain.Identifier.html) (parameter)
- [LogicalExpressionList](https://ncalc.github.io/ncalc/api/NCalc.Domain.LogicalExpressionList.html) (List of other expressions)

> Doc editor: The version of NCalc that Gigavolt uses, seems doesn't support [char](https://learn.microsoft.com/dotnet/api/system.char).

## Integers

They are represented using numbers.

```
123456
```

They are evaluated as [int](https://learn.microsoft.com/dotnet/api/system.int32). If the value is too big, it will be evaluated as [long](https://learn.microsoft.com/dotnet/api/system.int64).

## Floating point numbers

Use the dot to define the decimal part.

```
123.456
.123
```

They are evaluated as [double](https://learn.microsoft.com/dotnet/api/system.double).

## Scientific notation

You can use the`e`to define power of ten (10\^).

```
1.22e1
1e2
1e+2
1e+2
1e-2
.1e-2
1e10
```

They are evaluated as [double](https://learn.microsoft.com/dotnet/api/system.double).

## DateTime

Must be enclosed between sharps (`#`).

```
#2008/01/31# // for en-US culture
#08/08/2001 09:30:00# 
```

NCalc uses the current [CultureInfo](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo) to evaluate them.

## TimeSpan

Must be enclosed between sharps (`#`).

```
#20:42:00#
```

## Booleans

Booleans can be either`true`or`false`.

```
true
```

## Strings

Any character between single or double quotes are evaluated as [string](https://learn.microsoft.com/dotnet/api/system.string)。

```
'hello'
```

```
greeting("Chers")
```

You can escape special characters using`\`, like`\\`&#8203;`\'`&#8203;`\n`&#8203;`\r`&#8203;`\t`

## Function

A function is made of a name followed by braces, containing optionally any value as arguments.

```
  Abs(1)
```

```
doSomething(1, 'dummy')
```

Please read the [NCalc 函数](functions) .

## Parameters

A parameter as a name, and can be optionally contained inside brackets or double quotes.

```
  2 + x, 2 + [x]
```

> Doc editor：There are only four parameters,`i1`&#8203;`i2`&#8203;`i3`&#8203;`i4`, in Gigavolt Truth Table.

## Lists

Lists are collections of expressions enclosed in parentheses (`(`and`)`). They are the equivalent of `List<LogicalExpression>` at [CLR](https://learn.microsoft.com/dotnet/standard/clr).

```
('Chers', secretOperation(), 3.14)
```