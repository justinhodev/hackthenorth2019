<template>
  <div>
    <apexchart
      height="250"
      type="donut"
      :options="{labels: data[0]}"
      :series="data[1]"
    ></apexchart>
    <span>{{data}}</span>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import Vue from "vue";



Vue.use(VueApexCharts);
export default {
  props: ["data"],
}
</script>

<style>
</style>