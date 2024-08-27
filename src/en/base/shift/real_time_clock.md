# Real Time Clock <Badge text="v1.0" type="info"/>

<img src="/images/base/shift/GVRealTimeClockBlock.webp" alt="The Image of GV Real Time Clock" class="center_image small"/>

It's similar to the vanilla version, but outputs the true real time (from the running device), and the four ports on the front are all output ports, but the back port is input port.

According to the back input, the four outputs on the front will output different values, as shown in the table below:

<div :class="$style.real_time_clock_table">

|  Back Input   |                            Top Output                             |                 Right Output                 |                     Bottom Output                      | Left Output |
|:-------------:|:-----------------------------------------------------------------:|:--------------------------------------------:|:------------------------------------------------------:|:-----------:|
| 0 V or others |                           Milliseconds                            |                   Seconds                    |                        Minutes                         |    Hours    |
|      1 V      |                              Weekday                              |                     Date                     |                         Month                          |    Year     |
|      2 V      |                    The lowest 32 bits of Ticks                    |         The highest 32 bits of Ticks         |                          0 V                           |     0 V     |
|      3 V      | The time until or since the precipitation starts, in milliseconds | If precipitating, 0xFFFFFFFF V，otherwise 0 V | The time until the precipitation ends, in milliseconds |     0 V     |

</div>

> **Ticks**：Represents the number of 100-nanosecond intervals that have elapsed since 12:00:00 midnight, January 1, 0001 in the Gregorian calendar. It doesn't include the number of ticks that are attributable to leap seconds.

<style module>
.real_time_clock_table td:not(:first-child){
    max-width: 150px;
    min-width: 110px;
}
</style>