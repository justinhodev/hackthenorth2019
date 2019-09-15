<template>
  <v-list-item two-line>
    <v-list-item-content>
      <!-- <v-flex class="col-2"> -->
      <v-list-item-title>{{product.name}}</v-list-item-title>
      <v-list-item-subtitle>{{product.vendor}}</v-list-item-subtitle>
      <!-- </v-flex> -->
      <!-- <v-flex class="col-4"> -->
      <!-- <v-list-item-subtitle>You purchased this {{product.times}} times in the last month</v-list-item-subtitle> -->
      <!-- </v-flex> -->
    </v-list-item-content>
    <v-list-item-action class="title success--text">
      <v-list-item-subtitle>Total</v-list-item-subtitle>
      ${{product.price}}
    </v-list-item-action>
  </v-list-item>
</template>

<script>


export default {
  props: ["product"]

}
</script>

<style>
</style>