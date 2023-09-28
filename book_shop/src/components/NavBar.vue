<template>
  <v-app-bar app color="deep-orange-accent-2" class="compact-app-bar">
    <v-toolbar-title class="ml-0 pl-3"
      ><router-link class="text-decoration-none text-white" to="/"
        >Book Haven</router-link
      ></v-toolbar-title
    >
    <div class="text-center flex-grow-1">
      Where Imagination Finds Its Home – Welcome to Book Haven.
    </div>

    <!-- Search Bar -->
    <v-text-field
      v-model="searchText"
      label="Search"
      hide-details
      prepend-inner-icon="mdi-magnify"
      @input="filterProducts"
    ></v-text-field>
    <!-- Add the following line for the Logout button -->
    <v-btn color="error" @click="handleLogout">Logout</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      searchText: "", // Initialize searchText with an appropriate default value
      // Other data properties
    };
  },
  methods: {
    filterProducts() {
      // Your filtering logic here
    },
    // Add this method for Logout
    handleLogout() {
      // Call your logout API here if needed
      // Redirect to the login page or another appropriate route after logout
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
/* Add some custom styles for better appearance and responsiveness */
.compact-app-bar {
  height: 64px; /* Adjust the height as needed */
  padding: 0 16px; /* Add padding to the app bar */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Style the title */
.compact-app-bar .v-toolbar-title {
  font-size: 24px; /* Increase font size */
  font-weight: bold;
  color: white; /* Text color */
}

/* Style the search input */
.compact-app-bar .v-text-field {
  max-width: 300px; /* Limit the width of the search input */
  margin-right: 16px; /* Add some space to the right */
}

/* Adjust styles for mobile devices */
@media (max-width: 600px) {
  .compact-app-bar {
    padding: 0 8px; /* Reduce padding for smaller screens */
  }
  .compact-app-bar .v-toolbar-title {
    font-size: 20px; /* Decrease font size for smaller screens */
  }
  .compact-app-bar .v-text-field {
    max-width: 200px; /* Reduce input width for smaller screens */
  }
}
</style>
