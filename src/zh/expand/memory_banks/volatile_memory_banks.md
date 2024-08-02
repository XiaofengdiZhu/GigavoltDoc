# 多种易失性存储器

## 概述

名字带`易失性`的存储器和名字不带`易失性`的存储器功能基本一致，区别在于易失性存储器将在退出存档时丢弃所有数据，仅保存 ID 等少量设置信息

## 易失性存储器

<img alt="易失性存储器 图示" src="/images/expand/memory_banks/GVVolatileMemoryBankBlock.webp" class="center_image small">

[存储器](../../base/shift/memory_bank) 的易失版，无需初始化即可使用

## 易失性一维存储器

<img alt="易失性一维存储器 图示" src="/images/expand/memory_banks/GVVolatileListMemoryBankBlock.webp" class="center_image small">

[一维存储器](list_memory_bank) 的易失版，也无需初始化即可使用

## 易失性四维存储器

<img alt="易失性四维存储器 图示" src="/images/expand/memory_banks/GVVolatileFourDimensionalMemoryBankBlock.webp" class="center_image small">

[四维存储器](four_dimensional_memory_bank) 的易失版，仍然 **需要初始化** 才能使用