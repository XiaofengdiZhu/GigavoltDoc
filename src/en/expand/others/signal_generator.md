<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import SignalGeneratorElement from "../../../components/ElectricElement/SignalGeneratorElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.UpTop, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Wave Value", "Output the integer part of the current wave value.")
    ]),
    new ElectricConnection(ElectricConnectorDirection.UpRight, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 4, "Wave Kind", "If this is 0 or others not written in below, the wave will be sine wave. If this is 1, it will be triangular wave. If this is 2, it will be sawtooth wave. If this is 3, it will be square wave."),
        new IOPort(5, 6, "Wave Gap Behavior", "If this is 0 or 3, the voltage of gap will be 0. If this is 1, it will be the last voltage of the wave. If this is 2, it will be the value of the`Wave Vertical Offset`"),
        new IOPort(7, 7, "Random Wave Amplitude", "If this is 1, every time the clock resets or overflows, the wave amplitude for calculating will be set to a random value not greater than the`wave amplitude`you set."),
        new IOPort(8, 8, "The Sign of Wave Vertical Offset", "See`Wave Vertical Offset`"),
        new IOPort(9, 16, "Empty", "No effect."),
        new IOPort(17, 32, "Wave Gap", "Set how many steps the wave gaps. The voltage of gap can be adjusted by`Wave Gap Behavior`.  After set, the clock will be rest."),
    ]),
    new ElectricConnection(ElectricConnectorDirection.UpLeft, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Wave Vertical Offset", "If`The Sign of Wave Vertical Offset`is 0, the lowest 31 bits will be added to the wave value. Otherwise, it will be subtracted.")
    ]),
    new ElectricConnection(ElectricConnectorDirection.UpIn, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Current Clock", "Output the current clock position")
    ]),
    new ElectricConnection(ElectricConnectorDirection.DownRight, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 16, "Wave Circle", "Set the circle of wave. After set, the clock will be rest."),
        new IOPort(17, 32, "Wave Horizontal Offset", "If the highest bit is 0, before calculating the wave value, the lowest 15 bits will be added to the clock. Otherwise, it will be subtracted. (This operation also can be called adjusting phase.)")
    ]),
    new ElectricConnection(ElectricConnectorDirection.DownLeft, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 16, "Wave Amplitude", "Set the amplitude of wave.")
    ]),
    new ElectricConnection(ElectricConnectorDirection.DownBottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Adjust Clock", "If this port is not connected, the element will work in asynchronous mode, otherwise in synchronous mode.<br/>If the highest bit is 0, the lowest 31 bits will be added to the clock. Otherwise, it will be subtracted.")
    ]),
    new ElectricConnection(ElectricConnectorDirection.DownIn, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "<div style=\"text-wrap: nowrap;\">For Async<br/>Control Clock</div>", "If this is 0, the clock will be rest. If this is less than 8, the clocks will be paused. Otherwise the clock will keep counting up."),
        new IOPort(1, 32, "<div style=\"text-wrap: nowrap;\">For Sync<br/>Reset Clock</div>", "Raising from 0 will reset the clock.")
    ])
];
</script>

# Signal Generator

For generating sine waves, triangular waves, sawtooth waves, and square waves. It occupies two blocks. If there is no enough room, you will not be able to place or rotate it. It works in two modes:

* **Asynchronous Mode**：If the down bottom port is not connected, it will work in asynchronous mode. In this mode, you can control the clock to start, pause, or reset through the down back port. The clock will keep counting up after being started.
* **Synchronous Mode**：If the down bottom port is connected, it will work in synchronous mode. Every time the voltage of the down bottom port changes, the clock will increase or decrease. You can reset the clock through the down bottom port.

Nether asynchronous or synchronous mode, the element only calculates a new wave value when the clock changes.

## Ports Definition

<SignalGeneratorElement imgAltPrefix="Signal Generator" :connections="connections" imgSrc="/images/expand/others/GVSignalGeneratorBlock.webp"/>