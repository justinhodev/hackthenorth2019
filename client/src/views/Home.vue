<template>
  <div class="col-12">
    <div class="row">
      <div class="col-6">
        <v-container>
          <v-card
            dark
            class="col-4"
          >
            <span>
              {{"This month, you spent the most money on COFFEE."}}
            </span>
          </v-card>
        </v-container>
      </div>
      <div class="col-6">
        <v-container>
          <v-card
            dark
            class="col-4"
          >
            <circleplot></circleplot>
          </v-card>
        </v-container>
      </div>
    </div>
    <v-container>
      <v-card
        dark
        class="
              mx-auto"
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
import { mapActions, mapState } from "vuex"
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

function countStores(receipts) {
  var countPerStore = {};
  receipts.forEach(element => {
    if (!countPerStore[element]) {
      countPerStore[element] = 1;
    }
    else {
      countPerStore[element] += 1;
    }
  });
  console.log(countPerStore);
  return countPerStore;
}

export default {
  components: { recentPurchases, circleplot },
  created() {
    this.$store.dispatch("getReceipts")
  },
  computed: mapState({ 
    receipts: state => state.receipts.data
  }),
  data: function () {
    return {
      commonlyPurchasedGoods: [{ productName: "test", subtitle: "test2", purchaseDate: "12/12/12" }, { productName: "Kraft", subtitle: "Dinner", purchaseDate: "12/12/12" }],
      //receipts: this.$store.state.receipts
    }
  }
};
</script>
