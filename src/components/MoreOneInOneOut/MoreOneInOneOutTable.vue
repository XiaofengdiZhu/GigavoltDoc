<script setup lang="ts">
import locale from "../../../common/locale";
import MoreOneInOneOutTr from "./MoreOneInOneOutTr.vue";

const SMROutputAction = (input: number | string) => {
    return ((parseInt(input as string, 16) ^ 0x80000000) >>> 0).toString(16);
}

const TCROutputAction = (input: number | string) => {
    let num = parseInt(input as string, 16);
    if (num >>> 31 === 1) {
        return (~(num - 1)).toString(16).toUpperCase();
    }
    else {
        return ((~num + 1) >>> 0).toString(16);
    }
}
</script>

<template>
    <table :class="$style.table">
        <thead>
        <tr>
            <th style="text-align: center;">{{ locale('MoreOneInOneOut', 'Icon') }}</th>
            <th style="text-align: center; min-width: 72px;">{{ locale('MoreOneInOneOut', 'Name') }}</th>
            <th style="min-width: 152px;">{{ locale('MoreOneInOneOut', 'Input') }}</th>
            <th style="min-width: 188px;">{{ locale('MoreOneInOneOut', 'Output') }}</th>
        </tr>
        </thead>
        <tbody>
        <MoreOneInOneOutTr type="Sin" :defaultInputDecimal="1.0472" :outputFunc="(input:number|string)=>Math.sin(input as number)"/>
        <MoreOneInOneOutTr type="Cos" :defaultInputDecimal="1.0472" :outputFunc="(input:number|string)=>Math.cos(input as number)"/>
        <MoreOneInOneOutTr type="Tan" :defaultInputDecimal="1.0472" :outputFunc="(input:number|string)=>Math.tan(input as number)"/>
        <MoreOneInOneOutTr type="Cot" :default-input-decimal="1.0472" :outputFunc="(input:number|string)=>1/Math.tan(input as number)"/>
        <MoreOneInOneOutTr type="Sec" :default-input-decimal="1.0472" :outputFunc="(input:number|string)=>1/Math.cos(input as number)"/>
        <MoreOneInOneOutTr type="Csc" :default-input-decimal="1.0472" :outputFunc="(input:number|string)=>1/Math.cos(input as number)"/>
        <MoreOneInOneOutTr type="Asin" :defaultInputDecimal="0.5" :outputFunc="(input:number|string)=>Math.asin(input as number)"/>
        <MoreOneInOneOutTr type="Acos" :defaultInputDecimal="0.5" :outputFunc="(input:number|string)=>Math.acos(input as number)"/>
        <MoreOneInOneOutTr type="Atan" :defaultInputDecimal="0.5" :outputFunc="(input:number|string)=>Math.atan(input as number)"/>
        <MoreOneInOneOutTr type="Sinh" :defaultInputDecimal="1" :outputFunc="(input:number|string)=>Math.sinh(input as number)"/>
        <MoreOneInOneOutTr type="Cosh" :defaultInputDecimal="1" :outputFunc="(input:number|string)=>Math.cosh(input as number)"/>
        <MoreOneInOneOutTr type="Tanh" :defaultInputDecimal="1" :outputFunc="(input:number|string)=>Math.tanh(input as number)"/>
        <MoreOneInOneOutTr type="SMR" :defaultInputDecimal="1" :outputFunc="SMROutputAction" :bitOperation="true"/>
        <MoreOneInOneOutTr type="TCR" :defaultInputDecimal="1" :outputFunc="TCROutputAction" :bitOperation="true"/>
        </tbody>
    </table>
</template>

<style module>
.table {
    & td:first-child {
        text-align: center;
    }

    & td:nth-child(2) {
        text-align: center;
    }
}
</style>