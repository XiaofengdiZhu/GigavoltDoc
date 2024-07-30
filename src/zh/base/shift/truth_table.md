# 真值表 <Badge text="v1.0" type="info"/>

<img src="/images/base/shift/GVTruthTable.webp" alt="GV真值表 图示" class="center_image small"/>

包含表征逻辑事件输入和输出之间全部可能状态表格的元件，除了能像经典版一样根据指定的输入输出电压，还能编写表达式进行计算；该元件的端口定义与原版相同，不再复述

## 计算表达式例子

此套规则的计算表达式基于 [NCalc2](https://github.com/sklose/NCalc2)，写法类似于 [Excel公式](https://support.microsoft.com/zh-cn/office/excel-%E4%B8%AD%E7%9A%84%E5%85%AC%E5%BC%8F%E6%A6%82%E8%BF%B0-ecfdc708-9162-49e8-b993-c311f47ca173)，请先看具体例子：

* 表达式`1;2;3;4:5`

<table :class="$style.mono_table_body">
    <thead>
        <tr>
            <th>端口</th>
            <th>上端</th>
            <th>右端</th>
            <th>下端</th>
            <th>左端</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>当前输入</td>
            <td>= 1</td>
            <td>= 2</td>
            <td>= 3</td>
            <td>= 4</td>
        </tr>
        <tr>
            <td>输出</td>
            <td colspan="4">5</td>
        </tr>
    </tbody>
</table>

* 表达式`>0x1;<=0xA;i3>1&&i3<99:0xABC`

<table :class="$style.mono_table_body">
    <thead>
        <tr>
            <th>端口</th>
            <th>上端</th>
            <th>右端</th>
            <th>下端</th>
            <th>左端</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>当前输入</td>
            <td>> 0x1</td>
            <td>≤ 0xA</td>
            <td>> 1 且 < 99</td>
            <td>无要求</td>
        </tr>
        <tr>
            <td>输出</td>
            <td colspan="4">0xABC</td>
        </tr>
    </tbody>
</table>

* 表达式`0;0;0;0;;i2;true;>i1:10`

<table :class="$style.mono_table_body">
    <thead>
        <tr>
            <th>端口</th>
            <th>上端</th>
            <th>右端</th>
            <th>下端</th>
            <th>左端</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>上 1 轮输入</td>
            <td>= 0</td>
            <td>= 0</td>
            <td>= 0</td>
            <td>= 0</td>
        </tr>
        <tr>
            <td>当前输入</td>
            <td>= 右端输入</td>
            <td>任意值</td>
            <td>> 上端输入</td>
            <td>任意值</td>
        </tr>
        <tr>
            <td>输出</td>
            <td colspan="4">10</td>
        </tr>
    </tbody>
</table>

* 表达式`0;;1;;2;;3:4::5:6::7:8`

<table :class="$style.mono_table_body">
    <thead>
        <tr>
            <th>规则组</th>
            <th>端口</th>
            <th>上端</th>
            <th>右端</th>
            <th>下端</th>
            <th>左端</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="5">1</td>
            <td :class="$style.no_mono">上 3 轮输入</td>
            <td>= 0</td>
            <td>任意值</td>
            <td>任意值</td>
            <td>任意值</td>
        </tr>
        <tr>
            <td>上 2 轮输入</td>
            <td>= 1</td>
            <td>任意值</td>
            <td>任意值</td>
            <td>任意值</td>
        </tr>
        <tr>
            <td>上 1 轮输入</td>
            <td>= 2</td>
            <td>任意值</td>
            <td>任意值</td>
            <td>任意值</td>
        </tr>
        <tr>
            <td>当前输入</td>
            <td>= 3</td>
            <td>任意值</td>
            <td>任意值</td>
            <td>任意值</td>
        </tr>
        <tr>
            <td>输出</td>
            <td colspan="4">10</td>
        </tr>
        <tr>
            <td rowspan="2">2</td>
            <td :class="$style.no_mono">当前输入</td>
            <td>= 5</td>
            <td>任意值</td>
            <td>任意值</td>
            <td>任意值</td>
        </tr>
        <tr>
            <td>输出</td>
            <td colspan="4">6</td>
        </tr>
        <tr>
            <td rowspan="2">3</td>
            <td :class="$style.no_mono">当前输入</td>
            <td>= 6</td>
            <td>任意值</td>
            <td>任意值</td>
            <td>任意值</td>
        </tr>
        <tr>
            <td>输出</td>
            <td colspan="4">7</td>
        </tr>
    </tbody>
</table>

* 表达式`true;true;Min(i1,i2),Max(i1,i2):i1+i2`输入1、2为任意值，输入3是输入1、输入2中的较小值，输入4是输入1、输入2中的较大值，则输出输入1+输入2

<table :class="$style.mono_table_body">
    <thead>
        <tr>
            <th>端口</th>
            <th>上端</th>
            <th>右端</th>
            <th>下端</th>
            <th>左端</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>当前输入</td>
            <td>任意值</td>
            <td>任意值</td>
            <td>= 上端输入 和 右端输入 中更小的</td>
            <td>= 上端输入 和 右端输入 中更大的</td>
        </tr>
        <tr>
            <td>输出</td>
            <td colspan="4">上端输入 + 右端输入</td>
        </tr>
    </tbody>
</table>

## 具体规则

通过以上例子，你可能已经对十亿伏特真值表表达式有了初步的认识，下面是具体规则

* 4 个输入规则之间用英文分号`;`分隔，顺序为`上端`&#8203;`右端`&#8203;`下端`&#8203;`左端`，之后为表述方便，其输入分别称作为`输入 1`&#8203;`输入 2`&#8203;`输入 3`&#8203;`输入 4`，而其值在表达式中分别写作`i1`&#8203;`i2`&#8203;`i3`&#8203;`i4`
* 如果输入 1、2 需要设定规则，输入 3、4 可以为任意值，则输入 3、4的规则可以省略不写，但也不能加上多余的`;`
* 如果要给输入 1、3设定规则，而输入 2 可以为任意值，需要给输入 2 设定规则`true`
* 如果输入规则的开头是`=`&#8203;`!=`&#8203;`>`&#8203;`<`这四种运算符之一，真值表会根据这是第几个输入，自动在开头加上`i1`&#8203;`i2`&#8203;`i3`&#8203;`i4`，当然你也可以自己加上
* 如果输入规则不是`true`，且不包含`=`&#8203;`!`&#8203;`not`&#8203;`>`&#8203;`<`&#8203;`and`&#8203;`&&`&#8203;`||`&#8203;`or`中的任意一个运算符，此Mod会自动在开头加上`i1=`&#8203;`i2=`&#8203;`i3=`&#8203;`i4=`
* 使用两个英文分号`;;`来分隔时序，越左边时序越早，最右边的时序是现在的输入，最多取得15次轮之前的输入
* 每次输入发生变化时，轮次加 1
* 只有输入规则的计算结果是`true`时，才会计算下一个输入规则，然后计算下一组时序，直到所有规则计算结果均为`true`，才会输出此组规则设定的输出
* 使用英文冒号`:`来分隔输入规则和输出规则，输出规则的计算结果必须为自然数（>=0的整数）
* 使用两个英文冒号`::`来分隔多组输入输出规则，当第一组规则不输出时，则计算下一组规则，直到有输出为止，不再计算下一组规则，最多 2^32^-1 组规则
* 过程中出现任何错误均会直接停止计算并输出 0 V，错误详见游戏日志
* 数字默认为十进制，如要使用十六进制数字，请在十六进制数字前加上`0x`，二进制则在其前面加上`0b`，非十进制时不支持小数点

> [!WARNING] ⚠ 注意
> 规则对大小写敏感！

## 关于 NCalc

如果想了解更多有关 NCalc 的信息，可阅读：

* [NCalc 运算符](ncalc/operators) `= > < + - * /`等
* [NCalc 函数](ncalc/functions) `if Max Sin`等  
  其中三角函数的输入应为弧度，本 mod 额外提供`Atan2 Cosh Sinh Tanh`，此类函数计算过程中会先将数字转换为双精度浮点数，再进行计算，而且过程中保留小数，输出时会自动去除小数部分  
  另外，`Round`使用两个参数会得出奇怪结果，本 mod 未能解决
* [NCalc 数值](ncalc/values) `9876 1.23e9 true false`等  
  额外提供`PI() E()`来获取圆周率π、自然常数e

<style module>

.mono_table_body th, .mono_table_body td{
    text-align: center;
}
.mono_table_body  tbody tr > td:not(:first-child){
    font-family: var(--vp-font-family-mono);
    &.no_mono{
        font-family: var(--vp-font-family-base);
    }
}
</style>