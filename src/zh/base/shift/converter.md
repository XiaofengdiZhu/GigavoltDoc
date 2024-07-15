# 数模、模数转换器 <Badge text="1.0"/>

## 数模转换器

变更为了 4 个合并器，分别是：

<table :class="$style.img_width_100px">
    <tbody>
        <tr>
            <td>1 位合并 4 位器</td>
            <td>2 位合并 8 位器</td>
            <td>4 位合并 16 位器</td>
            <td>8 位合并 32 位器</td>
        </tr>
        <tr>
            <td><img src="/images/base/shift/GVDigitalToAnalogConverterBlock1-4.webp" alt="1 位合并 4 位器 图示"/></td>
            <td><img src="/images/base/shift/GVDigitalToAnalogConverterBlock2-8.webp" alt="2 位合并 8 位器 图示"/></td>
            <td><img src="/images/base/shift/GVDigitalToAnalogConverterBlock4-16.webp" alt="4 位合并 16 位器 图示"/></td>
            <td><img src="/images/base/shift/GVDigitalToAnalogConverterBlock8-32.webp" alt="8 位合并 32 位器 图示"/></td>
        </tr>
    </tbody>
</table>
对于要被合并的四个输入，分别取它们最低的 n 位，按顺序进行合并，最后从后端输出，例如按下表输入电压：

<table :class="$style.td_center">
    <thead>
        <tr>
            <th>端口</th>
            <th>进制</th>
            <th>左端</th>
            <th>下端</th>
            <th>右端</th>
            <th>上端</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>输入电压</td>
            <td>十六进制</td>
            <td class="mono">0x44444444</td>
            <td class="mono">0x33333333</td>
            <td class="mono">0x22222222</td>
            <td class="mono">0x11111111</td>
        </tr>
        <tr>
            <td>最低 1 位</td>
            <td>二进制</td>
            <td class="mono red">0</td>
            <td class="mono green">1</td>
            <td class="mono orange">0</td>
            <td class="mono blue">1</td>
        </tr>
        <tr>
            <td rowspan="2">1 位合并 4 位器结果</td>
            <td>二进制</td>
            <td colspan="4" class="mono"><span class="red">0</span><span class="green">1</span><span class="orange">0</span><span class="blue">1</span></td>
        </tr>
        <tr>
            <td>十六进制</td>
            <td colspan="4" class="mono">0x5</td>
        </tr>
        <tr>
            <td>最低 2 位</td>
            <td>二进制</td>
            <td class="mono red">00</td>
            <td class="mono green">11</td>
            <td class="mono orange">10</td>
            <td class="mono blue">01</td>
        </tr>
        <tr>
            <td rowspan="2">2 位合并 8 位器结果</td>
            <td>二进制</td>
            <td colspan="4" class="mono"><span class="red">00</span><span class="green">11</span> <span class="orange">10</span><span class="blue">01</span></td>
        </tr>
        <tr>
            <td>十六进制</td>
            <td colspan="4" class="mono">0x39</td>
        </tr>
        <tr>
            <td>最低 4 位</td>
            <td>二进制</td>
            <td class="mono red">0100</td>
            <td class="mono green">0011</td>
            <td class="mono orange">0010</td>
            <td class="mono blue">0001</td>
        </tr>
        <tr>
            <td rowspan="2">4 位合并 16 位器结果</td>
            <td>二进制</td>
            <td colspan="4" class="mono"><span class="red">0100</span> <span class="green">0011</span> <span class="orange">0010</span> <span class="blue">0001</span></td>
        </tr>
        <tr>
            <td>十六进制</td>
            <td colspan="4" class="mono">0x4321</td>
        </tr>
        <tr>
            <td>最低 8 位</td>
            <td>二进制</td>
            <td class="mono red">0100 0100</td>
            <td class="mono green">0011 0011</td>
            <td class="mono orange">0010 0010</td>
            <td class="mono blue">0001 0001</td>
        </tr>
        <tr>
            <td rowspan="2">8 位合并 32 位器结果</td>
            <td>二进制</td>
            <td colspan="4" class="mono"><span class="red">0100 0100</span> <span class="green">0011 0011</span> <span class="orange">0010 0010</span> <span class="blue">0001 0001</span></td>
        </tr>
        <tr>
            <td>十六进制</td>
            <td colspan="4" class="mono">0x44332211</td>
        </tr>
    </tbody>
</table>

## 模数转换器

同样的，变更为 4 个拆分器，分别是：

<table :class="$style.img_width_100px">
    <tbody>
        <tr>
            <td>4 位拆分 1 位器</td>
            <td>8 位拆分 2 位器</td>
            <td>16 位拆分 4 位器</td>
            <td>32 位拆分 8 位器</td>
        </tr>
        <tr>
            <td><img src="/images/base/shift/GVDigitalToAnalogConverterBlock1-4.webp" alt="4 位拆分 1 位器 图示"/></td>
            <td><img src="/images/base/shift/GVDigitalToAnalogConverterBlock2-8.webp" alt="8 位拆分 2 位器 图示"/></td>
            <td><img src="/images/base/shift/GVDigitalToAnalogConverterBlock4-16.webp" alt="16 位拆分 4 位器 图示"/></td>
            <td><img src="/images/base/shift/GVDigitalToAnalogConverterBlock8-32.webp" alt="32 位拆分 8 位器 图示"/></td>
        </tr>
    </tbody>
</table>

后端输入在拆分前会先取其最低的 n 位，再按顺序输出拆分结果，例如后端输入电压为 0x12345678 V：

<table :class="$style.td_center">
    <thead>
        <tr>
            <th>端口</th>
            <th>进制</th>
            <th>左端</th>
            <th>下端</th>
            <th>右端</th>
            <th>上端</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>全部 32 位</td>
            <td>二进制</td>
            <td colspan="4" class="mono"><span class="red">0001 0010</span> <span class="green">0011 0100</span> <span class="orange">0101 0110</span> <span class="blue">0111 1000</span></td>
        </tr>
        <tr>
            <td rowspan="2">32 位拆分 8 位器结果</td>
            <td>二进制</td>
            <td class="mono red">0001 0010</td>
            <td class="mono green">0011 0100</td>
            <td class="mono orange">0101 0110</td>
            <td class="mono blue">0111 1000</td>
        </tr>
        <tr>
            <td>十六进制</td>
            <td class="mono red">12</td>
            <td class="mono green">34</td>
            <td class="mono orange">56</td>
            <td class="mono blue">78</td>
        </tr>
        <tr>
            <td>最低 16 位</td>
            <td>二进制</td>
            <td colspan="4" class="mono"><span class="red">0101</span> <span class="green">0110</span> <span class="orange">0111</span> <span class="blue">1000</span></td>
        </tr>
        <tr>
            <td rowspan="2">16 位拆分 4 位器结果</td>
            <td>二进制</td>
            <td class="mono red">0101</td>
            <td class="mono green">0110</td>
            <td class="mono orange">0111</td>
            <td class="mono blue">1000</td>
        </tr>
        <tr>
            <td>十六进制</td>
            <td class="mono red">5</td>
            <td class="mono green">6</td>
            <td class="mono orange">7</td>
            <td class="mono blue">8</td>
        </tr>
        <tr>
            <td>最低 8 位</td>
            <td>二进制</td>
            <td colspan="4" class="mono"><span class="red">01</span><span class="green">11</span> <span class="orange">10</span><span class="blue">00</span></td>
        </tr>
        <tr>
            <td rowspan="2">4 位拆分 1 位器结果</td>
            <td>二进制</td>
            <td class="mono red">01</td>
            <td class="mono green">11</td>
            <td class="mono orange">10</td>
            <td class="mono blue">00</td>
        </tr>
        <tr>
            <td>十六进制</td>
            <td class="mono red">1</td>
            <td class="mono green">3</td>
            <td class="mono orange">2</td>
            <td class="mono blue">0</td>
        </tr>
        <tr>
            <td>最低 4 位</td>
            <td>二进制</td>
            <td colspan="4" class="mono"><span class="red">1</span><span class="green">0</span><span class="orange">0</span><span class="blue">0</span></td>
        </tr>
        <tr>
            <td>4 位拆分 1 位器结果</td>
            <td>二进制</td>
            <td class="mono red">1</td>
            <td class="mono green">0</td>
            <td class="mono orange">0</td>
            <td class="mono blue">0</td>
        </tr>
    </tbody>
</table>

<style module>
.td_center th, .td_center td {
    text-align: center;
}
.img_width_100px img {
    width: 100px;
    image-rendering: pixelated;
}
</style>