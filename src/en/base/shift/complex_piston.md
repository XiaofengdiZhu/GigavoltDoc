<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.All, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "", "Extension length，in blocks"),
        new IOPort(9, 16, "", "Speed，in blocks/second"),
        new IOPort(17, 24, "", "Push and pull length，in blocks"),
        new IOPort(25, 25, "", "If this is 1, the piston will be able to pull."),
        new IOPort(26, 26, "", "If this is 1, the pull length is strict."),
        new IOPort(27, 27, "", "If this is 1, the piston will hide the extension pole.")
    ], true)
];
</script>

# Complex Piston <Badge text="v2.0"/>

## Overview

Completely controlled by input voltage. When the input voltage changes, it will try to adjust.
> See also [Simple version](simple#Piston)

## Ports Definition

<ElectricElement imgAltPrefix="GV Complex Piston" :connections="connections" imgSrc="/images/base/shift/GVPistonBlock_complex.webp"/>

> If the speed is 0, the piston can not work.