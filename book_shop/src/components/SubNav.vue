<template>
  <v-card>
    <v-tabs
      v-model="tab"
      class="bg-grey-lighten-5"
      color="deep-orange-accent-2"
      align-tabs="center"
      slider-color="deep-orange-accent-2"
    >
      <router-link to="/products" class="nav-link">
        <v-tab> Products </v-tab></router-link
      >
      <router-link to="/favorites" class="nav-link"
        ><v-tab> Favorites </v-tab></router-link
      >
      <router-link to="/cart" class="nav-link">
        <v-tab> Cart </v-tab></router-link
      >
    </v-tabs>
    <router-view></router-view>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),
};
</script>

<style scoped>
/* Style the sub-navigation links */
.nav-link {
  text-decoration: none;
  color: inherit;
  padding: 0.5rem 1rem;
  font-weight: bold;
}

/* Add responsive styles for smaller screens */
@media (max-width: 768px) {
  .nav-link {
    padding: 0.5rem;
    font-size: 14px;
  }
}
</style>
