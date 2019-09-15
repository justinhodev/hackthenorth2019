<template>
  <div>
        <apexchart
          height="250"
          type="donut"
          :options="chartOptions"
          :series="series"
        ></apexchart>
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import Vue from "vue";

Vue.use(VueApexCharts);
export default {
data: () => {
    return {
      chartOptions: {},
      series: [44, 55, 41, 17, 15]
    }
  }
}
</script>

<style>

</style>