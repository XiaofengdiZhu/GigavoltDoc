# 实时钟 <Badge text="v1.0" type="info"/>

<img src="/images/base/shift/GVRealTimeClockBlock.webp" alt="GV实时钟 图示" class="center_image small"/>

与原版（经典）实时钟类似，但输出的是现实世界的时间（从运行设备获取），正面均为输出，背端是输入

背端不同输入，正面四个端口将会有不同的输出，如下表所示：
<div :class="$style.real_time_clock_table">

|  背端输入   |          上端输出           |           右端输出            |      下端输出      | 左端输出 |
|:-------:|:-----------------------:|:-------------------------:|:--------------:|:----:|
| 0 V 或其他 |           毫秒            |             秒             |       分        |  时   |
|   1 V   |           星期            |             日             |       月        |  年   |
|   2 V   |        计时周期的低32位        |         计时周期的高32位         |      0 V       | 0 V  |
|   3 V   | 距离开始降水的时间，或已经降水的时间，单位毫秒 | 正在降水时 0xFFFFFFFF V，否则 0 V | 距离结束降水的时间，单位毫秒 | 0 V  |

</div>

> 计时周期：自公历 0001 年 1 月 1 日午夜 00:00:00.000 以来经过的以 100 纳秒为间隔的数目，不包括归因于闰秒的嘀嗒数

<style module>
.real_time_clock_table td:not(:first-child){
    max-width: 150px;
    min-width: 110px;
}
</style>