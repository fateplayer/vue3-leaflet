<!--
 * @Author: fanyun
 * @Date: 2024-05-01 18:47:00
 * @LastEditors: fanyun
 * @LastEditTime: 2024-05-03 11:04:38
 * @Description: 
 * 
-->
<template>
    <div style="height:600px; width:800px">
        <p>离线地图 https://tms.fateplayer.com/test1/openlayers.html</p>
        <l-map ref="map" v-model:zoom="zoom" :min-zoom="minZoom" :max-zoom="maxZoom" :center="[-70, 100]" :crs="crs">
            <l-tile-layer url="https://tms.fateplayer.com/test1/{z}/{x}/{y}.png" layer-type="base"
                name="OpenStreetMap"></l-tile-layer>
        </l-map>
    </div>
</template>

<script>
import { CRS } from "leaflet";
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
            minZoom: 0,
            maxZoom: 2,
            crs: CRS.Simple,
        };
    },
};
</script>

<style></style>