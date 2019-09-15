<template>
  <div>

    <apexchart
      v-if="stores.length >= 0 && spendings.length >= 0"
      type="donut"
      :options="{labels: stores, 
      title:{text: 'Commonly Visited Stores', style: { fontSize:  '20px'}} }"
      :series="spendings"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import Vue from "vue";

Vue.use(VueApexCharts);
export default {
  computed: {
    stores() {
      return this.$store.getters.getStoreNames
    },
    spendings() {
      return this.$store.getters.getSpendingByStore
    }
  }
}
</script>

<style>
</style>