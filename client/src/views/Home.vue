<template>
  <div>
    <v-container>
      <v-card
        dark
        class="col-4"
      >
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
        dark
        class="mx-auto"
        tile
      >
        <v-card-title>Commonly Purchased Items</v-card-title>
        <v-list dark>
          <recentPurchases
            v-for="commonItem in commonlyPurchasedGoods"
            :key="commonItem.productName"
            :product="commonItem"
          />
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import recentPurchases from "../components/recentPurchases";
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

export default {
  components: { recentPurchases },
  data: function () {
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
              colors: ['#FEF1F0', '#FEF1F0', '#FEF1F0', '#FEF1F0', '#FEF1F0', '#FEF1F0', '#FEF1F0', '#FEF1F0'],
            }
          }
        }
      }
      ,
      series: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91]
      }],
      commonlyPurchasedGoods: [{ productName: "test", subtitle: "test2", purchaseDate: "12/12/12" }, { productName: "Kraft", subtitle: "Dinner", purchaseDate: "12/12/12" }]
    }
  }
};
</script>
