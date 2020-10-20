<template>
  <v-navigation-drawer app permanent mini-variant>
    <v-list dense>
      <v-list-item>
        <v-list-item-icon>
          <v-icon class="green--text" @click="log()">mdi-link-variant</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item @click="goto('/home')">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          blabla
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="goto('/process')">
        <v-list-item-icon>
          <v-icon>mdi-cogs</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          blabla
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  methods: {
    log(s = "Clicked!") {
      console.log(s);
    },
    goto(route) {
      if (localStorage.validation) {
        this.$router.push({ path: route }).catch(() => {});
      } else {
        this.$router.push({ path: "/" }).catch(() => {});
      }
    },
  },
};
</script>

<style></style>
