<script setup lang="ts">
import MoreOneInOneOutTable from "../../../components/MoreOneInOneOut/MoreOneInOneOutTable.vue"
</script>

# More One In One Out Gates <Badge text="v1.0" type="info"/>

## Overview

These gates are all in`Gigavolt Multiple`category, they have these common points:

* The bottom port is the input port.
* The top and back port are the output port with the same voltage.
* The highest(leftmost) bit of the voltages represents the sign, the radix point is between the 16th and 17th bit.
* The unit of measurement related to trigonometric functions is radian.

## Details

<MoreOneInOneOutTable />

> [!TIP] 📝 What Does SMR Gate Do?
> Revert the highest bit of the input.

> [!WARNING] 📝 What Does TCR Gate Do?
> If the highest bit of the input is 0, it will perform a bitwise NOT operation on all bits and add 1.
> If the highest bit of the input is 1, it will subtract 1 from the input and perform a bitwise NOT operation on all bits.