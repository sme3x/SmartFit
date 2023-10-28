<script>
export default {
  data() {
    return {
      drawer: null,
      links: [],
    };
  },
  created() {
    this.links = this.generateLinks();
  },
  methods: {
    generateLinks() {
      return [
        ['mdi-home', this.$t('navigation.home')],
        ['mdi-chart-line', this.$t('navigation.statistics')]
      ];
    },
  },
};
</script>

<template>
    <!-- <v-system-bar>
      <v-spacer></v-spacer>
      <v-icon>mdi-square</v-icon>
      <v-icon>mdi-circle</v-icon>
      <v-icon>mdi-triangle</v-icon>
    </v-system-bar> -->
    <v-app-bar color="blue">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>{{ this.$t('title') }}</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-sheet
        color="grey-lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey-darken-1"
          size="64"
        ></v-avatar>

        <div>john@google.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
