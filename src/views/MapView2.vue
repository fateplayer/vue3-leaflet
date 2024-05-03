<!--
 * @Author: fanyun
 * @Date: 2024-05-01 09:04:17
 * @LastEditors: fanyun
 * @LastEditTime: 2024-05-01 18:30:04
 * @Description: 
 * 
-->
<template>
  <div style="height:600px; width:800px">
    <p>about</p>
    <l-map ref="map" :min-zoom="minZoom" :crs="crs" :zoom="zoom" :center="center" style="height: 400px; width: 600px;">
      <l-image-overlay :url="url" :bounds="bounds" />
      <l-marker v-for="star in stars" :key="star.name" :lat-lng="star">
        <l-popup :content="star.name" />
      </l-marker>
      <l-polyline :lat-lngs="travel" />
    </l-map>
  </div>
</template>

<script>
import { CRS, latLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LImageOverlay, LMarker, LPopup, LPolyline } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap, LImageOverlay, LMarker, LPopup, LPolyline
  },
  data() {
    return {
      zoom: -1,
      center: latLng(47.41322, -1.219482),
      url: "/src/assets/uqm_map_full.png",
      bounds: [[-26.5, -25], [1021.5, 1023]],
      minZoom: -2,
      crs: CRS.Simple,
      stars: [
        { name: "Sol", lng: 175.2, lat: 145.0 },
        { name: "Mizar", lng: 41.6, lat: 130.1 },
        { name: "Krueger-Z", lng: 13.4, lat: 56.5 },
        { name: "Deneb", lng: 218.7, lat: 8.3 }
      ],
      travel: [[145.0, 175.2], [8.3, 218.7]]
    };
  },
  mounted() {
    // this.$refs.map.mapObject.setView([70, 120], 1);
  },
  // async beforeMount() {
  //   // var map = this.$refs.map.mapObject;
  //   var bounds = [[0, 0], [1000, 1000]];
  //   var image = LMap.imageOverlay('uqm_map_full.png', bounds).addTo(map);
  //   LMap.fitBounds(bounds);
  // },
};

</script>

<style></style>