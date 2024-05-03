<!--
 * @Author: fanyun
 * @Date: 2024-05-01 09:20:18
 * @LastEditors: fanyun
 * @LastEditTime: 2024-05-01 10:20:16
 * @Description: 
 * 
-->
<template>
    <div style="height:600px; width:800px">
        <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                name="OpenStreetMap"></l-tile-layer>
        </l-map>
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
    components: {
        LMap,
        LTileLayer,
    },
    data() {
        return {
            zoom: 2,
        };
    },
};
</script>

<style></style>