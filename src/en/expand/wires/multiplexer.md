# Multiplexer <Badge text="v1.0" type="info"/>

## Overview

<img alt="The Image of Multiplexer" src="/images/expand/wires/GVMultiplexerBlock.webp" class="center_image small">

The states and relations of four ports on the front can be totally controlled by the back input.

## Description

The inside design:

<img alt="The Image of the Inside Design" src="/images/expand/wires/MultiplexerDiagram.svg" style="margin: 0 auto 32px; border-radius: 8px; padding: 8px; background-color: white;">

* The circles represent voltage nodes. Nodes `A`&#8203;`B`&#8203;`C`and`D` represent the `Top Port`&#8203;`Right Port`&#8203;`Bottom Port`and`Left Port`on the front side. The remaining nodes`a`&#8203;`b`&#8203;`c`&#8203;`d`, and`O`are auxiliary nodes.
* Dashed lines represent normally open paths, with a total of 10; solid lines represent normally closed paths, with a total of 4.
* Each path consists of two unidirectional wires, each with a switch, making a total of 28 switches.
* The 28 switches can be controlled by the voltage of the back input:
    * For normally open paths, for example, if the lowest bit (referred to as the nth bit below) is 1, switch 1 in the diagram will close, the wire controlled by the switch will be conductive; then the voltage can be transmitted from node `A` to `a` through this wire. If the 2nd bit is 1, switch 2 in the diagram will close, the wire will controlled by the switch be conductive; then the voltage can be transmitted from `a` to `A` through this wire, and so on.
    * For normally closed paths, for example, if the 26th bit is 1, switch 26 in the diagram will open, the wire will be non-conductive; then the voltage will not be able to transmit from`O`to`c`through this wire.
* When a node receives a new voltage, it performs a bitwise OR operation between this voltage and the voltage of itself, and the voltage of itself becomes the result of this operation. For example, if the voltage of node `c` is 5 V, and it receives 3 V from node `O`, the voltage of node `c` will become 5 | 3 = 7 V.
* When a node's voltage changes, it will transmit the new voltage to other nodes it can conduct to, until all node voltages stabilize. Finally, the results are output based on the voltages of nodes`A`&#8203;`B`&#8203;`C`, and`D`to the`Top port`&#8203;`Right port`&#8203;`Bottom port`, and`Left port`on the front side.
* Whenever the voltage of the back or front input changes, all internal nodes will reset to 0 and recalculate the output.

> [!INFO] 💡 Example
> If the back input is 0x21 V (binary 100001), switches 1 and 6 will close. When the voltage of the top input is 5 V, node`A`will become 5 V. Because of the conductive wire`1`, the voltage will be conducted to node `a`, then conducted to node `O` through wire`21`, then conducted to node `c`through wire`26`, and finally conducted to node `C`through wire`6`, which will output 5 V at the bottom port.