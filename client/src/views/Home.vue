<template>
  <div>
    <v-container>
      <v-container>
        <v-layout row>
          <v-card
            dark
            class="col-4"
          >
            <v-card-text>
              <div>Word of the Day</div>
              <p class="display-1 text--primary">
                be•nev•o•lent
              </p>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.<br>
                "a benevolent smile"
              </div>
            </v-card-text>
          </v-card>
          <v-card
            dark
            class="mx-auto col-4"
          >
            <v-card-text>
              <div>Word of the Day</div>
              <p class="display-1 text--primary">
                be•nev•o•lent
              </p>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.<br>
                "a benevolent smile"
              </div>
            </v-card-text>
          </v-card>
          <v-card
            dark
            class="mx-auto col-4"
          >
            <v-card-text>
              <div>Word of the Day</div>
              <p class="display-1 text--primary">
                be•nev•o•lent
              </p>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.<br>
                "a benevolent smile"
              </div>
            </v-card-text>
          </v-card>
        </v-layout>
      </v-container>

    </v-container>
    <v-container>
      <v-card
        dark
        class="mx-auto"
        tile
      >
        <v-card-title>Commonly Purchased Items</v-card-title>
        <v-list dark>
          <recentPurchases />
          <recentPurchases />
          <recentPurchases />
          <recentPurchases />
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import recentPurchases from '../components/recentPurchases'

export default {
  components: { recentPurchases },
};
</script>
