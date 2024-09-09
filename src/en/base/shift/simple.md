---
outline: 2
---

<script setup lang="ts">
import UintColorConverter from "/components/UintColorConverter.vue";
import Detonator from "/components/Detonator/Detonator.vue";
</script>

# Shifts of Simple Elements

> `Spiked Plank`&#8203;`Christmas Tree`&#8203;`Gunpowder Keg`&#8203;`Thermometer`&#8203;`Hygrometer`in vanilla that can be interacted with electric, and they don't have a shift or classic type in this mod.

## Wires <Badge text="v2.0"/>

* ⭕ **Vanilla**：In creative game mode inventory, there are 7 colors of wires.
* ⚡ **Gigavolt**：In creative game mode inventory, there are 14 colors of wires and a [Wire Harness](../new/elements#wire-harness). The new harness wire and colored wires as shown in the image below, and they are in the`Gigavolt Shift`category.

<img src="/images/base/shift/wire.webp" alt="The image of new colorful wires and harness wire" class="center_image"/>

## Adjustable Delay Gate <Badge text="v2.0"/>

### ⭕ Vanilla

* Outputs from the top and back ports.
* You have to manually adjust the delay time in the dialog.

### ⚡ Gigavolt

* Outputs from the top port.
* You can't manually adjust the delay time. The delay time can only be adjusted by the voltage from the back. The initial delay time is 0.01 seconds, when the back input voltage increases 1 V, the delay time increases 0.01 seconds. If the back input voltage is greater than or equal to 0xFF V, the delay time reaches the maximum value of 2.56 seconds.

## SR Latch <Badge text="v1.0" type="info"/>

* ⭕ **Vanilla**：When the S input is greater than 0.7 V, the output is locked at 1.5 V until reset.
* ⚡ **Gigavolt**：When the S input is greater than 0 V, the output is locked at the voltage of the S input until reset.

## Switch & Button & Battery <Badge text="v2.0"/>

### ⭕ Vanilla

Default output is 1.5 V.

### ⚡ Gigavolt

* Default output is 0xFFFFFFFF V.

> [!CAUTION] ⚠ Important Caution
> Other elements whose vanilla version output 1.5 V in default, will output 0xFFFFFFFF V in default. This feature also affects the classic elements.

* You can manually edit the output duration of buttons.
* New colored buttons and switches are added. They can’t connect to the wires with different colors besides harness wire. They’re in the`Gigavolt Shift`category.

<img src="/images/base/shift/switch_and_button.webp" alt="The image of new colored buttons and switches" class="center_image"/>

* New edit voltage dialog for 32-bit.

<img src="/images/base/shift/EditGVUintDialog_en.webp" alt="The image of new edit voltage dialog" class="center_image"/>

> **Fraction**：In this case, it's the decimal fraction transformed from the voltage. The transform rule: The highest(leftmost) bit represents the sign, the radix point is between the 16th and 17th bit.

## Counter <Badge text="v1.0" type="info"/>

### ⭕ Vanilla

The default overflow voltage is 1.6 V, and the upper limit is 1.5 V.

### ⚡ Gigavolt

* The default overflow voltage is 0x100000000 V, and the upper limit is 0xFFFFFFFF V.
* You can manually edit the overflow voltage, initial voltage, and current voltage.

## Pressure Plate <Badge text="v1.0" type="info"/>

* ⭕ **Vanilla**：It generates a voltage between 0.8 and 1.5 V when it is pressed, and the relation of the pressure and voltage is chaotic.
* ⚡ **Gigavolt**：It generates an accurate voltage of the pressure. Reference result: male player 0x46 V, orca 0x5DC V.

## Piston <Badge text="v2.0"/>

### ⭕ Vanilla

* Extends when the input voltage is greater than 0.7 V.
* The maximum extension, push and pull length is 8 blocks.

### ⚡ Gigavolt

* Extends when the input voltage is greater than 0 V.
* The maximum extension, push and pull length is 2^32^-1 blocks. (If a piston gets stuck when pushing or pulling too many blocks, it is caused by other game subsystems.)
* More speed options: 2xFast, 3xFast, 4xFast.
* New option: Hide Pole (hide the extension pole).
* In addition, [Complex type](complex_piston) is available.

## Multicolored LED、1-LED <Badge text="v1.0" type="info"/>

### ⭕ Vanilla

The input voltage between 0.8 V and 1.5 V produces light of 8 different colors.

### ⚡ Gigavolt

* The input voltage with an alpha channel greater than 0 produces light of 4 billion different colors. The color mode is `ABGR`.
* 1-LED produces light from the whole surface. There are no joint lines between two 1-LED.

> [!TIP] 📝 ABGR Color Mode
> From high to low bits，every 8 bits represents the color's <span style="opacity:0.6;">Alpha chanel</span>、<span style="color:blue;">Blue chanel</span>、<span style="color:green;">Green chanel</span>、<span style="color:red;">Red chanel</span>. You can use the tool below to convert.

::: details 🛠️ Voltage Color Converter

<UintColorConverter />
:::

## Target <Badge text="v1.0" type="info"/>

* ⭕ **Vanilla**：Outputting voltage between 0.8 and 1.5 V determines how close to the center the hit occurred.
* ⚡ **Gigavolt**：Outputting voltage between 0 and 0xFFFFFF00 V determines how close to the center the hit occurred. Because of coordinate precision of the game, the lowest 8 bits are always 0.

## Electric Detonator <Badge text="v1.0" type="info"/>

<Detonator/>

* ⭕ **Vanilla**：Produces an explosion with a power of 10 when the input voltage is greater than 0.7 V.
* ⚡ **Gigavolt**：Produces an explosion with a power of input voltage, which means when the input voltage is less than 0.8 V, it also explodes. There is an Easter Egg when the input voltage is 0xFFFFFFFF V.

## Doors, Trapdoors, Fence Gates <Badge text="v1.0" type="info"/>

* ⭕ **Vanilla**：Open or close when the input voltage changes from less than 0.8 V to greater than 0.7 V.
* ⚡ **Gigavolt**：The opening degree is controlled by the input voltage, 0V closed, 0x2D V opens 45 degrees, 0x5A V and above fully open. No classic type.

## Complex Elements

See：

* [Digital to Analog And Analog to Digital Converter](converter) - Changes to 4 combiners and 4 splitters.
* [Memory Bank](memory_bank) - The row and column limits are raised to 2^32^-1.
* [Truth Table Circuit](truth_table) - Besides being able to output voltages based on specified inputs like the classic type, it can also perform expression calculations.
* [Real Time Clock](real_time_clock) - Outputs the time in the real world.
* [Sound Generator](sound_generator) - Plays PCM-encoded audio data.
* [Complex Piston](complex_piston) - Completely controlled by input voltage. When the input voltage changes, it will try to adjust.
* [Sign](sign) - It can display texts floating in the air.
* [Dispenser](dispenser) - The speed, angel, and so on are controlled by input voltage. When the input voltage changes, it will try to shoot or dispense. The shoot mode is default.