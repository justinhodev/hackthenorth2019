<template>
 <div class="col-12 spanning">
   <div class="row"> 
     <div class="col-6">
      <v-container>
        <v-card
          dark 
          class="col-4"
        >
        <div class="flexBoxColumn">
          {{"This month, you spent the most money on COFFEE."}}
          <img class="fakeBox" src="../assets/fakeBox.png">
        </div>
        </v-card>
      </v-container>    
     </div>
     <div class="col-6">
      <v-container>
        <v-card
          dark
          class="col-4"
        >
          <apexchart
            height="250"
            type="donut"
            :options="chartOptions"
            :series="series"
          ></apexchart>
          </v-card>
      </v-container>
     </div>
   </div>
    <v-container>
      <v-card
        dark
        class="mx-auto"
        tile
      >
        <v-card-title>Commonly Purchased Items</v-card-title>
        <v-list dark>
          <v-list-item-group>
            <recentPurchases
              v-for="commonItem in commonlyPurchasedGoods"
              :key="commonItem.productName"
              :product="commonItem"
            />
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-container>
 </div>
</template>

<script>
import recentPurchases from "../components/recentPurchases";
import Vue from "vue";
import circleplot from "../components/Circleplot";
import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

export default {
  components: {recentPurchases, circleplot},
  data: function () {
    return {
      chartOptions: {},
      series: [44, 55, 41, 17, 15],
    commonlyPurchasedGoods: [{ productName: "test", subtitle: "test2", purchaseDate: "12/12/12" }, { productName: "Kraft", subtitle: "Dinner", purchaseDate: "12/12/12" }]
    }
  }
};
</script>

<style>
.spanning{
  width: 100%;
  height: 100%;
}

.fakeBox{
  width: 100px;
  height:204px;
}

.flexBoxColumn{
  display: flex;
  flex-direction: column;
} 
</style>