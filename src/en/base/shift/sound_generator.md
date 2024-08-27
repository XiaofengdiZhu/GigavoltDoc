<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Playback Start Index", "Set the playback starting from the nth 16-bit data. This setting only takes effect when reading the audio data.  \nFor example, if the Left Input is 44100 V, and you set this port to 88200 V, the playback will starts from 88200/2/44100 = 1 second."),
    ]),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Playback Length", "Set how much 16-bit data to play, only takes effect when reading the audio data.")
    ]),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Start / Volume", "When the input voltage raises from 0 V, the playback starts. If the input voltage drop to 0 V, the playback stops. When playing, the higher the voltage , the louder the volume.  \nWhen the voltage of this port is 0 V, if the voltages of other inputs change, this element will try to read audio data from specified memory bank again. But when the voltage of this port is not 0 V, nothing will happen.")
    ]),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Sample Rate", "Set the sample rate of playback, in Hz. This setting only takes effect when reading the audio data.  \nRange: 8000 \~ 48000 (In hexadecimal: 1F40 \~ BB80)")
    ]),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Memory Bank ID", "Set the ID of memory bank that the audio data read from. This setting only takes effect when reading the audio data."),
    ])
];
</script>

# Sound Generator <Badge text="v1.0" type="info"/>

## Overview

Plays PCM-encoded audio data from a memory bank.

## Ports Definition

<ElectricElement imgAltPrefix="GV Sound Generator" :connections="connections" imgSrc="/images/base/shift/GVSoundGeneratorBlock.webp"/>

## Audio Convert

Before using the sound generator, you need to use [ffmpeg](https://ffmpeg.org/) or [Format Factory](http://www.pcgeshi.com/index.html) to convert the audio file to a file that meets the following requirements:

* File Format: WAV
* Codec：PCM (If there is no such option, it is usually PCM)
* Channels：2
* Sample Rate：8000 \~ 48000 Hz
* Bit Depth：16 bits

After converting, import it to the Gigavolt Memory Bank.

> [!TIP] 💡 If errors occupies when entering worlds.
> This is because other elements on ports have not been initialized, and this cause the sound generator receives 0V input. Or because the memory bank has not been initialized, then the sound generator try to read it but failed.  
> The correct solution is to set the input voltage of the backend to 0V before exiting the world, and then set it again when you need to play.