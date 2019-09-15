<template>
 <div class="col-12 spanning">
   <div class="row"> 
     <div class="col-6 heightAuto">
      <v-container class="height100">
        <v-card
          class="col-4 height100 cardStyle" 
        >
          {{"This month, you spent the most money on COFFEE."}}
        </v-card>
      </v-container>    
     </div>
     <div class="col-6">
      <v-container>
        <v-card
          
          class="col-4 cardStyle"
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
    
        class="mx-auto cardStyle"
        tile
      >
        <v-card-title>Commonly Purchased Items</v-card-title>
        <v-list>
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

.heightAuto{
  height: auto;
}

.height100{
  height: 100%;
}

.cardStyle{
  border-radius: 10px;
}
</style>