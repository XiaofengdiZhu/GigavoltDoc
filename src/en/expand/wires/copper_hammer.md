# Copper Hammer <Badge text="v2.0"/>

<img src="/images/expand/wires/GVCopperHammerBlock.webp" alt="The Image of Copper Hammer" class="center_image small"/>

Copper Hammer is a tool that can be used for various purposes, including:

## Convert Wires and Wire Through Blocks

When you use the Copper Hammer on a wire block or a wire harness, the block will be converted to a Wire Through Plank or a Wire Harness Through Plank. If the face has wire before using, the face on the converted block can be connected. And the faces, which have wires before using, are conductive with each other.

<figure class="center_image">
<img src="/images/expand/wires/copper_hammer_transform_1.webp" alt="The Image of Before Using Example"/>
<figcaption>Before Using</figcaption>
</figure>
<figure class="center_image" style="margin-top: 32px;">
<img src="/images/expand/wires/copper_hammer_transform_2.webp" alt="The Image of After Using Example"/>
<figcaption><div>After Using</div><div>(The diamond block and the brick on the ground are removed)</div></figcaption>
</figure>

When you use it on a Wire Through Block or a Wire Through Harness Block, the block's material will be changed. The 5th time, it will be restored to a wire block or a wire harness block. The order is as follows:

<table :class="$style.img_width_100px">
    <tbody>
        <tr>
            <td>Wooden</td>
            <td>Stone</td>
            <td>Brick</td>
            <td>Cobblestone</td>
        </tr>
        <tr>
            <td><img src="/images/expand/wires/copper_hammer_texture_1.webp" alt="The Image of Wooden Material"/></td>
            <td><img src="/images/expand/wires/copper_hammer_texture_2.webp" alt="The Image of Stone Material"/></td>
            <td><img src="/images/expand/wires/copper_hammer_texture_3.webp" alt="The Image of Brick Material"/></td>
            <td><img src="/images/expand/wires/copper_hammer_texture_4.webp" alt="The Image of Cobblestone Material"/></td>
        </tr>
    </tbody>
</table>

The converted Wire Through Block can be painted, but it only affects the appearance, and the essence is still a colorless wire.

In addition, there are Six-Face Wire Through Block and Six-Face Wire Harness Through Block provided in the creative inventory.

> [!TIP] ❔ No Semiconductor Material?
> Because the Semiconductor material is specially used as the material of [Six-Face Jumper](jumper).

## Wiring

Steps：

1. Use the Copper Hammer on the start point, then a green frame will appear.

<img src="/images/expand/wires/copper_hammer_connect_1.webp" alt="The Image of Wiring Step 1" class="center_image"/>

2. Use the Copper Hammer on the end point, then the green frame will connect to the end point. (The path cannot be adjusted)

<img src="/images/expand/wires/copper_hammer_connect_2.webp" alt="The Image of Wiring Step 2" class="center_image"/>

3. At last, use the Copper Hammer on the end point to confirm; then the Wire Through Blocks will be placed on the path.

<img src="/images/expand/wires/copper_hammer_connect_3.webp" alt="The Image of Wiring Step 3" class="center_image"/>

In the edit dialog, you can change the material of the Wire Through Block, or place the Wire Harness Through Blocks instead.

<img src="/images/expand/wires/copper_hammer_edit_zh.webp" alt="The Image of Edit Dialog" class="center_image"/>

<style module>
.img_width_100px img {
    width: 100px;
    image-rendering: pixelated;
}
</style>