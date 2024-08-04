<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount} from "vue";
import {withBase} from "vitepress";
import ElectricConnection from "./ElectricConnection";
import ElectricConnectorDirection from "./ElectricConnectorDirection";
import ElectricConnectionTable from "./ElectricConnectionTable.vue";
import locale from "../../../common/locale";
import ElectricConnectorType from "./ElectricConnectorType";

const self = ref(null);
const img = ref(null);
const isWide = ref(false);

let top: ElectricConnection | null = null, right: ElectricConnection | null = null, bottom: ElectricConnection | null = null, left: ElectricConnection | null = null, in_: ElectricConnection | null = null, all: ElectricConnection | null = null, topTitle: string | null, rightTitle: string | null, bottomTitle: string | null, leftTitle: string | null, inTitle: string | null, allTitle: string | null;
const {
    connections,
    imgAltPrefix
} = defineProps<{
    connections: ElectricConnection[], imgSrc?: string, imgAltPrefix: string, gateMask?: string, titleLevel?: number, serial?: number
}>();
let imgAlt = `${imgAltPrefix} ${locale('imgAltSuffix')}`;
if (connections.length > 0) {
    connections.forEach(connection => {
        switch (connection.Direction) {
            case ElectricConnectorDirection.All:
                all = connection;
                allTitle = locale("ElectricConnectorDirection", connection.Direction) + locale("ElectricConnectorType", connection.Type);
                break;
            case ElectricConnectorDirection.Top:
                top = connection;
                topTitle = locale("ElectricConnectorDirection", connection.Direction) + locale("ElectricConnectorType", connection.Type);
                break;
            case ElectricConnectorDirection.Right:
                right = connection;
                rightTitle = locale("ElectricConnectorDirection", connection.Direction) + locale("ElectricConnectorType", connection.Type);
                break;
            case ElectricConnectorDirection.Bottom:
                bottom = connection;
                bottomTitle = locale("ElectricConnectorDirection", connection.Direction) + locale("ElectricConnectorType", connection.Type);
                break;
            case ElectricConnectorDirection.Left:
                left = connection;
                leftTitle = locale("ElectricConnectorDirection", connection.Direction) + locale("ElectricConnectorType", connection.Type);
                break;
            case ElectricConnectorDirection.In:
                in_ = connection;
                inTitle = locale("ElectricConnectorDirection", connection.Direction) + locale("ElectricConnectorType", connection.Type);
                break;
        }
    });
    if (all != null) {
        top = null;
        right = null;
        bottom = null;
        left = null;
    }
}
let imgHeight = ref(0);
const checkWidth = () => {
    if (self.value) {
        isWide.value = self.value.clientWidth > 720;
        if (img.value) {
            imgHeight.value = img.value.clientHeight;
        }
    }
};
onMounted(() => {
    checkWidth();
    window.addEventListener('resize', checkWidth);
});
onBeforeUnmount(() => {
    window.removeEventListener('resize', checkWidth);
});
const imgLoaded = () => {
    imgHeight.value = img.value.clientHeight;
};
</script>

<template v-if="connections.length > 0">
    <template v-if="all">
        <img :src="withBase(imgSrc)" :class="{'gate_mask': gateMask}" class="center_image small" :alt="imgAlt" :title="imgAlt" v-if="imgSrc"/>
        <ElectricConnectionTable :connection="all" :isWide="false" :titleLevel="titleLevel" :serial="serial"/>
    </template>
    <template v-else>
        <div :class="$style.electricElementGraphic" :style="{gridTemplateColumns:isWide?'2.5fr 1fr 2.5fr':'1fr 1fr 1fr', gridTemplateRows:imgHeight>0?`auto ${imgHeight}px auto auto`:'auto'}" ref="self">
            <div :class="[$style.surroundConnection, top.Type == ElectricConnectorType.Input ? $style.input : $style.output]" style="grid-row-start:1;grid-column: 1 / 3; justify-self: end; align-self: end;" v-if="top != null">
                <ElectricConnectionTable :connection="top" :isWide="true" v-if="isWide" :titleLevel="titleLevel" :serial="serial"/>
                <a :class="$style.narrowA" :href="`#${topTitle}${serial??''}`" v-else>{{ topTitle }}</a>
            </div>
            <div :class="[$style.surroundConnection, right.Type == ElectricConnectorType.Input ? $style.input : $style.output]" style="grid-row: 1/3; grid-column-start: 3; display: flex; align-self: end;" v-if="right != null">
                <ElectricConnectionTable :connection="right" :isWide="true" v-if="isWide" :titleLevel="titleLevel" :serial="serial"/>
                <a :class="$style.narrowA" style="writing-mode: vertical-lr;" :href="`#${rightTitle}${serial??''}`" v-else>{{ rightTitle }}</a>
            </div>
            <div :class="[$style.surroundConnection, left.Type == ElectricConnectorType.Input ? $style.input : $style.output]" style="grid-row: 2 / 4; grid-column-start: 1; justify-self: end" v-if="left != null">
                <ElectricConnectionTable :connection="left" :isWide="true" v-if="isWide" :titleLevel="titleLevel" :serial="serial"/>
                <a :class="$style.narrowA" style="writing-mode: vertical-lr;" :href="`#${leftTitle}${serial??''}`" v-else>{{ leftTitle }}</a>
            </div>
            <div style="grid-row-start: 2; grid-column-start: 2; place-self: stretch" v-if="imgSrc">
                <img :src="withBase(imgSrc)" style="width: 100%; image-rendering: pixelated; object-fit: contain;" :alt="imgAlt" :title="imgAlt" :class="{'gate_mask': gateMask}" class="no_hover" ref="img" @load="imgLoaded"/>
            </div>
            <div :class="[$style.surroundConnection, bottom.Type == ElectricConnectorType.Input ? $style.input : $style.output]" style="grid-row-start: 3; grid-column: 2 / 4;" v-if="bottom != null">
                <ElectricConnectionTable :connection="bottom" :isWide="true" v-if="isWide" :titleLevel="titleLevel" :serial="serial"/>
                <a :class="$style.narrowA" :href="`#${bottomTitle}${serial??''}`" v-else>{{ bottomTitle }}</a>
            </div>
            <div :class="[$style.surroundConnection, in_.Type == ElectricConnectorType.Input ? $style.input : $style.output]" style="grid-row-start: 4; grid-column: 2 / 4;" v-if="in_ != null">
                <ElectricConnectionTable :connection="in_" :isWide="true" v-if="isWide" :titleLevel="titleLevel" :serial="serial"/>
                <a :class="$style.narrowA" :href="`#${inTitle}${serial??''}`" v-else>{{ inTitle }}</a>
            </div>
        </div>
        <div v-if="!isWide">
            <ElectricConnectionTable :connection="top" :isWide="false" :titleLevel="titleLevel" v-if="top != null" :serial="serial"/>
            <ElectricConnectionTable :connection="right" :isWide="false" :titleLevel="titleLevel" v-if="right != null" :serial="serial"/>
            <ElectricConnectionTable :connection="bottom" :isWide="false" :titleLevel="titleLevel" v-if="bottom != null" :serial="serial"/>
            <ElectricConnectionTable :connection="left" :isWide="false" :titleLevel="titleLevel" v-if="left != null" :serial="serial"/>
            <ElectricConnectionTable :connection="in_" :isWide="false" :titleLevel="titleLevel" v-if="in_ != null" :serial="serial"/>
        </div>
    </template>
</template>
<style module>
.electricElementGraphic {
    display: grid;
    grid-gap: 8px;
    place-items: start;

    & .narrowA {
        color: var(--vp-c-text-1);
    }
}

.surroundConnection {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    border-radius: 8px;

    &.input {
        background-color: rgba(114, 165, 178, 0.25);
    }

    &.output {
        background-color: rgba(201, 144, 155, 0.25);
    }
}
</style>