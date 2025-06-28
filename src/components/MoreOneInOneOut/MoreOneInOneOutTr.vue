<script setup lang="ts">
import {ref} from "vue";
import {withBase} from "vitepress";
import locale from "../../../common/locale";

type OutputFunction<type> = (input: type) => type;

const {
    type,
    defaultInputDecimal,
    outputFunc,
    bitOperation
} = defineProps<{
    type: string, defaultInputDecimal: number, outputFunc: OutputFunction<number | string>, bitOperation?: boolean
}>();

const data = ref({
    Name: locale('MoreOneInOneOut', type),
    inputDecimal: defaultInputDecimal,
    inputVoltage: decimal2Voltage(defaultInputDecimal),
    outputDecimal: 0,
    outputVoltage: ""
});
if (bitOperation) {
    data.value.outputVoltage = (outputFunc(data.value.inputVoltage) as string).toUpperCase();
    data.value.outputDecimal = voltage2Decimal(data.value.outputVoltage);
}
else {
    data.value.outputDecimal = outputFunc(data.value.inputDecimal) as number;
    data.value.outputVoltage = decimal2Voltage(data.value.outputDecimal);
}

const onDecimalInputChange = (event: Event) => {
    let element = event.target as HTMLInputElement;
    if (element) {
        data.value.inputDecimal = Number(element.value);
        data.value.inputVoltage = decimal2Voltage(data.value.inputDecimal);
        if (bitOperation) {
            data.value.outputVoltage = (outputFunc(data.value.inputVoltage) as string).toUpperCase();
            data.value.outputDecimal = voltage2Decimal(data.value.outputVoltage);
        }
        else {
            data.value.outputDecimal = outputFunc(data.value.inputDecimal) as number;
            data.value.outputVoltage = decimal2Voltage(data.value.outputDecimal);
        }
    }
}

const onVoltageInputChange = (event: Event) => {
    let element = event.target as HTMLInputElement;
    if (element?.validity?.valid) {
        data.value.inputVoltage = element.value;
        data.value.inputDecimal = voltage2Decimal(data.value.inputVoltage);
        if (bitOperation) {
            data.value.outputVoltage = (outputFunc(data.value.inputVoltage) as string).toUpperCase();
            data.value.outputDecimal = voltage2Decimal(data.value.outputVoltage);
        }
        else {
            data.value.outputDecimal = outputFunc(data.value.inputDecimal) as number;
            data.value.outputVoltage = decimal2Voltage(data.value.outputDecimal);
        }
    }
}

function decimal2Voltage(decimal: number) {
    let abs = Math.abs(decimal);
    return ((((decimal < 0 ? 1 : 0) << 31) | ((Math.trunc(abs) & 0x7fff) << 16) | Math.round((abs % 1) * 0xffff)) >>> 0).toString(16).toUpperCase();
}

function voltage2Decimal(voltage: string) {
    let num = parseInt(voltage, 16) >>> 0;
    return (num >>> 31 == 1 ? -1 : 1) * (((num >>> 16) & 0x7fff) + (num & 0xffff) / 0xffff);
}

</script>

<template>
    <tr>
        <td>
            <img :alt="`${data.Name} ${locale('imgAltSuffix')}`" :src="withBase(`/images/expand/gates/GVMoreOneInOneOutBlock/${type}.webp`)" class="gate_mask" :class="$style.icon">
        </td>
        <td>{{ data.Name }}</td>
        <td>
            <table :class="$style.table">
                <tbody>
                <tr>
                    <td>{{ locale('MoreOneInOneOut', 'Decimal') }}</td>
                    <td><input type="number" inputmode="decimal" :value="data.inputDecimal" :class="$style.input" @input="onDecimalInputChange"></td>
                </tr>
                <tr>
                    <td>{{ locale('MoreOneInOneOut', 'Voltage') }}</td>
                    <td><input type="text" pattern="[0-9a-fA-F]{1,8}" :value="data.inputVoltage" :class="$style.input" @input="onVoltageInputChange"></td>
                </tr>
                </tbody>
            </table>
        </td>
        <td>
            <table :class="$style.table">
                <tbody>
                <tr>
                    <td>{{ locale('MoreOneInOneOut', 'Decimal') }}</td>
                    <td><label :class="$style.output">{{ data.outputDecimal.toFixed(8) }}</label></td>
                </tr>
                <tr>
                    <td>{{ locale('MoreOneInOneOut', 'Voltage') }}</td>
                    <td><label :class="$style.output">{{ data.outputVoltage }}</label></td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
</template>

<style module>
.icon {
    width: 56px;
    image-rendering: pixelated;
}

.table {
    margin: 0 !important;
    border-spacing: 0 6px !important;

    & tr {
        background-color: transparent !important;
    }

    & td {
        border: none;
        padding: 0 !important;
    }
}

.input {
    width: calc(10ch + 12px);
    border: 1px solid var(--vp-c-border);
    border-radius: 4px;
    padding: 0 6px;
    text-align: center;
    font-size: 13px;
    font-family: var(--vp-font-family-mono);

    &:invalid {
        border-color: var(--vp-c-danger-2);
    }
}

.output {
    display: inline-block;
    width: calc(15ch + 12px);
    padding: 0 6px;
    font-size: 13px;
    font-family: var(--vp-font-family-mono);
    border-radius: 4px;
    background-color: var(--vp-c-default-soft);
}
</style>