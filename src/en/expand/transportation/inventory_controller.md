<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Output, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "Result", "Because the result is often 0, the default result is 0xFFFFFFFF V. If there is an error occupied during controlling, the result will be 0xFFFFFFFF V too.")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "Slot", "Specify the n+1th slot to control."),
        new IOPort(9, 16, "Count", "Specify how many items to control."),
        new IOPort(17, 17, "Whether Check Block Data", "See`Block Data`"),
        new IOPort(18, 18, "Whether Control Player's Inventory", "If this is 0, this element controls the inventory of the behind block. Otherwise, the element controls the specified player's inventory."),
        new IOPort(18, 18, "Whether Control All", "If this is 1, the element will ignore`Count` in operation, and will control as much as possible."),
        new IOPort(20, 24, "Player Index", "Specify which number player's inventory you want to control when`Whether Control Player's Inventory`is 1."),
        new IOPort(25, 32, "New Slot", "Specify the n+1th slot as the new slot when`Synchronous Operations`is 16(0x10).")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.BitWidth, [
        new IOPort(1, 32, "Synchronous Operations", "Details are in the table below.")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 10, "Block Content", "If this is greater than 0, the element will only control the item with the same block content."),
        new IOPort(11, 14, "Empty", "No effect."),
        new IOPort(15, 32, "Block Data", "If`Block Content`is greater than 0 and`Whether Check Block Data`is 1, the element will also check whether the block data of items equals to this.")
    ])
];
</script>

# Inventory Controller

## Overview

You can use it to control items stored in the inventory of a block like a chest, furnace, and dispenser, or a player's inventory.

## Ports Definition

<ElectricElement imgAltPrefix="Inventory Controller" :connections="connections" imgSrc="/images/expand/transportation/GVInventoryControllerBlock.webp"/>

### Synchronous Operations

| Voltage         | Opertaion & Description                                                                                                                                                                                                                                                                                                                                                              |
|-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0 or<br/>Others | Only if the voltage of the bottom port changes, the operation will be executed. The default output is 0xFFFFFFFF V. If there is an error occupied during controlling, the result will be 0xFFFFFFFF V too.                                                                                                                                                                           |
| 1               | Output the block value of the items in the specified slot.                                                                                                                                                                                                                                                                                                                           |
| 2               | Output the count of the items in the specified slot.                                                                                                                                                                                                                                                                                                                                 |
| 3               | Output the capacity of the items in the specified slot.                                                                                                                                                                                                                                                                                                                              |
| 4               | Output the remaining capacity of the items in the specified slot.                                                                                                                                                                                                                                                                                                                    |
| 5               | Output the total count of the items with the specified block.                                                                                                                                                                                                                                                                                                                        |
| 6               | Output the slot number of the first slot that contains the item with the specified block.                                                                                                                                                                                                                                                                                            |
| 7               | Output the count of the slots that contains the items with the specified block.                                                                                                                                                                                                                                                                                                      |
| 8               | Output the count of the items with the same block content and data that can be added. (The block data is considered and will not be ignored.)                                                                                                                                                                                                                                        |
| 9               | Output the total count of slots.                                                                                                                                                                                                                                                                                                                                                     |
| 10<br/>(0xA)    | Output the count of used slots.                                                                                                                                                                                                                                                                                                                                                      |
| 11<br/>(0xB)    | Output the count of unused slots.                                                                                                                                                                                                                                                                                                                                                    |
| 12<br/>(0xC)    | Output the first slot number that contains at least one item.                                                                                                                                                                                                                                                                                                                        |
| 13<br/>(0xD)    | Output the last slot number that contains at least one item.                                                                                                                                                                                                                                                                                                                         |
| 14<br/>(0xE)    | Output the first slot number that does not contain item.                                                                                                                                                                                                                                                                                                                             |
| 15<br/>(0xF)    | Output the last slot number that does not contain item.                                                                                                                                                                                                                                                                                                                              |
| 16<br/>(0x10)   | Move the items from a lot to a new slot. You should specify the count of items to move. The output will be the count of items actually moved.<br/>If the new slot already has items, it will try to move items to other available slots.                                                                                                                                             |
| 17<br/>(0x11)   | Organize the items with the specified block content to the specified slot. You should specify the count of items to organize. The output will be the count of items actually moved.<br/> If the new slot already has items, or cannot hold so many items, it will try to move items to the next slot, then the next again.<br/>The block data is considered and will not be ignored. |
| 18<br/>(0x12)   | Remove the items in the specified slot. You should specify the count of items to remove. The output will be the count of items actually removed.                                                                                                                                                                                                                                     |
| 19<br/>(0x13)   | Remove the items with the specified block content. You should specify the count of items to remove. The output will be the count of items actually removed.                                                                                                                                                                                                                          |
| 20<br/>(0x14)   | Set the block data of the items in the specified slot. You should specify the count of items to set. The output will be the count of items actually set.<br/>If the specified count is less than the count of items in the slot, it will try to move items not set to other available slots.                                                                                         |
| 32<br/>(0x20)   | Sort items by count, output the count of used slots.                                                                                                                                                                                                                                                                                                                                 |
| 33<br/>(0x21)   | Sort items by count in descending order, output the count of used slots.                                                                                                                                                                                                                                                                                                             |
| 34<br/>(0x22)   | Sort items by block value, output the count of used slots.                                                                                                                                                                                                                                                                                                                           |
| 35<br/>(0x23)   | Sort items by block value in descending order, output the count of used slots.                                                                                                                                                                                                                                                                                                       |
| 48<br/>(0x30)   | Try to refresh the crafting result of crafting table or furnace, output the count of the new crafting result.                                                                                                                                                                                                                                                                        |