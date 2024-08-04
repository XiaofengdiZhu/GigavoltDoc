<script setup lang="ts">
import {ref} from "vue";
import {withBase} from "vitepress";
import locale from "../../../common/locale";

type OutputFunction = (left: number, right: number) => number[];
const {
    type,
    defaultLeftInputDecimal,
    defaultRightInputDecimal,
    outputFunc
} = defineProps<{
    type: string, defaultLeftInputDecimal: number, defaultRightInputDecimal: number, outputFunc: OutputFunction
}>();

const data = ref({
    Name: locale('MoreTwoInTwoOut', type, "DisplayName"),
    leftInputDecimal: defaultLeftInputDecimal,
    leftInputVoltage: decimal2Voltage(defaultLeftInputDecimal),
    rightInputDecimal: defaultRightInputDecimal,
    rightInputVoltage: decimal2Voltage(defaultRightInputDecimal),
    basicOutputDecimal: 0,
    basicOutputVoltage: "",
    overflowOutputDecimal: 0,
    overflowOutputVoltage: "",
    basicOutputDescription: null,
    overflowOutputDescription: null
});
let basicOutputDescription = locale('MoreTwoInTwoOut', type, 'BasicOutputDescription');
if (basicOutputDescription.length > 0) {
    data.value.basicOutputDescription = basicOutputDescription;
}
let overflowOutputDescription = locale('MoreTwoInTwoOut', type, 'OverflowOutputDescription');
if (overflowOutputDescription.length > 0) {
    data.value.overflowOutputDescription = overflowOutputDescription;
}
let output = outputFunc(data.value.leftInputDecimal, data.value.rightInputDecimal);
data.value.basicOutputDecimal = output[0];
data.value.basicOutputVoltage = decimal2Voltage(output[0]);
data.value.overflowOutputDecimal = output[1];
data.value.overflowOutputVoltage = decimal2Voltage(output[1]);

const onDecimalInputChange = (target: EventTarget, port: string) => {
    let element = target as HTMLInputElement;
    if (element?.validity?.valid) {
        switch (port) {
            case "left":
                data.value.leftInputDecimal = Number(element.value);
                data.value.leftInputVoltage = decimal2Voltage(data.value.leftInputDecimal);
                break;
            case "right":
                data.value.rightInputDecimal = Number(element.value);
                data.value.rightInputVoltage = decimal2Voltage(data.value.rightInputDecimal);
                break;
        }
        let output = outputFunc(data.value.leftInputDecimal, data.value.rightInputDecimal);
        data.value.basicOutputDecimal = output[0];
        data.value.basicOutputVoltage = decimal2Voltage(output[0]);
        data.value.overflowOutputDecimal = output[1];
        data.value.overflowOutputVoltage = decimal2Voltage(output[1]);
    }
}

const onVoltageInputChange = (target: EventTarget, port: string) => {
    let element = target as HTMLInputElement;
    if (element?.validity?.valid) {
        switch (port) {
            case "left":
                data.value.leftInputVoltage = element.value;
                data.value.leftInputDecimal = voltage2Decimal(data.value.leftInputVoltage);
                break;
            case "right":
                data.value.rightInputVoltage = element.value;
                data.value.rightInputDecimal = voltage2Decimal(data.value.rightInputVoltage);
                break;
        }
        let output = outputFunc(data.value.leftInputDecimal, data.value.rightInputDecimal);
        data.value.basicOutputDecimal = output[0];
        data.value.basicOutputVoltage = decimal2Voltage(output[0]);
        data.value.overflowOutputDecimal = output[1];
        data.value.overflowOutputVoltage = decimal2Voltage(output[1]);
    }
}

function decimal2Voltage(decimal: number) {
    return decimal.toString(16).toUpperCase();
}

function voltage2Decimal(voltage: string) {
    return parseInt(voltage, 16) >>> 0;
}

</script>

<template>
    <tr>
        <td>
            <div><img :alt="`${data.Name} ${locale('imgAltSuffix')}`" :src="withBase(`/images/expand/gates/GVMoreTwoInTwoOutBlock/${type}.webp`)" class="gate_mask" :class="$style.icon"></div>
            <div style="margin-top: 6px;">{{ data.Name }}</div>
        </td>
        <td>
            <div>
                <label>{{ locale('MoreTwoInTwoOut', 'Decimal') }}<input type="number" inputmode="numeric" min="0" max="4294967295" step="1" :value="data.leftInputDecimal" :class="$style.input" @input="event=>onDecimalInputChange(event.target,'left')"></label>
            </div>
            <div style="margin-top: 6px;">
                <label>{{ locale('MoreTwoInTwoOut', 'Voltage') }}<input type="text" pattern="[0-9a-fA-F]{1,8}" :value="data.leftInputVoltage" :class="$style.input" @input="event=>onVoltageInputChange(event.target,'left')"></label>
            </div>
        </td>
        <td>
            <div>
                <label>{{ locale('MoreTwoInTwoOut', 'Decimal') }}<input type="number" inputmode="numeric" min="0" max="4294967295" step="1" :value="data.rightInputDecimal" :class="$style.input" @input="event=>onDecimalInputChange(event.target,'right')"></label>
            </div>
            <div style="margin-top: 6px;">
                <label>{{ locale('MoreTwoInTwoOut', 'Voltage') }}<input type="text" pattern="[0-9a-fA-F]{1,8}" :value="data.rightInputVoltage" :class="$style.input" @input="event=>onVoltageInputChange(event.target,'right')"></label>
            </div>
        </td>
        <td>
            <div>
                <label>{{ locale('MoreTwoInTwoOut', 'Decimal') }}</label><label :class="$style.output">{{ data.basicOutputDecimal }}</label>
            </div>
            <div style="margin-top: 6px;">
                <label>{{ locale('MoreTwoInTwoOut', 'Voltage') }}</label><label :class="$style.output">{{ data.basicOutputVoltage }}</label>
            </div>
            <div v-if="data.basicOutputDescription" style="margin-top: 6px;">
                {{ data.basicOutputDescription }}
            </div>
        </td>
        <td>
            <div>
                <label>{{ locale('MoreTwoInTwoOut', 'Decimal') }}</label><label :class="$style.output">{{ data.overflowOutputDecimal }}</label>
            </div>
            <div style="margin-top: 6px;">
                <label>{{ locale('MoreTwoInTwoOut', 'Voltage') }}</label><label :class="$style.output">{{ data.overflowOutputVoltage }}</label>
            </div>
            <div v-if="data.overflowOutputDescription" style="margin-top: 6px;">
                {{ data.overflowOutputDescription }}
            </div>
        </td>
    </tr>
</template>

<style module>
.icon {
    width: 56px;
    image-rendering: pixelated;
    margin: 0 auto;
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
    width: calc(10ch + 12px);
    padding: 0 6px;
    text-align: center;
    font-size: 13px;
    font-family: var(--vp-font-family-mono);
    border-radius: 4px;
    background-color: var(--vp-c-default-soft);
}
</style>