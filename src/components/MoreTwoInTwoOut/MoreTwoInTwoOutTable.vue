<script setup lang="ts">
import locale from "../../../common/locale";
import MoreTwoInTwoOutTr from "./MoreTwoInTwoOutTr.vue";

</script>

<template>
    <table :class="$style.table">
        <thead>
        <tr>
            <th style="text-align: center; min-width: 72px;">
                <div>{{ locale('MoreTwoInTwoOut', 'Icon') }}</div>
                <div>{{ locale('MoreTwoInTwoOut', 'Name') }}</div>
            </th>
            <th style="min-width: 168px;">{{ locale('MoreTwoInTwoOut', 'LeftInput') }}</th>
            <th style="min-width: 168px;">{{ locale('MoreTwoInTwoOut', 'RightInput') }}</th>
            <th style="min-width: 184px; width: 184px;">{{ locale('MoreTwoInTwoOut', 'BasicOutput') }}</th>
            <th style="min-width: 184px; width: 184px;">{{ locale('MoreTwoInTwoOut', 'OverflowOutput') }}</th>
        </tr>
        </thead>
        <tbody>
        <MoreTwoInTwoOutTr type="Adder" :defaultLeftInputDecimal="4294967295" :defaultRightInputDecimal="16" :outputFunc="(left, right) => {let num = left + right; return [(num & 0xFFFFFFFF)>>>0, num > 0xFFFFFFFF ? 1 : 0]}"/>
        <MoreTwoInTwoOutTr type="Subtracter" :defaultLeftInputDecimal="1" :defaultRightInputDecimal="16" :outputFunc="(left, right) => {let num = left - right; return [(num & 0xFFFFFFFF)>>>0, left < right ? 1 : 0]}"/>
        <MoreTwoInTwoOutTr type="Multiplier" :defaultLeftInputDecimal="305419896" :defaultRightInputDecimal="2271560481" :outputFunc="(left, right) => {let num = BigInt(left) * BigInt(right); return [Number((num & BigInt(0xFFFFFFFF))), Number(num >> 32n)]}"/>
        <MoreTwoInTwoOutTr type="Divider" :defaultLeftInputDecimal="11" :defaultRightInputDecimal="4" :outputFunc="(left, right) => [right === 0 ? 0 : Math.floor(left / right), 0]"/>
        <MoreTwoInTwoOutTr type="Remainder" :defaultLeftInputDecimal="11" :defaultRightInputDecimal="4" :outputFunc="(left, right) => [right === 0 ? 0 : Math.floor(left % right), 0]"/>
        <MoreTwoInTwoOutTr type="Equaler" :defaultLeftInputDecimal="10" :defaultRightInputDecimal="7" :outputFunc="(left, right) => [left == right ? 0xFFFFFFFF : 0, 0]"/>
        <MoreTwoInTwoOutTr type="Greater" :defaultLeftInputDecimal="10" :defaultRightInputDecimal="7" :outputFunc="(left, right) => [left > right ? 0xFFFFFFFF : 0, 0]"/>
        <MoreTwoInTwoOutTr type="NoLesser" :defaultLeftInputDecimal="10" :defaultRightInputDecimal="7" :outputFunc="(left, right) => [left >= right ? 0xFFFFFFFF : 0, 0]"/>
        <MoreTwoInTwoOutTr type="Lesser" :defaultLeftInputDecimal="10" :defaultRightInputDecimal="7" :outputFunc="(left, right) => [left < right ? 0xFFFFFFFF : 0, 0]"/>
        <MoreTwoInTwoOutTr type="NoGreater" :defaultLeftInputDecimal="10" :defaultRightInputDecimal="7" :outputFunc="(left, right) => [left <= right ? 0xFFFFFFFF : 0, 0]"/>
        <MoreTwoInTwoOutTr type="Maximumer" :defaultLeftInputDecimal="10" :defaultRightInputDecimal="7" :outputFunc="(left, right) => [Math.max(left, right), 0]"/>
        <MoreTwoInTwoOutTr type="Minimumer" :defaultLeftInputDecimal="10" :defaultRightInputDecimal="7" :outputFunc="(left, right) => [Math.min(left, right), 0]"/>
        <MoreTwoInTwoOutTr type="LeftShifter" :defaultLeftInputDecimal="305419896" :defaultRightInputDecimal="16" :outputFunc="(left, right) => {let num = BigInt(left) << BigInt(right); return [Number((num & BigInt(0xFFFFFFFF))), Number(num >> 32n)]}"/>
        <MoreTwoInTwoOutTr type="RightShifter" :defaultLeftInputDecimal="305419896" :defaultRightInputDecimal="16" :outputFunc="(left, right) => [left >> right, Number((BigInt(left) << 32n) >> BigInt(right) & 0xFFFFFFFFn)]"/>
        <MoreTwoInTwoOutTr type="Power" :defaultLeftInputDecimal="2" :defaultRightInputDecimal="48" :outputFunc="(left, right) => {let num = BigInt(left) ** BigInt(right); return [Number((num & BigInt(0xFFFFFFFF))), Number(num >> 32n)]}"/>
        <MoreTwoInTwoOutTr type="Logarithmer" :defaultLeftInputDecimal="1024" :defaultRightInputDecimal="2" :outputFunc="(left, right) => [Math.log(left) / Math.log(right), 0]"/>
        </tbody>
    </table>
</template>

<style module>
.table > tbody > tr > td {
    vertical-align: top;

    &:first-child {
        text-align: center;
    }
}
</style>