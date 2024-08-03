<script setup lang="ts">
import ElectricConnectionDisplayMode from "./ElectricConnectionDisplayMode";
import locale from "../../../common/locale";
import md from "../../../common/md";
import ElectricConnection from "./ElectricConnection";

const {connection} = defineProps<{
    connection: ElectricConnection, isWide: boolean, titleLevel?: number, serial?: number
}>()
let title = locale("ElectricConnectorDirection", connection.Direction) + locale("ElectricConnectorType", connection.Type);
</script>

<template>
    <component :is="`h${titleLevel??3}`" :id="`${title}${serial??''}`" :class="{[$style.wide] : isWide}">
        {{ title }}
        <a class="header-anchor" :href="`#${title}${serial??''}`" :aria-label='"Permalink to \""+title+"\""'/>
    </component>
    <table :class="[$style.electricConnectionTable, {[$style.wide] : isWide}]">
        <thead>
        <tr>
            <th v-if="connection.DisplayMode != ElectricConnectionDisplayMode.Hide">{{ locale("ElectricConnectionDisplayMode", connection.DisplayMode) }}</th>
            <th v-if="!connection.HideFunction">{{ locale("ElectricConnection", "Function") }}</th>
            <th v-if="!connection.HideDescription">{{ locale("ElectricConnection", "Description") }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="port in connection.Ports">
            <td v-if="connection.DisplayMode != ElectricConnectionDisplayMode.Hide">{{ connection.DisplayMode == ElectricConnectionDisplayMode.StartAndEnd ? (port.Start + (port.End > port.Start ? " ~ " + port.End : "")) : port.Length() }}</td>
            <td v-if="!connection.HideFunction" v-html="md.render(port.Function)"/>
            <td v-if="!connection.HideDescription" v-html="md.render(port.Description)" style="text-align: left;"/>
        </tr>
        </tbody>
    </table>
</template>
<style module>
.electricConnectionTable th, .electricConnectionTable td {
    text-align: center;
    padding: 6px 8px;
}

.wide {
    h3& {
        margin: 0 !important;
    }

    h4& {
        margin: 0 !important;
    }

    h5& {
        margin: 0 !important;
    }

    h6& {
        margin: 0 !important;
    }

    table& {
        margin: 12px 0 0;
    }
}
</style>