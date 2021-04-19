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
      <v-menu open-on-hover top offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar color="indigo" v-bind="attrs" v-on="on">
            <v-icon dark>mdi-account-circle</v-icon>
          </v-avatar>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in acc_items" :key="index">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      nav_items: [
        {title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/'},
        {title: 'Shares', icon: 'mdi-cloud-upload', route: '/shares'},
        {title: 'Jobs', icon: 'mdi-application-cog', route: '/jobs'},
      ],
      drawer: null,
      acc_items: [
        {title: 'Settings',icon: 'mdi-account-settings'},
        {title: 'Logout', icon: 'mdi-logout'},
      ]
    }
  },
};
</script>
