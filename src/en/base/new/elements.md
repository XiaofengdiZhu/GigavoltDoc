# New Elements

## Wire Harness <Badge text="v2.0"/>

A kind of new wire with orange color. They can only connect to colored wires or colored elements. The signals from different colored wires or elements can transmit independently in the wire harnesses, then wiring can be much more efficient.

<img src="/images/base/new/wire_harness_example.webp" alt="The Image of How to Use Wire Harness" class="center_image"/>

## Diode <Badge text="v2.0"/>

Diode can only pass signals from bottom port to top port with 1 electric cycle delay (0.01 second. It's essentially a Delay Gate). Only colored type in `Gigavolt Multiple` category.

<img src="/images/base/new/diode.webp" alt="The image of New Diode" class="center_image"/>

## Four Kinds of LED <Badge text="v1.0" type="info"/>

* **8 x 4 LED**：In vanilla version, the 4-LED displays the 4-bit voltage using 4 square light emitting diodes. This element can display 32-bit voltage using 32 small LEDs.
* **4 x 4 LED**：Takes the lowest 16 bits of input voltage and display it using 16 small LEDs.
* **4 x 2 LED**：Takes the lowest 8 bits of input voltage and display it using 8 small LEDs.
* **8 Numerical LED**：Equivalent to eight 7-Segment displays. It displays the 32-bit voltage intuitively.

<table :class="$style.led_table">
    <tbody>
        <tr>
            <td>8 x 4 LED</td>
            <td>4 x 4 LED</td>
            <td>4 x 2 LED</td>
            <td>8 Numerical LED</td>
        </tr>
        <tr>
            <td><img src="/images/base/new/GV8x4LedBlockFull.webp" alt="The Image of GV 8 x 4 LED"/></td>
            <td><img src="/images/base/new/GV4x4LedBlockFull.webp" alt="The Image of GV 4 x 4 LED"/></td>
            <td><img src="/images/base/new/GV4x2LedBlockFull.webp" alt="The Image of GV 4 x 2 LED"/></td>
            <td><img src="/images/base/new/GV8NumberLedBlockFull.webp" alt="The Image of GV 8 Numerical LED"/></td>
        </tr>
    </tbody>
</table>

## Transformers <Badge text="v1.0" type="info"/>

### Gigavolt to Original Transformer

Connect the bottom port to a Gigavolt element or wire, then the transformer will take the lowest 4 bits of the input 32-bit voltage and output it to the top port. The top port can only connect to a vanilla element or wire.

<img src="/images/base/new/GV2OTransformerBlock.webp" alt="The Image of Gigavolt to Original Transformer" class="center_image small"/>

### Original to Gigavolt Transformer

Connect the bottom port to a vanilla element or wire, then the transformer will output 32-bit voltage equals to the input 4-bit voltage to the top port. The top port can only connect to a Gigavolt element or wire.

<img src="/images/base/new/O2GVTransformerBlock.webp" alt="The Image of Original to Gigavolt Transformer" class="center_image small"/>

## Debug Panel <Badge text="v1.0" type="info"/>

See [Debug Functions](debug)


<style module>
.led_table img {
    width: 100px;
    image-rendering: pixelated;
}
:global(html:not(.dark)) .led_table tr:nth-child(2) {
    background-color: rgba(from var(--highContrast) r g b / 0.2);
}
</style>