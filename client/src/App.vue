<template>
  <v-app>
    <v-app-bar
      dark
      dense
      app
    >
      <v-toolbar-title class="headline">
        <span> <img class="namelogo" src="./assets/piggyfinal.png"> </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      dark
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.redirect"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- TODO: Add the logout and user profile here -->
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', redirect: '/' },
      { title: 'Goals', icon: 'mdi-target', redirect: 'goals' },
      { title: 'Settings', icon: 'mdi-settings', redirect: 'settings' },
      { title: 'Help', icon: 'mdi-help-box', redirect: 'help' }
    ],
    right: null,
  }),
};

</script>

<style>
.namelogo{
  width: 90px;
  height: 30px;
}
</style>
