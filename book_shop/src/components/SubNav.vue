<template>
  <v-card>
    <v-tabs v-model="tab" class="bg-grey-lighten-5" color="deep-orange-accent-2" align-tabs="center" slider-color="deep-orange-accent-2">
      <v-tab>
        <router-link to="/products"  class="nav-link">Products</router-link>
      </v-tab>
      <v-tab>
        <router-link to="/favorites"  class="nav-link">Favorites</router-link>
      </v-tab>
      <v-tab>
        <router-link to="/cart" class="nav-link">Cart</router-link>
      </v-tab>
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
