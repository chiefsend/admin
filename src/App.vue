<template>
  <v-app>

    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            ChiefSend
          </v-list-item-title>
          <v-list-item-subtitle>
            Admin
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in nav_items" :key="item.title" link :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <!-- Left -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ChiefSend</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Right -->
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-avatar color="blue">
          <v-icon dark>mdi-theme-light-dark</v-icon>
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <errors />
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Errors from "./components/Events";

export default {
  name: 'App',
  components: {Errors},
  data() {
    return {
      nav_items: [
        {title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/'},
        {title: 'Shares', icon: 'mdi-cloud-upload', route: '/shares'},
        {title: 'Jobs', icon: 'mdi-application-cog', route: '/jobs'},
      ],
      drawer: null,
      acc_items: [
        {title: 'Settings', icon: 'mdi-account-settings'},
        {title: 'Logout', icon: 'mdi-logout'},
      ]
    }
  },
};
</script>
