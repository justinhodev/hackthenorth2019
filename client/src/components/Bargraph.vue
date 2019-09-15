<template>
  <div>
    <v-container>
      <v-card class="col-4">
        <apexchart
          height="250"
          type="bar"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </v-card>
    </v-container>
    <v-container>
      <v-card
        class="mx-auto"
        tile
      >
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import Vue from "vue";
Vue.use(VueApexCharts);

export default {
  data: () => {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          labels: {
            show: true,
            style: {
              colors: ['#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF'],
            }
          }
        }
      }
      ,
      series: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91]
      }]
    }
  }
}
</script>


<style>
</style>