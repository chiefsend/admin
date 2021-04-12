<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      Menü
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn to="/shares" text>
        Shares
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({drawer: null}),
};
</script>
