<script setup lang="ts">
import ElectricConnection from "../../../components/ElectricElement/ElectricConnection";
import ElectricConnectorType from "../../../components/ElectricElement/ElectricConnectorType";
import ElectricConnectorDirection from "../../../components/ElectricElement/ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "../../../components/ElectricElement/ElectricConnectionDisplayMode";
import IOPort from "../../../components/ElectricElement/IOPort";
import ElectricElement from "../../../components/ElectricElement/ElectricElement.vue";

let connections = [
    new ElectricConnection(ElectricConnectorDirection.Top, ElectricConnectorType.Output, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Output Data / Result", ""),
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Right, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 16, "W-Coordinate", ""),
        new IOPort(17, 32, "Z-Coordinate", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.Bottom, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Synchronous Operations, details are in the table below.", "")
    ], false, true),
    new ElectricConnection(ElectricConnectorDirection.Left, ElectricConnectorType.Input, ElectricConnectionDisplayMode.StartAndEnd, [
        new IOPort(1, 16, "X-Coordinate", ""),
        new IOPort(17, 32, "Y-Coordinate", "")
    ], false, true),
        new ElectricConnection(ElectricConnectorDirection.In, ElectricConnectorType.Input, ElectricConnectionDisplayMode.Hide, [
        new IOPort(1, 32, "Input Data", ""),
    ], false, true)
];
</script>

# Four Dimensional Memory Bank <Badge text="v2.0"/>

## Overview

It's similar to [Memory Bank](../../base/shift/memory_bank), but it has four dimensions but not two. You must manually set the ranges of four dimensions to initialize it before store data.

The file saved to the save is a series of [WebP](https://developers.google.com/speed/webp) dynamic image files. Each image stores one three-dimensional data. X-axis is image width, Y-axis is image height, Z-axis is image time axis.
The exported file format is `.GVFDMB`, which is essentially a [ZIP](https://support.pkware.com/pkzip/appnote) compressed file. The zip comment stores the range information. The files in the zip are the ones in the save, and they are named as their Z-Coordinate.

> [!TIP] 💡 Tip
> Please avoid using W and Z axis, or set the value as small as possible when initializing. Because the performance of multidimensional data in saving and other operations is poor, which may cause lag.

## Ports Definition

<ElectricElement imgAltPrefix="Four Dimensional Memory Bank" :connections="connections" imgSrc="/images/expand/memory_banks/GVFourDimensionalMemoryBankBlock.webp"/>

## Synchronous Operations

|     Voltage     |        Operation        | Description                                                                                                                                                                                                                                                                                                       |
|:---------------:|:-----------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  Not Connected  |       Async Read        | When the bottom port is not connected, the top port will output the data at the right index (out of range outputs 0, same bellow.)                                                                                                                                                                                |
| 0 or<br/>Others |          None           | When the voltage of the bottom port is 0 or other unspecified voltage, the output will be 0.<br/>If the bottom port is connected to an element or wire, the List Memory Bank will be in synchronous operation mode. In this mode, only if the voltage of the bottom port changes, the operation will be executed. |
|        1        |          Read           | Read the data at specified coordinate, and output it to the top port.                                                                                                                                                                                                                                             |
|        2        |          Write          | Write the input data to the specified coordinate.                                                                                                                                                                                                                                                                 |
| 256<br/>(0x100) |        Set Width        | Set the width of image display and terrain layer display to the back input. The default value is 0.                                                                                                                                                                                                               |
| 257<br/>(0x101) |       Set Height        | Set the height of image display and terrain layer display to the back input. The default value is 0.                                                                                                                                                                                                              |
| 258<br/>(0x102) |    Set X-Axis Offset    | Set the X-axis offset of date, which image display or terrain layer display reads, to the back input. The default value is 0. When the display reads data from this memory bank, it will ignore the first n data at the X-axis.                                                                                   |
| 259<br/>(0x103) |    Set Y-Axis Offset    | Set the Y-axis offset of date, which image display or terrain layer display reads, to the back input. The default value is 0. When the display reads data from this memory bank, it will ignore the first n data at the Y-axis.                                                                                   |
| 260<br/>(0x104) | Set Z-Coordinate Offset | Set the Z-coordinate of date, which image display or terrain layer display reads, to the back input. The default value is 0.                                                                                                                                                                                      |
| 26<br/>(0x105)  | Set W-Coordinate Offset | Set the W-coordinate of date, which image display or terrain layer display reads, to the back input. The default value is 0.                                                                                                                                                                                      |
| 272<br/>(0x110) |        Get Width        | Get the width you set, and output it to the top port.                                                                                                                                                                                                                                                             |
| 273<br/>(0x111) |       Get Height        | Get the height you set, and output it to the top port.                                                                                                                                                                                                                                                            |
| 274<br/>(0x112) |    Get X-Axis Offset    | Get the X-axis offset you set, and output it to the top port.                                                                                                                                                                                                                                                     |
| 275<br/>(0x113) |    Get Y-Axis Offset    | Get the Y-axis offset you set, and output it to the top port.                                                                                                                                                                                                                                                     |
| 276<br/>(0x114) | Get Z-Coordinate Offset | Get the Z-coordinate offset you set, and output it to the top port.                                                                                                                                                                                                                                               |
| 277<br/>(0x115) | Get W-Coordinate Offset | Get the Z-coordinate offset you set, and output it to the top port.                                                                                                                                                                                                                                               |