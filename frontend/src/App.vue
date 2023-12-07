<script setup>
  import Navigation from "./views/Navigation.vue"
  import { RouterView } from 'vue-router'
</script>

<template>
  <v-app id="inspire">
    <!-- This is where login comes -->
    <v-main v-if="isAuthenticated">
      <Navigation />
      <!-- class="py-8 px-6" -->
      <v-container fluid class="py-8 px-0">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
export default {
  // setup: () => ({ ...toRefs(useStore()) }),
  data () {
    return {
      isAuthenticated: true
    }
  },
  created () {
    const store = useAuthStore()
    // console.log(store);
    // console.log(store.increment());
    // console.log(store.doubleCount);
  }
}
</script>
