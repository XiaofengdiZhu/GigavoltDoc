<script setup lang="ts">
import ElectricConnectionDisplayMode from "./ElectricConnectionDisplayMode";
import locale from "../../../common/locale";
import md from "../../../common/md";
import ElectricConnection from "./ElectricConnection";

const {connection} = defineProps<{
    connection: ElectricConnection, isWide: boolean
}>()
let title = locale("ElectricConnectorDirection", connection.Direction) + locale("ElectricConnectorType", connection.Type);
</script>

<template>
    <h3 :id="title" :class="{[$style.wide] : isWide}">
        {{ title }}
        <a class="header-anchor" :href="'#'+title" :aria-label='"Permalink to \""+title+"\""'/>
    </h3>
    <table :class="[$style.electricConnectionTable, {[$style.wide] : isWide}]">
        <thead>
        <tr>
            <th>{{ locale("ElectricConnectionDisplayMode", connection.DisplayMode) }}</th>
            <th>{{ locale("ElectricConnection", "Function") }}</th>
            <th>{{ locale("ElectricConnection", "Description") }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="port in connection.Ports">
            <td>{{ connection.DisplayMode == ElectricConnectionDisplayMode.StartAndEnd ? (port.Start + (port.End > port.Start ? " ~ " + port.End : "")) : port.Length() }}</td>
            <td v-html="md.renderInline(port.Function)"/>
            <td v-html="md.renderInline(port.Description)"/>
        </tr>
        </tbody>
    </table>
</template>
<style module>
.electricConnectionTable th, td {
    text-align: center;
    padding: 6px 8px;
}

.wide {
    h3& {
        margin: 0 !important;
        text-align: center;
    }

    table& {
        margin: 12px 0 0;
    }
}
</style>