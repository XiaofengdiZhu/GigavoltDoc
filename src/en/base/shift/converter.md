# D/A & A/D Converter <Badge text="v1.0" type="info"/>

## Digital to Analog Converter

Changed to 4 combiners：

<table :class="$style.img_width_100">
    <tbody>
        <tr>
            <td>GV Combine<br/>1 to 4 Converter</td>
            <td>GV Combine<br/>2 to 8 Converter</td>
            <td>GV Combine<br/>4 to 16 Converter</td>
            <td>GV Combine<br/>8 to 32 Converter</td>
        </tr>
        <tr>
            <td><img src="/images/base/shift/GVDigitalToAnalogConverterBlock1-4.webp" alt="The image of GV Combine 1 to 4 Converter"/></td>
            <td><img src="/images/base/shift/GVDigitalToAnalogConverterBlock2-8.webp" alt="The image of GV Combine 2 to 8 Converter"/></td>
            <td><img src="/images/base/shift/GVDigitalToAnalogConverterBlock4-16.webp" alt="The image of GV Combine 4 to 16 Converter"/></td>
            <td><img src="/images/base/shift/GVDigitalToAnalogConverterBlock8-32.webp" alt="The image of GV Combine 8 to 32 Converter"/></td>
        </tr>
    </tbody>
</table>
The converter takes the lowest n bits of each input, and combines them in order, finally outputs the result at the back. For example:

<table :class="$style.td_center">
    <thead>
        <tr>
            <th>Direction</th>
            <th>Base</th>
            <th>Left</th>
            <th>Bottom</th>
            <th>Right</th>
            <th>Top</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Input Voltage</td>
            <td>Hex</td>
            <td class="mono">0x44444444</td>
            <td class="mono">0x33333333</td>
            <td class="mono">0x22222222</td>
            <td class="mono">0x11111111</td>
        </tr>
        <tr>
            <td>The Lowest 1 Bit</td>
            <td>Bin</td>
            <td class="mono gray">0</td>
            <td class="mono blue">1</td>
            <td class="mono green">0</td>
            <td class="mono red">1</td>
        </tr>
        <tr>
            <td rowspan="2">The Result of Combine 1 to 4</td>
            <td>Bin</td>
            <td colspan="4" class="mono"><span class="gray">0</span><span class="blue">1</span><span class="green">0</span><span class="red">1</span></td>
        </tr>
        <tr>
            <td>Hex</td>
            <td colspan="4" class="mono">0x5</td>
        </tr>
        <tr>
            <td>The Lowest 2 Bits</td>
            <td>Bin</td>
            <td class="mono gray">00</td>
            <td class="mono blue">11</td>
            <td class="mono green">10</td>
            <td class="mono red">01</td>
        </tr>
        <tr>
            <td rowspan="2">The Result of Combine 2 to 8</td>
            <td>Bin</td>
            <td colspan="4" class="mono"><span class="gray">00</span><span class="blue">11</span> <span class="green">10</span><span class="red">01</span></td>
        </tr>
        <tr>
            <td>Hex</td>
            <td colspan="4" class="mono">0x39</td>
        </tr>
        <tr>
            <td>The Lowest 4 Bits</td>
            <td>Bin</td>
            <td class="mono gray">0100</td>
            <td class="mono blue">0011</td>
            <td class="mono green">0010</td>
            <td class="mono red">0001</td>
        </tr>
        <tr>
            <td rowspan="2">The Result of Combine 4 to 16</td>
            <td>Bin</td>
            <td colspan="4" class="mono"><span class="gray">0100</span> <span class="blue">0011</span> <span class="green">0010</span> <span class="red">0001</span></td>
        </tr>
        <tr>
            <td>Hex</td>
            <td colspan="4" class="mono">0x4321</td>
        </tr>
        <tr>
            <td>The Lowest 8 Bits</td>
            <td>Bin</td>
            <td class="mono gray">0100 0100</td>
            <td class="mono blue">0011 0011</td>
            <td class="mono green">0010 0010</td>
            <td class="mono red">0001 0001</td>
        </tr>
        <tr>
            <td rowspan="2" style="border-bottom-left-radius: 8px;">The Result of Combine 8 to 32</td>
            <td>Bin</td>
            <td colspan="4" class="mono"><span class="gray">0100 0100</span> <span class="blue">0011 0011</span> <span class="green">0010 0010</span> <span class="red">0001 0001</span></td>
        </tr>
        <tr>
            <td style="border-radius: 0;">Hex</td>
            <td colspan="4" class="mono">0x44332211</td>
        </tr>
    </tbody>
</table>

## Analog to Digital Converter

In the same way, changed to 4 splitters:

<table :class="$style.img_width_100">
    <tbody>
        <tr>
            <td>GV Split 4 to<br/> 1 Converter</td>
            <td>GV Split 8 to<br/> 2 Converter</td>
            <td>GV Split 16 to<br/> 4 Converter</td>
            <td>GV Split 32 to<br/> 8 Converter</td>
        </tr>
        <tr>
            <td><img src="/images/base/shift/GVDigitalToAnalogConverterBlock1-4.webp" alt="The image of GV Split 4 to 1 Converter"/></td>
            <td><img src="/images/base/shift/GVDigitalToAnalogConverterBlock2-8.webp" alt="The image of GV Split 8 to 2 Converter"/></td>
            <td><img src="/images/base/shift/GVDigitalToAnalogConverterBlock4-16.webp" alt="The image of GV Split 16 to 4 Converter"/></td>
            <td><img src="/images/base/shift/GVDigitalToAnalogConverterBlock8-32.webp" alt="The image of GV Split 32 to 8 Converter"/></td>
        </tr>
    </tbody>
</table>

Before splitting, the converter takes the lowest n bits of each input, and outputs the split result in order. For example, if the back input is 0x12345678 V:

<table :class="$style.td_center">
    <thead>
        <tr>
            <th>Direction</th>
            <th>Base</th>
            <th>Left</th>
            <th>Bottom</th>
            <th>Right</th>
            <th>Top</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Whole 32 bits</td>
            <td>Bin</td>
            <td colspan="4" class="mono"><span class="gray">0001 0010</span> <span class="blue">0011 0100</span> <span class="green">0101 0110</span> <span class="red">0111 1000</span></td>
        </tr>
        <tr>
            <td rowspan="2">The Result of Split 32 to 8</td>
            <td>Bin</td>
            <td class="mono gray">0001 0010</td>
            <td class="mono blue">0011 0100</td>
            <td class="mono green">0101 0110</td>
            <td class="mono red">0111 1000</td>
        </tr>
        <tr>
            <td>Hex</td>
            <td class="mono gray">12</td>
            <td class="mono blue">34</td>
            <td class="mono green">56</td>
            <td class="mono red">78</td>
        </tr>
        <tr>
            <td>The Lowest 16 bits</td>
            <td>Bin</td>
            <td colspan="4" class="mono"><span class="gray">0101</span> <span class="blue">0110</span> <span class="green">0111</span> <span class="red">1000</span></td>
        </tr>
        <tr>
            <td rowspan="2">The Result of Split 16 to 4</td>
            <td>Bin</td>
            <td class="mono gray">0101</td>
            <td class="mono blue">0110</td>
            <td class="mono green">0111</td>
            <td class="mono red">1000</td>
        </tr>
        <tr>
            <td>Hex</td>
            <td class="mono gray">5</td>
            <td class="mono blue">6</td>
            <td class="mono green">7</td>
            <td class="mono red">8</td>
        </tr>
        <tr>
            <td>The Lowest 8 bits</td>
            <td>Bin</td>
            <td colspan="4" class="mono"><span class="gray">01</span><span class="blue">11</span> <span class="green">10</span><span class="red">00</span></td>
        </tr>
        <tr>
            <td rowspan="2">The Result of Split 8 to 2</td>
            <td>Bin</td>
            <td class="mono gray">01</td>
            <td class="mono blue">11</td>
            <td class="mono green">10</td>
            <td class="mono red">00</td>
        </tr>
        <tr>
            <td>Hex</td>
            <td class="mono gray">1</td>
            <td class="mono blue">3</td>
            <td class="mono green">2</td>
            <td class="mono red">0</td>
        </tr>
        <tr>
            <td>The Lowest 4 bits</td>
            <td>Bin</td>
            <td colspan="4" class="mono"><span class="gray">1</span><span class="blue">0</span><span class="green">0</span><span class="red">0</span></td>
        </tr>
        <tr>
            <td>The Result of Split 4 to 1</td>
            <td>Bin</td>
            <td class="mono gray">1</td>
            <td class="mono blue">0</td>
            <td class="mono green">0</td>
            <td class="mono red">0</td>
        </tr>
    </tbody>
</table>

<style module>
.td_center th, .td_center td {
    text-align: center;
}
.img_width_100 img {
    width: 100%;
    image-rendering: pixelated;
    border-radius: 8px;
}
</style>