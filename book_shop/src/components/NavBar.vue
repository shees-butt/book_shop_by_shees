<template>
  <v-app-bar app color="deep-orange-accent-2" class="compact-app-bar">
    <v-toolbar-title class="ml-0 pl-3">
      <router-link class="text-decoration-none text-white" to="/"
        >Book Haven</router-link
      >
    </v-toolbar-title>
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

    <!-- Conditionally show/hide the Login and Logout buttons -->
    <v-btn
      v-if="!isLoggedIn"
      color="bg-blue-grey-lighten-4"
      @click="handleLogin"
      >Login</v-btn
    >
    <v-btn v-else @click="logout">Logout</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    isLoggedIn() {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      // console.log("user:", user);
      // console.log("token:", token);
      return user && token;
    },
  },

  methods: {
    filterProducts() {},
    handleLogin() {
      this.$router.push("/login");
    },
    logout() {
      const userToken = localStorage.getItem("token");

      if (userToken) {
        const headers = {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        };

        fetch("http://10.0.10.211:3300/api/logout", {
          method: "POST",
          headers: headers,
        })
          .then((response) => {
            if (response.ok) {
              console.log("Logout successful");
              localStorage.removeItem("user");
              localStorage.removeItem("token");
              this.$router.push("/login");
            } else {
              console.error("Logout failed with status:", response.status);
            }
          })
          .catch((error) => {
            console.error("Logout failed:", error);
          });
      }
    },
  },
};
</script>

<style scoped>
.compact-app-bar {
  height: 64px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.compact-app-bar .v-toolbar-title {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.compact-app-bar .v-text-field {
  max-width: 300px;
  margin-right: 16px;
}

@media (max-width: 600px) {
  .compact-app-bar {
    padding: 0 8px;
  }
  .compact-app-bar .v-toolbar-title {
    font-size: 20px;
  }
  .compact-app-bar .v-text-field {
    max-width: 200px;
  }
}
</style>
