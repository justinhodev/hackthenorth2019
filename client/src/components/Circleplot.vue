<template>
  <div>
        <apexchart
          type="donut"
          :options="chartOptions"
          :series="series"
          legend:{
            labels:{
              color: white,
              useSeriesColor: false,
            },
          }
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