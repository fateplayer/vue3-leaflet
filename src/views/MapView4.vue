<!--
 * @Author: fanyun
 * @Date: 2024-05-03 12:22:53
 * @LastEditors: fanyun
 * @LastEditTime: 2024-11-03 12:52:45
 * @Description: 
 * 
-->
<template>
    <div style="height:600px; width:800px">
        <p>离线地图 https://fateplayer.com/map/test1/openlayers.html</p>
        <l-map ref="map" v-model:zoom="zoom" :min-zoom="minZoom" :max-zoom="maxZoom" :center="[-70, 100]" :crs="crs">
            <l-tile-layer url="https://fateplayer.com/map/test1/{z}/{x}/{y}.png" layer-type="base"
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