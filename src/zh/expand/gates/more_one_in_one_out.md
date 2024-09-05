<script setup lang="ts">
import MoreOneInOneOutTable from "../../../components/MoreOneInOneOut/MoreOneInOneOutTable.vue"
</script>

# 更多单入单出电路板 <Badge text="v1.0" type="info"/>

## 概述

该类电路板均在`十亿伏特 复数`分类中，共同点有：

* 下端是输入端
* 上端和后端是电压相同的输出端
* 输入和输出的最高位为 1 时代表负数（原码模式），较高的第 17\~31 位为整数部分，较低的第 1\~16 位为小数部分
* 三角函数相关电路板的单位为弧度制

## 具体

<MoreOneInOneOutTable />

> [!TIP] 📝 关于原码正负转换
> 即只把输入的最高位取反

> [!WARNING] 📝 关于补码正负转换
> 在输入的最高位为 0 时，输出为输入的所有位取反后加 1  
> 输入的最高位为 1 时，输出为输入减去 1 后再对所有位取反