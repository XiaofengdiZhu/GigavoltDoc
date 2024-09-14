---
outline: 2
---

<script setup lang="ts">
import UintColorConverter from "/components/UintColorConverter.vue";
import Detonator from "/components/Detonator/Detonator.vue";
</script>

# 简单元件的变体

> 原版可与电路交互的`木刺陷阱`&#8203;`圣诞树`&#8203;`火药桶`&#8203;`温度计`&#8203;`湿度计`，本 mod 未提供经典版或变体版

## 导线 <Badge text="v2.0"/>

* ⭕ **原版**：创造模式物品栏提供 7 种颜色的导线
* ⚡ **十亿伏特版**：创造模式物品栏提供 14 种颜色的导线，新增 [总线](../new/elements#总线)，新增的总线和有色导线如图，它们在`十亿伏特 变体`分类中

<img src="/images/base/shift/wire.webp" alt="新增的有色导线和总线 图示" class="center_image"/>

## 可调延迟门 <Badge text="v2.0"/>

### ⭕ 原版

* 顶部、背面输出
* 需手动弹窗调节延迟时长

### ⚡ 十亿伏特版

* 顶部输出
* 不可手动调节延迟时长，需通过背面输入的电压可调节，初始延迟 0.01 秒，背面输入电压每加 1 V，延迟增加 0.01 秒，背面输入大于等于 0xFF V 时，延迟达到最大值 2.56 秒

## SR 锁存器 <Badge text="v1.0" type="info"/>

* ⭕ **原版**：S 端输入一个大于 0.7 V 的信号，输出端锁定为 1.5 V，直到被重置
* ⚡ **十亿伏特版**：S 端输入一个大于 0 V 的信号，输出端锁定为此时 S 端的电压，直到被重置

## 开关、按钮、电池 <Badge text="v2.0"/>

### ⭕ 原版

默认输出 1.5 V

### ⚡ 十亿伏特版

* 默认输出 0xFFFFFFFF V

> [!CAUTION] ⚠ 不会重复的说明
> 其他原本默认输出 1.5 V 的元件也将默认输出 0xFFFFFFFF V，包括经典版元件

* 按钮可通过手动编辑，设置输出的持续周期数
* 按钮和开关增加带颜色的版本，它们不会与异色导线相连接（除了总线），这些有颜色的按钮和开关均在`十亿伏特 复数`分类中

<img src="/images/base/shift/switch_and_button.webp" alt="新增的有色导线和总线 图示" class="center_image"/>

* 适配 32 位电压的编辑界面，如图：

<img src="/images/base/shift/EditGVUintDialog_zh.webp" alt="电压编辑界面 图示" class="center_image"/>

> **十进制定点数**：此处是指，按小数点在第 16、17 位之间，最高位为符号位，转换而来的结果

## 计数器 <Badge text="v1.0" type="info"/>

### ⭕ 原版

默认溢出电压为 1.6 V，上限为 1.5 V

### ⚡ 十亿伏特版

* 默认溢出电压为 0x100000000 V，上限 0xFFFFFFFF V
* 可通过手动编辑，设置溢出、初始电压，还能直接调整当前电压

## 压力板 <Badge text="v1.0" type="info"/>

* ⭕ **原版**：有压力时输出 0.8 \~ 1.5 V，随意设置的压力与电压关系
* ⚡ **十亿伏特版**：输出准确的压力值，参考结果：男性玩家 0x46 V，虎鲸 0x5DC V

## 活塞 <Badge text="v2.0"/>

### ⭕ 原版

* 输入大于 0.7 V 电压时开始伸长
* 最大伸长、推拉 8 格

### ⚡ 十亿伏特版

* 输入大于 0 V 电压时开始伸长
* 最大伸长、推拉 2^32^-1 格（推拉过多方块时卡住是游戏其他子系统问题）
* 更多速度选项
* 新增隐藏延长杆的选项（伸缩时生效）
* 另有 [复杂版](complex_piston)

## 彩色 LED、1 面 LED <Badge text="v1.0" type="info"/>

### ⭕ 原版

输入 0.8 \~ 1.5 V 对应8种不同颜色

### ⚡ 十亿伏特版

* 所有输入电压均对应不同颜色（ABGR 颜色模式，当透明度通道大于 0 时）
* 1 面 LED 整面全部发光，可无缝拼接

> [!TIP] 📝 ABGR 颜色模式
> 从高位到低位，每 8 位分别为颜色的 <span style="opacity:0.6;">Alpha 透明度通道</span>、<span style="color:blue;">Blue 蓝色通道</span>、<span style="color:green;">Green 绿色通道</span>、<span style="color:red;">Red 红色通道</span>，可使用下面的电压颜色转换器来转换

::: details 🛠️ 电压颜色转换器

<UintColorConverter />
:::

## 靶子 <Badge text="v1.0" type="info"/>

* ⭕ **原版**：根据距离中心的距离输出 0.8 \~ 1.5 V
* ⚡ **十亿伏特版**：根据距离中心的距离输出 0 \~ 0xFFFFFF00 V，因游戏坐标精度问题，最低 8 位始终为 0

## 电子雷管 <Badge text="v1.0" type="info"/>

<Detonator/>

* ⭕ **原版**：输入 0.8 V 及以上电压产生威力为 10 的爆炸
* ⚡ **十亿伏特版**：输入 0 V 以上电压产生威力等于电压值的爆炸，输入 0xFFFFFFFF V 有彩蛋

## 大门、栅栏门、活板门 <Badge text="v1.0" type="info"/>

* ⭕ **原版**：收到的电压由 0.7 V 及以下上升到 0.8V 及以上时，开门或关门
* ⚡ **十亿伏特版**：根据输入的电压强度调整打开程度，0V闭合，0x2D V 时打开45度，0x5A V 及以上时完全打开；不提供与原版完全一致的经典版

## 复杂元件

另见：

* [数模、模数转换器](converter) - 变更为 4 个合并器、4 个拆分器
* [存储器](memory_bank) - 宽、高上限提高到了 2^32^-1
* [真值表](truth_table) - 除了能像经典版一样根据指定的输入输出电压，还能编写表达式进行计算
* [实时钟](real_time_clock) - 输出现实世界的时间
* [声音发生器](sound_generator) - 播放 PCM 编码的音频数据
* [复杂活塞](complex_piston) - 完全由电压控制的活塞，一旦电压变化就会尝试调整
* [告示牌](sign) - 可悬浮显示文字
* [发射器](dispenser) - 可以通过输入的电压来控制射出的速度、角度等，默认为发射模式，一旦电压变化就会尝试发射或丢出