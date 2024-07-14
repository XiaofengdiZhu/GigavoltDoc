# 新增元件

## 总线

外观为橙色的特殊导线，只能与有色导线、有色元件相连接，来自不同颜色导线、元件的信号能互不干扰地在总线中传输，能大幅优化排线

<img src="/images/base/new/wire_harness_example.webp" alt="总线用例 图示" style="max-width: min(100%, 500px); margin: 0 auto;"/>

## 单向二极管

电压只能单向导通的二极管，延迟 1 个电路周期（0.01 秒，本质上是延迟门），只提供有颜色版本

<img src="/images/base/new/diode.webp" alt="新增的二极管 图示" style="max-width: min(100%, 500px); margin: 0 auto;"/>

## 4 种 LED 灯

* **8 x 4 面 LED 灯**：原版中的 4 面 LED 灯显通过 4 个小灯来展示 4 位二进制信号的情况，该元件则通过 32个小灯来展示十亿伏特 32 位二进制信号的情况
* **4 x 4 面 LED 灯**：取输入电压的最低 16 位后展示之
* **4 x 2 面 LED 灯**：取输入电压的最低 8 位后展示之
* **8 数字 LED 灯**：相当于 8 个原版中的 7 段显示器，通过 8 个十六进制数字直观地展示 32 位二进制信号的情况

<table :class="$style.led_table">
    <tbody>
        <tr>
            <td>8 x 4 面 LED 灯</td>
            <td>4 x 4 面 LED 灯</td>
            <td>4 x 2 面 LED 灯</td>
            <td>8 数字 LED 灯</td>
        </tr>
        <tr>
            <td><img src="/images/base/new/GV8x4LedBlockFull.webp" alt="1 位合并 4 位器 图示"/></td>
            <td><img src="/images/base/new/GV4x4LedBlockFull.webp" alt="2 位合并 8 位器 图示"/></td>
            <td><img src="/images/base/new/GV4x2LedBlockFull.webp" alt="4 位合并 16 位器 图示"/></td>
            <td><img src="/images/base/new/GV8NumberLedBlockFull.webp" alt="8 位合并 32 位器 图示"/></td>
        </tr>
    </tbody>
</table>

## 变压器

### 十亿伏特转原版变压器

下端连接十亿伏特元件或导线，输入十亿伏特 32 位电压，取最低 4 位转换为原版电压，向上端输出

<img src="/images/base/new/GV2OTransformerBlock.webp" alt="十亿伏特转原版变压器 图示" style="max-width: min(100%, 80px); margin: 0 auto;"/>

### 原版转十亿伏特变压器

下端连接原版元件或导线，输入原版 4 位电压，向上端输出等值的十亿伏特电压

<img src="/images/base/new/O2GVTransformerBlock.webp" alt="十亿伏特转原版变压器 图示" style="max-width: min(100%, 80px); margin: 0 auto;"/>

## 调试石碑

另见 [调试](debug.md)


<style module>
.led_table img {
    width: 100px;
    image-rendering: pixelated;
}
:global(html:not(.dark)) .led_table tr:nth-child(2) {
    background-color: rgba(from var(--highContrast) r g b / 0.2);
}
</style>