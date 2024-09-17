<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.All, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "", "Effect Range. If this is 0xFF, the element will attract items in all world."),
        new IOPort(9, 9, "", "If this is 0, the items being attracted move in straight lines.<br/>If this is 1, the items being attracted move in parabolas. Sometimes the items cannot move in parabolas, they will move in straight lines."),
        new IOPort(10, 10, "", "If this is 1, the element will attract drop items."),
        new IOPort(11, 11, "", "If this is 1, the element will attract projectiles."),
        new IOPort(12, 12, "", "If this is 1, the element will attract burning fire blocks."),
        new IOPort(13, 13, "", "If this is 1, the element will attract explosions, but the success rate is low."),
        new IOPort(14, 14, "", "If this is 1, the element will attract players, only in straight lines and for 60 seconds."),
        new IOPort(15, 15, "", "If this is 1, the element will attract animals and other non-player entities, only in straight lines and for 60 seconds."),
        new IOPort(16, 16, "", "If this is 1, and the 9th bit is 0, the element will not attract items but repel them. The speed of the repelled items will slow down little by little."),
        new IOPort(17, 22, "", "If the 9th bit is 0, specify the initial velocity of items, in blocks/second. Otherwise no effect."),
        new IOPort(23, 32, "", "Specify a block content. When this is greater than 0, the element will only attract the drop items and projectiles with the same block content.")
    ], true)
];
</script>

# Attractor <Badge text="v2.0"/>

## Overview

Can attract drop items, projectiles, animals, etc. When the input voltage changes, it will try to attract.

## Ports Definition

<ElectricElement imgAltPrefix="Attractor" :connections="connections" imgSrc="/images/expand/transportation/GVAttractorBlock.webp"/>