<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";
import UintColorConverter from "/components/UintColorConverter.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 16, "Scale Size", "For each 1 increase of this, the scale size of the subterrain increases by 1/8 times, with a maximum of 8191.875 times."),
        new IOPort(17, 32, "Y Offset", "For each 1 increase of this, the position of the subterrain moves up by 1/8 block. If the highest bit of this is 1, moving down instead.")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 16, "X Offset", "For each 1 increase of this, the position of the subterrain moves north by 1/8 block. If the highest bit of this is 1, moving south instead."),
        new IOPort(17, 32, "Z Offset", "For each 1 increase of this, the position of the subterrain moves east by 1/8 block. If the highest bit of this is 1, moving west instead.")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 8, "Yaw", "Set the yaw angle of the subterrain, in degree."),
        new IOPort(9, 16, "Pitch", "Set the pitch angle of the subterrain, in degree."),
        new IOPort(17, 24, "Roll", "Set the roll angle of the subterrain, in degree."),
        new IOPort(25, 25, "Yaw Sign", "If this is 1, the yaw angle will be negative."),
        new IOPort(26, 26, "Pitch Sign", "If this is 1, the pitch angle will be negative."),
        new IOPort(27, 27, "Roll Sign", "If this is 1, the roll angle will be negative."),
        new IOPort(28, 28, "Whether Custom Brightness", "If this 1, the brightness of the subterrain will be`Custom Brightness`, otherwise the brightness of the main world."),
        new IOPort(29, 32, "Custom Brightness", "Set the brightness of the subterrain. The higher the voltage, the brighter the subterrain.")
        
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 1, "Catch/Release", "When this changes from 0 to 1, the element will try to catch floating blocks into a subterrain, or release the blocks in the subterrain back to the main world. When releasing, the subterrain must be parallel to the main world, and the scale size must be 1.0"),
        new IOPort(2, 2, "Position Indicator", "If this is 1, the element will draw a line between itself and the specified offset position.  \nWhen it changes from 0 to 1, a preview of what will be caught will be drawn.")
    ])
];
</script>

# Tractor Beam <Badge text="v2.0"/>

## Overview

Can convert several floating blocks into a`Subterrain`, then you can move, rotate and scale the subterrain. If the caught blocks contain a working tractor beam, the nested tractor beam still can work in the subterrain. The nest time is not limited.  
The`Subterrains`work in different subspaces, only the Gigavolt elements can work normally. What you see in the game is just their projections, so you cannot interact with the blocks in subterrains directly (including clicking, collision, shooting, explosion). For now version, there are three ways to interact with them:

* [Jump Wire](../wires/jump_wire)
* [Remote Controller](../others/remote_controller)
* Sensors:
    * Motion Detector：Detects motion in the main world only.
    * Photodiode：Detects light intensity in the main world only.
    * [Camera](../sensors/camera)：Takes photos that include the main world and subterrains.

> [!CAUTION] 🚨 Important Warning
> When you exit the game, if the caught blocks in subterrains are not released back to the main world, they will disappear and cannot be recovered.

Other explanations:

* **Blocks will not be caught**：Air, bedrock, fire.
* **[Terrain Raycast Detector](../sensors/terrain_raycast_detector) & [terrain scanner](../sensors/terrain_scanner)**：If they are in the main world, they can only detect/scan the blocks in the main world. If they are in subterrain, they can only detect/scan the blocks in the subterrain.
* **Various piston**：If they are in the main world, they can only push and pull the blocks in the main world. If they are in subterrain, they can only push and pull the blocks in the subterrain, and a render bug hard to fix will occur.
* **Blocks can store items**：Such as chest, dispenser, etc. Because of the game mechanics, they will drop the items stored in them when caught, and they cannot be used in subterrains. In addition, various signs cannot be used in subterrains either.

## Ports Definition

<ElectricElement imgAltPrefix="Tractor Beam" :connections="connections" imgSrc="/images/expand/transportation/GVTractorBeamBlock.webp" :titleLevel="4"/>

> [!INFO] 💡 Tip
> The offset ranges of each direction are all ±4095.875.