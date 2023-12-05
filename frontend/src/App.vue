<script setup>
  import Navigation from "./views/Navigation.vue"
  import { RouterView } from 'vue-router'
</script>

<template>
  <v-app id="inspire">
    <!-- This is where login comes -->
    <Navigation />

    <v-main>
      <!-- class="py-8 px-6" -->
      <v-container fluid class="py-8 px-0">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
