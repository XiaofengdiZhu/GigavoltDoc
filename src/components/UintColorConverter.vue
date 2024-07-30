<script setup lang="ts">
//Inspired by https://github.com/tusen-ai/naive-ui/tree/main/src/color-picker and https://github.com/cyhnkckali/vue3-color-picker
import {onMounted, ref} from "vue";
import locale from "../../common/locale";

const color = ref({
    Red: 0,
    RedHex: "",
    Green: 0,
    GreenHex: "",
    Blue: 0,
    BlueHex: "",
    Alpha: 0,
    AlphaHex: "",
    VoltageHex: "",
    Hue: 0,
    Saturation: 0,
    Value: 0,
    RGBResult: "",
    RGBAResult: "",
    highContrastResult: ""
});

const showEyeDropper = ref(false);

const SetHSV = (hue: number | null = null, saturation: number | null = null, value: number | null = null) => {
    if (hue !== null) {
        color.value.Hue = hue;
    }
    else {
        hue = color.value.Hue;
    }
    if (saturation !== null) {
        color.value.Saturation = saturation;
    }
    else {
        saturation = color.value.Saturation;
    }
    if (value !== null) {
        color.value.Value = value;
    }
    else {
        value = color.value.Value;
    }
    let rgb = HSV2RGB(hue, saturation, value);
    color.value.Red = rgb[0];
    color.value.RedHex = rgb[0].toString(16).toUpperCase();
    color.value.Green = rgb[1];
    color.value.GreenHex = rgb[1].toString(16).toUpperCase();
    color.value.Blue = rgb[2];
    color.value.BlueHex = rgb[2].toString(16).toUpperCase();
    color.value.VoltageHex = RGBA2Voltage(color.value.Red, color.value.Green, color.value.Blue, color.value.Alpha);
    color.value.RGBResult = `rgb(${rgb[0]}, ${rgb[1]},${rgb[2]})`;
    color.value.RGBAResult = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${color.value.Alpha})`;
    color.value.highContrastResult = getHighContrast(rgb[0], rgb[1], rgb[2], color.value.Alpha);
}

const SetAlpha = (alpha: number) => {
    color.value.Alpha = alpha;
    color.value.AlphaHex = Math.round(alpha * 255).toString(16).toUpperCase();
    color.value.VoltageHex = RGBA2Voltage(color.value.Red, color.value.Green, color.value.Blue, alpha);
    color.value.RGBAResult = `rgba(${color.value.Red}, ${color.value.Green}, ${color.value.Blue}, ${alpha})`;
    color.value.highContrastResult = getHighContrast(color.value.Red, color.value.Green, color.value.Blue, alpha);
}

const SetRGBA = (red: number | null = null, green: number | null = null, blue: number | null = null, alpha: number | null = null) => {
    if (red !== null) {
        color.value.Red = red;
        color.value.RedHex = red.toString(16).toUpperCase();
    }
    else {
        red = color.value.Red;
    }
    if (green !== null) {
        color.value.Green = green;
        color.value.GreenHex = green.toString(16).toUpperCase();
    }
    else {
        green = color.value.Green;
    }
    if (blue !== null) {
        color.value.Blue = blue;
        color.value.BlueHex = blue.toString(16).toUpperCase();
    }
    else {
        blue = color.value.Blue;
    }
    if (alpha !== null) {
        color.value.Alpha = alpha;
        color.value.AlphaHex = Math.round(alpha * 255).toString(16).toUpperCase();
    }
    else {
        alpha = color.value.Alpha;
    }
    color.value.VoltageHex = RGBA2Voltage(red, green, blue, alpha);
    color.value.RGBResult = `rgb(${red}, ${green}, ${blue})`;
    color.value.RGBAResult = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    color.value.highContrastResult = getHighContrast(red, green, blue, alpha);
    let hsv = RGB2HSV(red, green, blue);
    color.value.Hue = hsv[0];
    color.value.Saturation = hsv[1];
    color.value.Value = hsv[2];
}

const OpenEyeDropper = () => {
    if (globalThis.EyeDropper) {
        new globalThis.EyeDropper().open().then((result: object) => {
            let rgb = HEX2RGB(result["sRGBHex"]);
            SetRGBA(rgb[0], rgb[1], rgb[2], 1);
        })
    }
}

const OnInputChange = (target: EventTarget, channel: string) => {
    let element = target as HTMLInputElement;
    if (element.validity?.valid) {
        switch (channel.toLowerCase()) {
            case "red":
                SetRGBA(parseInt(element.value, 16), null, null, null);
                break;
            case "green":
                SetRGBA(null, parseInt(element.value, 16), null, null);
                break;
            case "blue":
                SetRGBA(null, null, parseInt(element.value, 16), null);
                break;
            case "alpha":
                SetRGBA(null, null, null, parseInt(element.value, 16) / 255);
                break;
            case "voltage":
                let rgba = Voltage2RGBA(element.value);
                SetRGBA(rgba[0], rgba[1], rgba[2], rgba[3]);
                break;
        }
    }
}
let operationTarget: HTMLElement;
let operationTargetName: string;

function actOperation(targetName: string, x: number, y: number) {
    switch (targetName) {
        case "panel":
            SetHSV(null, Math.round(x * 100), Math.round((1 - y) * 100));
            break;
        case "hue":
            SetHSV(Math.round(x * 360), null, null);
            break;
        case "alpha":
            SetAlpha(x);
            break;
    }
}

const OnMouseDown = (event: MouseEvent, targetName: string) => {
    operationTarget = event.currentTarget as HTMLElement;
    operationTargetName = targetName;
    let x = event.offsetX / operationTarget.clientWidth;
    let y = event.offsetY / operationTarget.clientHeight;
    actOperation(targetName, x, y);
    document.body.style.userSelect = "none";
    document.addEventListener("mousemove", OnMouseMove);
    document.addEventListener("mouseup", OnMouseUp);
}

const OnMouseMove = (event: MouseEvent) => {
    if (operationTarget != null) {
        let rect = operationTarget.getBoundingClientRect();
        let x = Math.min(Math.max(0, event.clientX - rect.left), rect.width) / rect.width;
        let y = Math.min(Math.max(0, event.clientY - rect.top), rect.height) / rect.height;
        actOperation(operationTargetName, x, y);
    }
}

const OnMouseUp = (event: MouseEvent) => {
    operationTarget = null;
    operationTargetName = "";
    document.body.style.userSelect = "";
    document.removeEventListener("mousemove", OnMouseMove);
    document.removeEventListener("mouseup", OnMouseUp);
}

let touchIdentifier = -1;

const OnTouchStart = (event: TouchEvent, targetName: string) => {
    event.preventDefault();
    operationTarget = event.currentTarget as HTMLElement;
    operationTargetName = targetName;
    let touch = event.changedTouches[0];
    touchIdentifier = touch.identifier;
    let x = touch.clientX / operationTarget.clientWidth;
    let y = touch.clientX / operationTarget.clientHeight;
    actOperation(targetName, x, y);
    document.addEventListener("touchmove", OnTouchMove, {passive: false});
    document.addEventListener("touchend", OnTouchEnd, {passive: false});
}

const OnTouchMove = (event: TouchEvent) => {
    if (operationTarget != null && touchIdentifier != -1) {
        let touch = event.changedTouches[0];
        if (touch.identifier != touchIdentifier) {
            OnTouchEnd(event);
            return;
        }
        event.preventDefault();
        let rect = operationTarget.getBoundingClientRect();
        let x = Math.min(Math.max(0, touch.clientX - rect.left), rect.width) / rect.width;
        let y = Math.min(Math.max(0, touch.clientY - rect.top), rect.height) / rect.height;
        actOperation(operationTargetName, x, y);
    }
}

const OnTouchEnd = (event: TouchEvent) => {
    touchIdentifier = -1;
    operationTarget = null;
    operationTargetName = "";
    document.body.style.userSelect = "";
    document.removeEventListener("touchmove", OnTouchMove, false);
    document.removeEventListener("touchend", OnTouchEnd, false);
}

function getHighContrast(red: number, green: number, blue: number, alpha: number) {
    return (alpha < 0.4) ? "black" : ((0.2126 * red + 0.7152 * green + 0.0722 * blue > 128) ? "black" : "white");
}

//From https://github.com/Qix-/color-convert/
function RGB2HSV(red: number, green: number, blue: number) {
    let rdif: number;
    let gdif: number;
    let bdif: number;
    let h: number;
    let s: number;

    const r = red / 255;
    const g = green / 255;
    const b = blue / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function (c: number) {
        return (v - c) / 6 / diff + 1 / 2;
    };

    if (diff === 0) {
        h = 0;
        s = 0;
    }
    else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);

        if (r === v) {
            h = bdif - gdif;
        }
        else if (g === v) {
            h = (1 / 3) + rdif - bdif;
        }
        else if (b === v) {
            h = (2 / 3) + gdif - rdif;
        }

        if (h < 0) {
            h += 1;
        }
        else if (h > 1) {
            h -= 1;
        }
    }

    return [
        h * 360,
        s * 100,
        v * 100
    ];
}

function HSV2RGB(hue: number, saturation: number, value: number) {
    const h = hue / 60;
    const s = saturation / 100;
    let v = value / 100;
    const hi = Math.floor(h) % 6;

    const f = h - Math.floor(h);
    const p = Math.round(255 * v * (1 - s));
    const q = Math.round(255 * v * (1 - (s * f)));
    const t = Math.round(255 * v * (1 - (s * (1 - f))));
    v = Math.round(v * 255);

    switch (hi) {
        case 0:
            return [
                v,
                t,
                p
            ];
        case 1:
            return [
                q,
                v,
                p
            ];
        case 2:
            return [
                p,
                v,
                t
            ];
        case 3:
            return [
                p,
                q,
                v
            ];
        case 4:
            return [
                t,
                p,
                v
            ];
        case 5:
            return [
                v,
                p,
                q
            ];
    }
}

function RGBA2Voltage(red: number, green: number, blue: number, alpha: number) {
    const integer = (((Math.round(alpha * 255) & 0xFF) << 24) >>> 0) + ((Math.round(blue) & 0xFF) << 16) + ((Math.round(green) & 0xFF) << 8) + (Math.round(red) & 0xFF);
    const string = integer.toString(16).toUpperCase();
    return '00000000'.substring(string.length) + string;
}

function Voltage2RGBA(voltage: string) {
    return [
        parseInt(voltage.substring(6, 8), 16) / 255,
        parseInt(voltage.substring(4, 6), 16),
        parseInt(voltage.substring(2, 4), 16),
        parseInt(voltage.substring(0, 2), 16)
    ];
}

function HEX2RGB(hex: string) {
    const match = hex.match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    let colorString = match[0];
    if (match[0].length === 3) {
        colorString = colorString.split('').map(char => {
            return char + char;
        }).join('');
    }
    const integer = parseInt(colorString, 16);
    const r = (integer >> 16) & 0xFF;
    const g = (integer >> 8) & 0xFF;
    const b = integer & 0xFF;
    return [
        r,
        g,
        b
    ];
}

SetRGBA(30, 213, 243, 1);

onMounted(() => {
    if (typeof globalThis.EyeDropper !== 'undefined') {
        showEyeDropper.value = true;
    }
})
</script>

<template>
    <div style="width: 248px; padding: 16px; border: var(--vp-c-border) solid 1px; border-radius: 8px; margin: 0 auto; background-color: var(--vp-c-bg);">
        <div style="position: relative; width: 216px; height: 180px; margin: 0 auto 16px; box-shadow: 0 0 2px 0 rgba(0, 0, 0, .24); cursor: crosshair;" @mousedown="event=>OnMouseDown(event,'panel')" @touchstart="event=>OnTouchStart(event,'panel')">
            <div :class="$style.full" :style="{backgroundImage: `linear-gradient(90deg, white, hsl(${color.Hue}, 100%, 50%))`}"></div>
            <div :class="$style.full" style="position: absolute; top: 0; background-image: linear-gradient(transparent, black);"></div>
            <div :class="$style.handler" :style="{backgroundColor:color.RGBResult, left: `${color.Saturation}%`, 'top': `${100-color.Value}%`}"></div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="width: calc(100% - 42px);">
                <div :class="$style.slider_container" @mousedown="event=>OnMouseDown(event,'hue')" @touchstart="event=>OnTouchStart(event,'hue')">
                    <div :class="$style.slider_background" style="background-image: linear-gradient(90deg, red, rgb(255, 255, 0) 16.66%, rgb(0, 255, 0) 33.33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 66.66%, rgb(255, 0, 255) 83.33%, red); "></div>
                    <div :class="$style.handler" :style="{left: `${color.Hue / 3.6}%`, backgroundColor:`hsl(${color.Hue}, 100%, 50%)`}"></div>
                </div>
                <div :class="$style.slider_container" style="margin-top: 8px;" @mousedown="event=>OnMouseDown(event,'alpha')" @touchstart="event=>OnTouchStart(event,'alpha')">
                    <div :class="[$style.slider_background, $style.chessboard]"></div>
                    <div :class="$style.slider_background" :style="{backgroundImage: `linear-gradient(to right, transparent, ${color.RGBResult})`}" style="position: absolute; top: 0;"></div>
                    <div :class="$style.handler" :style="{left: `${color.Alpha * 100}%`, backgroundColor: color.RGBAResult}"></div>
                </div>
            </div>
            <div @click="OpenEyeDropper()" :class="$style.chessboard" style="position: relative; width: 30px; height: 30px; border-radius: 15px; cursor: pointer; box-shadow: 0 0 2px 0 rgba(0, 0, 0, .24)">
                <div style="width: 100%; height: 100%; border-radius: 50%; padding: 7px;" :style="{color: color.highContrastResult ,backgroundColor: color.RGBAResult}">
                    <svg style="width: 16px; height: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" v-if="showEyeDropper">
                        <path fill="currentColor" fill-rule="evenodd" d="M15 4a3 3 0 0 1-2.25 2.905V8.5a.75.75 0 0 1-.22.53l-.5.5a.75.75 0 0 1-1.06 0l-.72-.72l-4.677 4.678A1.75 1.75 0 0 1 4.336 14h-.672a.25.25 0 0 0-.177.073l-.707.707a.75.75 0 0 1-1.06 0l-.5-.5a.75.75 0 0 1 0-1.06l.707-.707A.25.25 0 0 0 2 12.336v-.672c0-.464.184-.909.513-1.237L7.189 5.75l-.72-.72a.75.75 0 0 1 0-1.06l.5-.5a.75.75 0 0 1 .531-.22h1.595A3.001 3.001 0 0 1 15 4M9.19 7.75l-.94-.94l-4.677 4.678a.25.25 0 0 0-.073.176v.672q0 .087-.009.173a2 2 0 0 1 .173-.009h.672a.25.25 0 0 0 .177-.073z" clip-rule="evenodd"/>
                    </svg>
                </div>
            </div>
        </div>
        <div style="display:flex; justify-content: space-between; margin-top: 16px;">
            <div style="position: relative; width: 44px;">
                <span :class="$style.input_span"><span style="opacity: 0.6;">A</span></span>
                <input type="text" :class="$style.input_text" pattern="[0-9a-fA-F]{1,2}" :value="color.AlphaHex" @input="event=>{OnInputChange(event.target, 'alpha')}">
            </div>
            <div style="position: relative; width: 44px;">
                <span :class="$style.input_span" style="color: blue;">B</span>
                <input type="text" :class="$style.input_text" pattern="[0-9a-fA-F]{1,2}" :value="color.BlueHex" @input="event=>{OnInputChange(event.target, 'blue')}">
            </div>
            <div style="position: relative; width: 44px;">
                <span :class="$style.input_span" style="color: green;">G</span>
                <input type="text" :class="$style.input_text" pattern="[0-9a-fA-F]{1,2}" :value="color.GreenHex" @input="event=>{OnInputChange(event.target, 'green')}">
            </div>
            <div style="position: relative; width: 44px;">
                <span :class="$style.input_span" style="color: red;">R</span>
                <input type="text" :class="$style.input_text" pattern="[0-9a-fA-F]{1,2}" :value="color.RedHex" @input="event=>{OnInputChange(event.target, 'red')}">
            </div>
        </div>
        <div style="position: relative; width: 100%; margin-top: 16px;">
            {{ locale("UintColorConverter", "Voltage") }}
            <input type="text" :class="$style.input_text" pattern="[0-9a-fA-F]{8}" :value="color.VoltageHex" @input="event=>{OnInputChange(event.target, 'voltage')}" style="width: 120px;">
        </div>
    </div>
</template>

<style module>
.full {
    width: 100%;
    height: 100%;
}

.handler {
    position: absolute;
    top: 50%;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    margin-top: -6px;
    border: white solid 2px;
    border-radius: 6px;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
    cursor: grab;

    &:active {
        cursor: grabbing;
    }
}

.slider_container {
    position: relative;
    width: 100%;
    height: 12px;
    border-radius: 6px;
    cursor: crosshair;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, .24);
}

.slider_background {
    width: 100%;
    height: 100%;
    border-radius: 6px;
}

.chessboard {
    background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
    background-size: 12px 12px;
    background-position: 0 0, 0 6px, 6px -6px, -6px 0;
    background-repeat: repeat;
}

.input_span {
    position: absolute;
    top: -6px;
    left: -6px;
    font-size: 11px;
    padding: 0 4px;
    background-color: var(--vp-c-bg);
    line-height: 15px;
}

.input_text {
    height: 30px;
    width: 100%;
    border: 1px solid var(--vp-c-border);
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
    font-family: var(--vp-font-family-mono);

    &:invalid {
        border-color: var(--vp-c-danger-2);
    }
}
</style>