# 存储器 <Badge text="1.0"/>

<img src="/images/base/shift/GVMemoryBankBlock.webp" alt="GV存储器 图示" class="center_image small"/>

## 区别

能够存储数据的元件，该元件的端口定义与原版相同，不再复述，区别如下：

* 必须先设置存储器的宽、高后方可存储数据，设置后无法修改宽、高
* 宽、高上限提高到了 2^32^-1，两者乘积不得超过 2^32^-1
* 各输入端均未连接元件或导线时，上端将输出该存储器的ID
* 编辑时，每个数据用英文逗号`,`分开，每行数据用英文分号`;`分开，数据量时建议导出后编辑
* 可在编辑界面导出/导入数据，导出的文件为 [PNG](https://www.w3.org/TR/png/) 格式的图片
* 除了能导入 [PNG](https://www.w3.org/TR/png/) 格式图片，还能导入`PCM`编码的`WAV`格式的音频文件、其他文件，详见下文

> 附失败的在线编辑器[https://xiaofengdizhu.github.io/GVMBEditor](https://xiaofengdizhu.github.io/GVMBEditor)

## 技术细节

### 数据保存

为存储远超原版的数据量，十亿伏特版存储器将数据保存为了无损 [PNG](https://www.w3.org/TR/png/) 格式图片，这也导致必须先设定好长、宽，而且之后不能修改，另外建议不要设置过大的长宽，因为每次修改数据后，存档时编码需耗费较长时间，导致卡顿

数据保存时，会按`ABGR`颜色模式保存到每个像素的颜色中，从高位到低位，分别为颜色的<span style="opacity:0.6;">Alpha 透明度通道</span>、<span style="color:blue;">Blue 蓝色通道</span>、<span style="color:green;">Green 绿色通道</span>、<span style="color:red;">Red 红色通道</span>，例如 `0xFFDD6655` 会被储存为透明度为 0xFF，蓝色为 <span style="color:#0000DD;">0xDD</span>，绿色为 <span style="color:#006600;">0x66</span>，红色为 <span style="color:#550000;">0x55</span> 的像素 <span style="display:inline-block;width:1em;height:1em;vertical-align:middle;background-color:#5566DD;"/>

### 导入 WAV 格式音频文件

具体要求为

* 编码：PCM
* 声道数：2
* 采样率：8000 \~ 48000 Hz
* 采样深度：16位

符合要求的 WAV 格式音频文件才能被导入，检测通过后将自动导入该文件的`data chunk`部分，例如`data chunk`有 6 个 16 位数据，分别为`0x0001`、`0x0002`、`0x3333`、`0x4567`、`0xBA98`、`0xCDEF`，存储器的数据将是：`0x00010002`、`0x33334567`、`0xBA98CDEF`

> 导入成功的数据，可配合 [声音发生器]() 使用

### 导入其他文件

将从开头直接 32 位、32 位……地读取数据并写入存储器中

> 导入`UTF8`编码的文本文件，可配合 [告示牌]() 使用