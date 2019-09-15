<template>
  <div class="col-12 spanning">
    <div class="row">
      <div class="col-6 heightAuto">
        <v-container class="height100">
          <v-card class="col-4 height100 cardStyle title">
            <span>This month, you spent the most money on {{items[1][0]}}.</span>
          </v-card>
        </v-container>
      </div>
      <div class="col-6">
        <v-container>
          <v-card class="col-4">
            <circleplot></circleplot>
          </v-card>
        </v-container>
      </div>
    </div>
    <v-container>
      <v-card
        class="mx-auto cardStyle"
        tile
      >
        <v-card-title>Recently Purchased Items</v-card-title>
        <v-list>
          <v-list-item-group>
            <recentPurchases
              v-for="item in items[0]"
              :key="item.productName"
              :product="item"
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



export default {
  components: { recentPurchases, circleplot },
  created() {
    this.$store.dispatch("getReceipts")
    this.$store.dispatch("getItems")
  },
  computed: mapState({
    receipts: state => state.receipts.data,
    items: state => {
      function countStores(receipts) {
        if (!receipts) return {};
        var countPerStore = {};
        receipts.forEach(element => {
          console.log(element)
          if (!countPerStore[element.name]) {
            countPerStore[element.name] = 1;
          }
          else {
            countPerStore[element.name] += 1;
          }
        }
        );
        return countPerStore;
      }
      var a = Object.entries(countStores(state.items.data));
      var res = Math.max.apply(Math, Object.entries(countStores(state.items.data)).map(function (o) { console.log("o", o); return o[1]; }))


      return [state.items.data, a.find(function (o) { return o[1] == res; })]
    },
  }),
};
</script>

<style>
.spanning {
  width: 100%;
  height: 100%;
}

.fakeBox {
  width: 100px;
  height: 204px;
}

.heightAuto {
  height: auto;
}

.height100 {
  height: 100%;
}

.cardStyle {
  border-radius: 10px;
}
</style>