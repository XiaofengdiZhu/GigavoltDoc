# Truth Table <Badge text="v1.0" type="info"/>

<img src="/images/base/shift/GVTruthTable.webp" alt="The image of GV Truth Table" class="center_image small"/>

An element that can determine the output for all possible combination of the inputs. It can not only output the voltage according to the specified inputs, but can also calculate the expressions stored in it. Its port definition is the same as the vanilla version.

## Rules Examples

The expression of rules are based on [NCalc2](https://github.com/sklose/NCalc2), and the syntax is similar to [Excel formulas](https://support.microsoft.com/en-us/office/overview-of-formulas-in-excel-ecfdc708-9162-49e8-b993-c311f47ca173). Please read the following examples first:

* `1;2;3;4:5`

<table :class="$style.mono_table_body">
    <thead>
        <tr>
            <th>Direction</th>
            <th>Top</th>
            <th>Right</th>
            <th>Bottom</th>
            <th>Left</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Inputs Now</td>
            <td>= 1</td>
            <td>= 2</td>
            <td>= 3</td>
            <td>= 4</td>
        </tr>
        <tr>
            <td>Output</td>
            <td colspan="4">5</td>
        </tr>
    </tbody>
</table>

* `>0x1;<=0xA;i3>1&&i3<99:0xABC`

<table :class="$style.mono_table_body">
    <thead>
        <tr>
            <th>Direction</th>
            <th>Top</th>
            <th>Right</th>
            <th>Bottom</th>
            <th>Left</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Inputs Now</th>
            <td>> 0x1</td>
            <td>≤ 0xA</td>
            <td>> 1 and < 99</td>
            <th>Any</th>
        </tr>
        <tr>
            <th>Outputs</th>
            <td colspan="4">0xABC</td>
        </tr>
    </tbody>
</table>

* `0;0;0;0;;i2;true;>i1:10`

<table :class="$style.mono_table_body">
    <thead>
        <tr>
            <th>Direction</th>
            <th>Top</th>
            <th>Right</th>
            <th>Bottom</th>
            <th>Left</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Inputs 1 Time Ago</td>
            <td>= 0</td>
            <td>= 0</td>
            <td>= 0</td>
            <td>= 0</td>
        </tr>
        <tr>
            <th>Inputs Now</th>
            <td>= Right Input</td>
            <td>Any</td>
            <td>> Top Input</td>
            <td>Any</td>
        </tr>
        <tr>
            <th>Outputs</th>
            <td colspan="4">10</td>
        </tr>
    </tbody>
</table>

* `0;;1;;2;;3:4::5:6::7:8`

<table :class="$style.mono_table_body">
    <thead>
        <tr>
            <th>Rule Group</th>
            <th>Direction</th>
            <th>Top</th>
            <th>Right</th>
            <th>Bottom</th>
            <th>Left</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="5">1</td>
            <td :class="$style.no_mono">Inputs 3 Times Ago</td>
            <td>= 0</td>
            <td>Any</td>
            <td>Any</td>
            <td>Any</td>
        </tr>
        <tr>
            <td>Inputs 2 Times Ago</td>
            <td>= 1</td>
            <td>Any</td>
            <td>Any</td>
            <td>Any</td>
        </tr>
        <tr>
            <td>Inputs 1 Time Ago</td>
            <td>= 2</td>
            <td>Any</td>
            <td>Any</td>
            <td>Any</td>
        </tr>
        <tr>
            <th>Inputs Now</th>
            <td>= 3</td>
            <td>Any</td>
            <td>Any</td>
            <td>Any</td>
        </tr>
        <tr>
            <th>Outputs</th>
            <td colspan="4">10</td>
        </tr>
        <tr>
            <td rowspan="2">2</td>
            <td :class="$style.no_mono">Inputs Now</td>
            <td>= 5</td>
            <td>Any</td>
            <td>Any</td>
            <td>Any</td>
        </tr>
        <tr>
            <th>Outputs</th>
            <td colspan="4">6</td>
        </tr>
        <tr>
            <td rowspan="2">3</td>
            <td :class="$style.no_mono">Inputs Now</td>
            <td>= 6</td>
            <td>Any</td>
            <td>Any</td>
            <td>Any</td>
        </tr>
        <tr>
            <th>Outputs</th>
            <td colspan="4">7</td>
        </tr>
    </tbody>
</table>

* `true;true;Min(i1,i2),Max(i1,i2):i1+i2`

<table :class="$style.mono_table_body">
    <thead>
        <tr>
            <th>Direction</th>
            <th>Top</th>
            <th>Right</th>
            <th>Bottom</th>
            <th>Left</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Inputs Now</th>
            <td>Any</td>
            <td>Any</td>
            <td>= The smallest of the Top Input and the Right Input</td>
            <td>= The largest of the Top Input and the Right Input</td>
        </tr>
        <tr>
            <th>Outputs</th>
            <td colspan="4">Top Input + Right Input</td>
        </tr>
    </tbody>
</table>

## Detailed Usages

According to the examples above, you may have a basic understanding of the Gigavolt Truth Table usages. Here is the detailed usages:

* Four input rules are separated by semicolons (`;`). The order is `Top`&#8203;`Right`&#8203;`Bottom`&#8203;`Left`, and they will be called `Input 1`&#8203;`Input 2`&#8203;`Input 3`&#8203;`Input 4`for convenience, and their values are written as `i1`&#8203;`i2`&#8203;`i3`&#8203;`i4` in the rules.
* If rules need to be set for Input 1 and 2, but Input 3 and 4 can be any value, the rules for Input 3 and 4 can be omitted. However, extra semicolons (`;`) cannot be added.
* If rules need to be set for Input 1 and 3, but input 2 can be any value, the rule`true`needs to be set for Input 2.
* If an input rule starts with one of the four operators`=`&#8203;`!=`&#8203;`>`&#8203;`<`, it will automatically add`i1`&#8203;`i2`&#8203;`i3`&#8203;`i4`at the beginning according to which input it is. Of course, you can add it manually.
* If an input rule is not`true`and does not contain any of the operators`=`&#8203;`!`&#8203;`not`&#8203;`>`&#8203;`<`&#8203;`and`&#8203;`&&`&#8203;`||`&#8203;`or`, it will automatically add `i1=`, `i2=`, `i3=`, and `i4=` at the beginning according to which input it is.
* Use two semicolons (`;;`) to separate time sequences. The leftmost sequence is the earliest, and the rightmost sequence is the current input. At most, the inputs from the previous 15 rounds can be obtained.
* Every time an input changes, the round number increases by 1.
* Only when the calculation result of an input rule is `true`, the next input rule will be calculated, and then the next set of time sequences will be calculated. This continues until the calculation results of all rules are `true`, and then the output set by this rule group will be output.
* Use a colon (`:`) to separate input rules and output rule. The calculation result of the output rule must be a natural number (an integer >= 0).
* Use two colons (`::`) to separate multiple rule groups. When the first rule group does not output, the next group of rules will be calculated until there is an output, and no further rule groups will be calculated. There can be up to 2^32^-1 groups of rules.
* If any error occurs during the process, the calculation will stop immediately and output 0 V. Details of the error can be found in the game log.
* Numbers in rules are decimal by default. To use hexadecimal numbers, add`0x`before the hexadecimal number. To use binary numbers, add`0b`before the binary number. Radix point is not supported for non-decimal numbers.

> [!WARNING] ⚠ WARNING
> The rule is case-sensitive!

## About NCalc

If you want to know more about NCalc, please read:

* [NCalc Operators](ncalc/operators) `= > < + - * /`and etc.
* [NCalc Functions](ncalc/functions) `if Max Sin`and etc.  
  The unit of measurement related to trigonometric functions is radians. Besides the functions mentioned in the article, you can also use`Atan2 Cosh Sinh Tanh` in this mod. These functions will convert numbers to double precision floating point numbers before calculating, and the calculation process will keep the decimal, finally the output will automatically remove the decimal part.  
  In addition, the`Rount`function with two parameters will give strange results, and it's not solved.
* [NCalc Values](ncalc/values) `9876 1.23e9 true false`and etc.  
  You can use`PI() E()` to get Archimedes' constant π and Euler's number _e_ in this mod.

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