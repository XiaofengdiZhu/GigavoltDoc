<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";
import {withBase} from "vitepress";
import ElectricConnection from "./ElectricConnection";
import ElectricConnectorDirection from "./ElectricConnectorDirection";
import ElectricConnectionTable from "./ElectricConnectionTable.vue";
import locale from "../../../common/locale";
import ElectricConnectorType from "./ElectricConnectorType";

const self = ref(null);
const img = ref(null);
const isWide = ref(false);

let upTop: ElectricConnection | null = null,
    upRight: ElectricConnection | null = null,
    upLeft: ElectricConnection | null = null,
    upIn: ElectricConnection | null = null,
    downBottom: ElectricConnection | null = null,
    downRight: ElectricConnection | null = null,
    downLeft: ElectricConnection | null = null,
    downIn: ElectricConnection | null = null,
    upTopTitle: string | null,
    upRightTitle: string | null,
    upLeftTitle: string | null,
    upInTitle: string | null,
    downBottomTitle: string | null,
    downRightTitle: string | null,
    downLeftTitle: string | null,
    downInTitle: string | null;
const {
    connections,
    imgAltPrefix
} = defineProps<{
    connections: ElectricConnection[], imgSrc?: string, imgAltPrefix: string, titleLevel?: number, serial?: number
}>();
let imgAlt = `${imgAltPrefix} ${locale('imgAltSuffix')}`;
if (connections.length > 0) {
    connections.forEach(connection => {
        let title = locale("ElectricConnectorDirection", connection.Direction) + locale("ElectricConnectorType", connection.Type);
        switch (connection.Direction) {
            case ElectricConnectorDirection.UpTop:
                upTop = connection;
                upTopTitle = title;
                break;
            case ElectricConnectorDirection.UpRight:
                upRight = connection;
                upRightTitle = title;
                break;
            case ElectricConnectorDirection.UpLeft:
                upLeft = connection;
                upLeftTitle = title;
                break;
            case ElectricConnectorDirection.UpIn:
                upIn = connection;
                upInTitle = title;
                break;
            case ElectricConnectorDirection.DownBottom:
                downBottom = connection;
                downBottomTitle = title;
                break;
            case ElectricConnectorDirection.DownRight:
                downRight = connection;
                downRightTitle = title;
                break;
            case ElectricConnectorDirection.DownLeft:
                downLeft = connection;
                downLeftTitle = title;
                break;
            case ElectricConnectorDirection.DownIn:
                downIn = connection;
                downInTitle = title;
                break;
        }
    });
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
    <div :class="$style.electricElementGraphic" :style="{gridTemplateColumns: isWide?'1fr 1fr 2fr':'1fr 1fr 1fr', gridTemplateRows: imgHeight > 0 ? `auto ${imgHeight / 2}px ${imgHeight / 2}px auto` : 'auto'}" ref="self">
        <div :class="[$style.surroundConnection, upIn.Type == ElectricConnectorType.Input ? $style.input : $style.output]" style="grid-row-start: 1; grid-column-start: 1; justify-self: end; align-self: end;" v-if="upTop != null">
            <ElectricConnectionTable :connection="upIn" :isWide="true" v-if="isWide" :titleLevel="titleLevel" :serial="serial"/>
            <a :class="$style.narrowA" :href="`#${upInTitle}${serial??''}`" v-else>{{ upInTitle }}</a>
        </div>
        <div :class="[$style.surroundConnection, upTop.Type == ElectricConnectorType.Input ? $style.input : $style.output]" style="grid-row-start:1; grid-column-start: 2; align-self: end;" v-if="upTop != null">
            <ElectricConnectionTable :connection="upTop" :isWide="true" v-if="isWide" :titleLevel="titleLevel" :serial="serial"/>
            <a :class="$style.narrowA" :href="`#${upTopTitle}${serial??''}`" v-else>{{ upTopTitle }}</a>
        </div>
        <div :class="[$style.surroundConnection, upRight.Type == ElectricConnectorType.Input ? $style.input : $style.output]" style="grid-row: 1 / 3; grid-column-start: 3; display: flex; align-self: end;" v-if="upRight != null">
            <ElectricConnectionTable :connection="upRight" :isWide="true" v-if="isWide" :titleLevel="titleLevel" :serial="serial"/>
            <a :class="$style.narrowA" style="writing-mode: vertical-lr;" :href="`#${upRightTitle}${serial??''}`" v-else>{{ upRightTitle }}</a>
        </div>
        <div :class="[$style.surroundConnection, upLeft.Type == ElectricConnectorType.Input ? $style.input : $style.output]" style="grid-row-start: 2; grid-column-start: 1; justify-self: end; align-self: end;" v-if="upLeft != null">
            <ElectricConnectionTable :connection="upLeft" :isWide="true" v-if="isWide" :titleLevel="titleLevel" :serial="serial"/>
            <a :class="$style.narrowA" style="writing-mode: vertical-lr;" :href="`#${upLeftTitle}${serial??''}`" v-else>{{ upLeftTitle }}</a>
        </div>
        <div style="grid-row: 2 / 4; grid-column-start: 2; place-self: stretch" v-if="imgSrc">
            <img :src="withBase(imgSrc)" style="width: 100%; image-rendering: pixelated; object-fit: contain;" :alt="imgAlt" :title="imgAlt" class="no_hover" ref="img" @load="imgLoaded"/>
        </div>
        <div :class="[$style.surroundConnection, downRight.Type == ElectricConnectorType.Input ? $style.input : $style.output]" style="grid-row-start: 3; grid-column-start: 3; display: flex;" v-if="downRight != null">
            <ElectricConnectionTable :connection="downRight" :isWide="true" v-if="isWide" :titleLevel="titleLevel" :serial="serial"/>
            <a :class="$style.narrowA" style="writing-mode: vertical-lr;" :href="`#${downRightTitle}${serial??''}`" v-else>{{ downRightTitle }}</a>
        </div>
        <div :class="[$style.surroundConnection, downLeft.Type == ElectricConnectorType.Input ? $style.input : $style.output]" style="grid-row: 3 / 5; grid-column-start: 1; justify-self: end" v-if="downLeft != null">
            <ElectricConnectionTable :connection="downLeft" :isWide="true" v-if="isWide" :titleLevel="titleLevel" :serial="serial"/>
            <a :class="$style.narrowA" style="writing-mode: vertical-lr;" :href="`#${downLeftTitle}${serial??''}`" v-else>{{ downLeftTitle }}</a>
        </div>
        <div :class="[$style.surroundConnection, downBottom.Type == ElectricConnectorType.Input ? $style.input : $style.output]" style="grid-row-start: 4; grid-column-start: 2;" v-if="downBottom != null">
            <ElectricConnectionTable :connection="downBottom" :isWide="true" v-if="isWide" :titleLevel="titleLevel" :serial="serial"/>
            <a :class="$style.narrowA" :href="`#${downBottomTitle}${serial??''}`" v-else>{{ downBottomTitle }}</a>
        </div>
        <div :class="[$style.surroundConnection, downIn.Type == ElectricConnectorType.Input ? $style.input : $style.output]" style="grid-row-start: 4; grid-column-start: 3;" v-if="downIn != null">
            <ElectricConnectionTable :connection="downIn" :isWide="true" v-if="isWide" :titleLevel="titleLevel" :serial="serial"/>
            <a :class="$style.narrowA" :href="`#${downInTitle}${serial??''}`" v-else>{{ downInTitle }}</a>
        </div>
    </div>
    <div v-if="!isWide">
        <ElectricConnectionTable :connection="upTop" :isWide="false" :titleLevel="titleLevel" v-if="upTop != null" :serial="serial"/>
        <ElectricConnectionTable :connection="upIn" :isWide="false" :titleLevel="titleLevel" v-if="upLeft != null" :serial="serial"/>
        <ElectricConnectionTable :connection="upRight" :isWide="false" :titleLevel="titleLevel" v-if="upRight != null" :serial="serial"/>
        <ElectricConnectionTable :connection="downRight" :isWide="false" :titleLevel="titleLevel" v-if="downRight != null" :serial="serial"/>
        <ElectricConnectionTable :connection="downLeft" :isWide="false" :titleLevel="titleLevel" v-if="downLeft != null" :serial="serial"/>
        <ElectricConnectionTable :connection="upLeft" :isWide="false" :titleLevel="titleLevel" v-if="upLeft != null" :serial="serial"/>
        <ElectricConnectionTable :connection="downBottom" :isWide="false" :titleLevel="titleLevel" v-if="downBottom != null" :serial="serial"/>
        <ElectricConnectionTable :connection="downIn" :isWide="false" :titleLevel="titleLevel" v-if="downIn != null" :serial="serial"/>
    </div>
</template>
<style module>
.electricElementGraphic {
    display: grid;
    grid-gap: 8px;
    place-items: start;
    margin-top: 16px;

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