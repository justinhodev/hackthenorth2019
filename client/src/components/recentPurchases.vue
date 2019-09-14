<template>
  <v-list-item two-line>
    <v-list-item-content>
      <v-list-item-title>{{product.productName}}</v-list-item-title>
      <v-list-item-subtitle>{{product.subtitle}}</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-icon>
      <v-icon>mdi-watch</v-icon>
    </v-list-item-icon>
  </v-list-item>
</template>

<script>
export default {
  props: ["product"]

}
</script>

<style>
</style>