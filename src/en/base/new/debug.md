# Debug Functions

<img src="/images/base/new/GVDebugBlock.webp" alt="The Image of GV Debug Panel Block" class="center_image small"/>

Hold`GV Debug Panel` block on hand and edit it，or place it in the terrain chunk and edit it or interact with it，then the debug panel dialog shown bellow will pop up.

<img src="/images/base/new/EditGVDebugDialog_en.webp" alt="The Image of GV Debug Panel Dialog" class="center_image"/>

## Running Speed <Badge text="v1.0" type="info"/>

The electric frequency of the vanilla version is 100 circles/second. If you set this option to 2 (in times), the electric frequency of Gigavolt will be 200 circles/second. This option can be a fraction, for example, if you set to 0.5, the frequency will be 50 circles/second.For the current version, the lowest running speed is 0.1 times.

The GV Debug Panel Block outputs the value of running speed option, and the radix point is located between the 16th and 17th bit.

> [!TIP] 🧪 Speed Reference
> Only one Logic Not Gate whose top and bottom ports by wires, using CPU `AMD R7 5800X` at 4.55GHz.
> * Set running speed to 100 thousand times，then the real speed is about 92 thousand times，the game fps is 9 \~ 10.
> * Set running speed to 90 thousand times，then the real speed is about 88 thousand times，the game fps is 16 \~ 17.
> * Set running speed to 80 thousand times，then the real speed is about 79 thousand times，the game fps is 370 \~ 380.

## Hover Display Voltage <Badge text="v2.0"/>

When this option is on, and you face to a Gigavolt element, there will be hovering numbers on the element. The green numbers are input voltages, and the red numbers are output voltages. The number in the bottom right corner is the voltage of the back port.

<img src="/images/base/new/hover_display_voltage.webp" alt="The Image of Hover Display Voltage" class="center_image"/>

## Keep Running Out of Visibility <Badge text="v2.0"/>

When this option is on, the elements and wires that have been visited will still be running even if they are not in the visibility range. But this effect will be lost when you exit the world.

## Floating Step Debugging Widget <Badge text="v1.0" type="info"/>

When this option is on, a floating widget with three buttons will be displayed at the top of the screen, and the `Recent 1000 Circles Cost x`.

<img src="/images/base/new/GVStepFloatingButtons_en.webp" alt="The Image of the Floating Step Debugging Widget" class="center_image"/>

The three buttons are:

1. **Pause/Continue**: Click once, the electric system will stop running. Click again, the electric system will continue running.
2. **Step In**: Run only one element.
3. **Step Over**: Run one electric circle.

下图是在开关关闭状态下，点击暂停后打开开关，点击两次步过按钮后的截图
The scene below is started with the switch off and pause on, then the switch was turned on, and the step over button is clicked twice.

<img src="/images/base/new/debug_example.webp" alt="The Image of Debugging Example" class="center_image"/>

Obviously, the left LED will light up one electric cycle slower than the right one because the left has an additional Logical OR gate under it.

The three cyan lines on the screen indicate which elements and wires were running in the last electric circle, and the number next to the line indicates the running order.

## Keyboard Debugging <Badge text="v1.0" type="info"/>

When this option is on, you can use keyboard to control the three buttons in the floating step debugging widget.

* `F5`Pause/Continue
* `F6`Step In
* `F7`Step Over

> What's "Enable Shortcut Wheel Panel"? See [Features](features#shortcut-wheel-panel)