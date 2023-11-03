<script setup>
  import Navigation from "./views/Navigation.vue"
  import { RouterView } from 'vue-router'
</script>

<template>
  <v-app id="inspire">
    <Navigation />

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
