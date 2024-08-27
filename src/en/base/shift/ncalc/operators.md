# NCalc Operators

> From [NCalc docs - Operators](https://ncalc.github.io/ncalc/articles/operators.html)

Expressions can be combined using operators, each of which has a precedence priority. Below is the list of expression priorities in descending order:

1. Primary
2. Unary
3. Power
4. Multiplicative
5. Additive
6. Relational
7. Bitwise
8. Logical

> Doc editor: The original omits `7. Bitwise`.

These operators follow the precedence rules to determine the order in which operations are performed in an expression.

## Logical

Logical operators perform logical comparisons between expressions.

* `or`,`||`
* `and`,`&&`

Examples:

```sql
true or false and true
(1 == 1) || false
```

The`and`operator has higher priority than the`or`operator, thus in the example above,`false and true`is evaluated first.

## Relational

Relational operators compare two values and return a boolean result.  
The`in`and`not in`operators right value must be a [string](https://learn.microsoft.com/dotnet/api/system.string) or [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable).

* `=`,`==`,`!=`,`<>`
* `<`,`<=`,`>`,`>=`
* `in`,`not in`

Examples:

```sql
3 < 2 
42 == 42 
'Insert' in ('Insert', 'Update') 
"Sergio" in "Sergio is at Argentina" 
"Mozart" not in ("Chopin", "Beethoven", GetComposer())
945 != 202
```

## Additive

Additive operators perform addition and subtraction.

* `+`,`-`

Examples:

```sql
1 + 2 - 3
```

## Multiplicative

Multiplicative operators perform multiplication, division, and modulus operations.

* `*`,`/`,`%`

Examples:

```sql
1 * 2 % 3
```

## Bitwise

Bitwise operators perform bitwise operations on integers.

* `&`(bitwise and), `|`(bitwise or), `^`(bitwise xor), `<<`(left shift), `>>`(right shift)

Examples:

```sql
2 >> 3
```

## Unary

Unary operators operate on a single operand.

* `!`,`not`,`-`,`~`(bitwise not)

Examples:

```sql
not true
```

## Exponential

Exponential operators perform exponentiation.

* `**`

Examples:

```sql
2 ** 2
```

## Primary

Primary operators include grouping of expressions, lists and direct values. Check [Ncalc Values](values) for more info.

* `(`,`)`
* values

Examples:

```sql
2 * (3 + 2)
("foo","bar", 5)
drop_database()
```