<script setup lang="ts">
import UintColorConverter from "/components/UintColorConverter.vue";
</script>

# Memory Bank <Badge text="v1.0" type="info"/>

<img src="/images/base/shift/GVMemoryBankBlock.webp" alt="The image of GV Memory Bank" class="center_image small"/>

## Differences

An element that can store data. Its port definition is the same as the vanilla version. The differences are as follows:

* You must manually set width and height to initialize the memory bank before store data. The width and height cannot be modified after initialization. (But may be overwritten by other operations.)
* The row and column count limits are raised to 2^32^-1, and the product of width and height cannot exceed 2^32^-1.
* If only the top is connected, it outputs its ID.
* When you edit the data in string mode, you should separate every data with`,`and separate every line with`;`. If the data is very much, it is recommended to edit the exported image and import the image again.
* You can import/export data in the edit dialog. The exported file is [PNG](https://www.w3.org/TR/png/) format image.
* You can import not only [PNG](https://www.w3.org/TR/png/) format image, but also`WAV`format audio file encoded in`PCM`, and other files. Details are in the following section.

> This is a failed online editor:[https://xiaofengdizhu.github.io/GVMBEditor](https://xiaofengdizhu.github.io/GVMBEditor)  
> In addition,`Gigavolt.Expand mod` has [Volatile Memory Bank](../../expand/memory_banks/volatile_memory_banks#volatile-memory-banks), which does not need initialization.

## Import & Export

### Export

Gigavolt Memory Bank stores and exports data in lossless [PNG](https://www.w3.org/TR/png/) image, for storing the data which is much more than the vanilla version. And this is why you need to set the length and width before editing, and you cannot modify it after setting. It is recommended not to set the width and height too big, because modification of data requires a long time to encode when saving, and it will cause lag.

When being saved or exported, every data will be stored in the image pixel in`ABGR`color mode. From the highest bit to the lowest bit, every 8 bits will be stored in the <span style="opacity:0.6;">Alpha Channel</span>, <span style="color:blue;">Blue Channel</span>, <span style="color:green;">Green Channel</span>, <span style="color:red;">Red Channel</span>. For example`0xFFDD6655`will be stored as a pixel <span style="display:inline-block;width:1em;height:1em;vertical-align:middle;background-color:#5566DD;"/> with 0xFF alpha, <span style="color:#0000DD;">0xDD</span> Blue, <span style="color:#006600;">0x66</span> Green, <span style="color:#550000;">0x55</span> Red.

::: details 🛠️ Voltage Color Converter

<UintColorConverter />
:::

### Import PNG Format Image File

Every pixel of the importing image will be converted to data in`ABGR`color mode, then the data will be stored in the memory bank. The width and height of the memory bank will be overwritten by the width and height of the importing image.

### Import WAV Format Audio File

Requirements:

* Codec：PCM
* Channels：2
* Sample Rate：8000 \~ 48000 Hz
* Bit Depth：16 bits

Only WAV format audio files meet the requirements can be imported. If the check is passed, the`data chunk`of the WAV file will be stored in the memory bank. For example, if the`data chunk`has 6 16-bit data,`0x0001`&#8203;`0x0002`&#8203;`0x3333`&#8203;`0x4567`&#8203;`0xBA98`&#8203;`0xCDEF`, the data in the memory bank will be `0x00010002`&#8203;`0x33334567`&#8203;`0xBA98CDEF`.

> The data imported successfully can be used with [Sound Generator](sound_generator)

### Import Other File

将从开头直接 32 位、32 位……地读取数据并写入存储器中
It will read data from the beginning of the file in order and store every 32 bits to the memory bank.

> If you import a`UTF8`encoded text file, you can use it with [Sign](sign).