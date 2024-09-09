---
prev: false
next: false
---

# Before Start

Welcome to use Gigavolt mod, this document assumes you are familiar with the vanilla Survivalcraft electric rules, and proficient in most elements. If you have not mastered the vanilla elements, please learn it before using this mod.

If you have mastered the vanilla electric elements, please read these contents first, and then you can freely read this document.

## Differences between Gigavolt and Gigavolt.Expand

* `Gigavolt mod`only provides a wider bit width of vanilla elements, and their shifts, and few useful new base elements with restraint. For those who only want a wider bit of width, you can use this mod independently.
  If other mod want to use the wider bit width of Gigavolt, you can add this mod as a dependency, without`Gigavolt.Expand mod`.
* `Gigavolt.Expand mod`, on the other hand, adheres to the spirit of the vanilla game's electrics while introducing a plethora of new elements to further expand gameplay possibilities. Most of these elements require a deep understanding of binary representation. This document includes information about this mod.  
  `Gigavolt mod` is required as a dependency, and `Gigavolt.Expand mod` cannot be used independently.

Besides `Gigavolt.Expand mod`, there are several mods that depend on `Gigavolt mod`, you can check them out at [Dependents](about#Dependents)

## Supported API Versions

Currently, there is no stable Survivalcraft API version supporting the latest version for this mod. You will need to build it by yourself from [SurvivalCraft-UniAPI source code](https://gitee.com/THPRC/survivalcraft-api), or download the builds by others.

Version 1.0 of this mod can run on API 1.53. You can download it from [here](https://gitee.com/THPRC/survivalcraft-api/releases/tag/api1.53P). In newer API versions, issues such as the inability to save memory data may occur.

## Significance of 32-bit Bitwidth

The main difference between Gigavolt and the vanilla electrics lies in the voltage bitwidth. The vanilla has 4 bits, providing 16 voltage levels (0 \~ 1.5V), whereas Gigavolt has 32 bits, providing 2^32^ levels (0 \~ 2^32^-1V).

### What is Bitwidth?

Imagine a road with 4 lanes that can accommodate 4 cars at a time. Now, consider a 32-lane road where 32 cars can pass at once.

Similarly, for electrics, the vanilla elements can transmit 4 switch states at a time, while Gigavolt can transmit 32 switch states at a time. Here, "switch states" can be understood as binary digits (0 or 1), also known as bits.

A standard electric board has 5 ports. The maximum bitwidth for the vanilla electric board is 5 * 4 = 20 bits, whereas for Gigavolt, it is 5 * 32 = 160 bits.

### Representing Positive Integers

* A 1-bit bitwidth can only represent 0 or 1.
* A 2-bit bitwidth can represent 0, 1, 2, or 3, as shown in the table below:

|:---:|:--:|:--:|
| **Switch** | On <span class="mono">1</span> | Off <span class="mono">0</span> |
| On <span class="mono">1</span> | Binary <span class="mono">11</span><br/>Decimal <span class="mono">3</span> | Binary <span class="mono">10</span><br/>Decimal <span class="mono">2</span> |
| Off <span class="mono">0</span> | Binary <span class="mono">01</span><br/>Decimal <span class="mono">1</span> | Binary <span class="mono">00</span><br/>Decimal <span class="mono">0</span> |

* A 3-bit width can represent integers from 0 to 7, with each bit's contribution as follows:
    * If the 1st bit from the right is 1, then + 1 (2^0^), otherwise add 0 (similarly for the following bits).
    * If the 2nd bit is 1, then + 2 (2^1^).
    * If the 3rd bit is 1, then + 4 (2^2^).
* Continuing this pattern if the m-th bit is 1, then + 2^(m-1)^.
  An n-bit bitwidth can represent positive integers from 0 to 2^n^-1.

> [!TIP] 📝The nth bit, The Least Significant Bit (LSB), The Most Significant Bit (MSB)
> The nth bit in this document refers to the original binary number, counted from right to left starting from 1.  
> The Least Significant Bit (LSB) is the rightmost bit (1st bit), and the Most Significant Bit (MSB) is the leftmost bit.

> [!WARNING] 💡 Representation of Number Bases
> Unless otherwise specified, numbers in this document are represented in decimal (base 10).  
> If a number is prefixed with `0x`, it denotes that the number is in hexadecimal (base 16).

### Representing Negative Integers

We can make the highest(leftmost) bit not represent + 2^n-1^, but instead represent *(-1)*. Let us use 3 bits as an example.
<div :class="$style.negative_table">

|  Number Bases   | Value ||||||||
|:---------------:|:-----:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Original binary |  000  | 001 | 010 | 011 | 100 | 101 | 110 | 111 | 
|     Decimal     |   0   |  1  |  2  |  3  | -0  | -1  | -2  | -3  |

</div>

> The 3rd bit here represents the **sign bit** of this number.

> [!TIP] 📝 Note
> This is the sign-magnitude representation of negative numbers in binary, which is also the primary method used by Gigavolt for representing negative numbers. Besides, there are other representations like ones' complement and two's complement; you can learn about them on your own.

> [!WARNING] 💡 Tip
> Having trouble viewing the complete table? Try dragging it, or viewing in landscape mode.

### Representing Fraction

[Representing Positive Integers](#representing-positive-integers) mentioned
> if the m-th bit is 1, then + 2^(m-1)^.

Let us make a slight change to it by subtracting one more i after -1. Now let us test the effect. For example, the total number of bits as 4 and i as 2:

* If the m-th bit from the right is 1, then

$$+2^{m - 1 - i} = +{1 \over 2^{-m + 1 + 2}} = +{1 \over 2^{3 - m}} = +2^{m-3}$$

* Table：

| Original binary |                                          Decimal                                           |
|:---------------:|:------------------------------------------------------------------------------------------:|
|      0000       |                                             0                                              |
|      0001       |                         ${1 \over 2^{3 - 1}} = {1 \over 4} = 0.25$                         |
|      0010       |                         ${1 \over 2^{3 - 2}} = {2 \over 4} = 0.5$                          |
|      0011       | ${1 \over 2^{3 - 1}} + {1 \over 2^{3 - 2}} = {1 \over 4} + {2 \over 4} = {3 \over 4}=0.75$ |
|       ……        |                                             ……                                             |
|      1001       |         ${1 \over 2^{3 - 1}} + 2^{4 - 3} = {1 \over 4} + 2 = 2{1 \over 4} = 2.25$          |
|       ……        |                                             ……                                             |

It can be seen that we have implemented a binary fraction representation method where the decimal point is between the 2nd and 3rd bits.

> [!TIP] 📝 Note
> This is the fixed-point mode of fractions in binary representation, which is also the primary method used by Gigavolt for representing fractions. Besides, there is other representation called floating-point; you can learn about them on your own.

### Combined Representation

If it is only a 4-bit bitwidth, the number that can be represented is strictly limited. But when it comes to 32 bits, not only can various representation modes be used freely, but also multiple modes can be combined in one port. For example:

| The n-th bit | The 16th bit |      The 4th \~ 15th bits       |       /       |      The 1st - 3rd bits       |
|:------------:|:-------------|:------------------------------:|:-------------:|:-----------------------------:|
|   Function   | Sign bit     | Integer bits, 12 bits in total | Radix point | Fraction bits, 3 bits in total |

It can represent a number with a precision of
$${1 \over 2^{-1 + 1 + 3}} = {1 \over 8} = 0.125$$
and a range of
$$\pm((2^{12}-1)+(1 - {1 \over 2^3}))=\pm(4096 + 0.875)=\pm4096.875$$

### Summary

In Gigavolt, when using 31 bits as the index of the [Memory Bank](base/shift/memory_bank), it can store a total of 2,147,483,648 32-bit numbers, with a total capacity of 922,337,203,685,477,580,8 bits, which is 2,251,799,813,685,247 times that of the vanilla version. If all bits are filled, you would need 1152.9 PiB of RAM.

By combining multiple binary representation modes, the [Complex Piston](base/shift/complex_piston) of Gigavolt can control parameters such as extension length and push/pull count (up to 256 blocks) through voltage. When a lot of complex pistons are being used, it is no longer necessary to manually open the dialog box for adjusting parameters. The [Sign](base/shift/sign) can even receive 10 sets of parameters through 5 ports, achieving functions such as floating display text and rewrite strings from the specified memory bank...

In conclusion, the increase of bitwidth not only brings an improvement to data transmission efficiency but also brings new possibilities to electric functions. For specific differences, please refer to [Shifts of the Vanilla Version](base/shift/simple)
> [!TIP] 📝 Note
> The Gigavolt memory bank uses the [PNG](https://www.w3.org/TR/png/) format to store data. The internal index of PNG is a 32-bit `int`, and its sign bit is not used, resulting in the maximum index of the Gigavolt memory bank also being 31 bits.

## If I Don't Like...

If you do not like or cannot understand the shift type of Gigavolt, this mod provides a corresponding classic type for elements with significant modifications. They have exactly the same usage methods and effects as the vanilla version.

For elements without a classic type, you only need to focus on its lowest 4 bits to achieve the same effect as the vanilla version.

One step further, this mod also provides [Transformers](base/new/elements#transformers), which can convert Gigavolt voltage to the vanilla voltage, allowing you to operate the vanilla components, and vice versa.

<!--@include: ./parts/feedback.md-->

<style module>
.negative_table tr > td:not(:first-child){
    font-family: var(--vp-font-family-mono);
}
</style>