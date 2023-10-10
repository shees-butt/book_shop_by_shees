<template>
  <v-footer class="bg-deep-orange-accent-2">
    <v-row>
         <v-col class="text-center mt-4" cols="12">
        <h3>Book Haven</h3>
      </v-col>
      <v-col cols="12">
        <v-row justify="center" no-gutters>
          <v-col v-for="link in links" :key="link" cols="12" sm="6" md="3" lg="2">
            <v-btn color="white" variant="text" class="mx-2" rounded="xl">
              {{ link }}
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-4">
          <v-col cols="12" sm="8" md="6" lg="4">
            <div class="text-center">
              <h3>Subscribe to our Newsletter</h3>
              <p>Get the latest updates and news delivered to your inbox.</p>
            </div>
            <v-row justify="center" class="mt-4">
              <v-col cols="12" sm="8">
                <v-text-field v-model="email" label="Email" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-btn class="mt-2" color="bg-blue-grey-lighten-4" @click="subscribe">Subscribe</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Books", "Contact Us"],
    email: "",
  }),
  methods: {
    subscribe() {
      console.log("Subscribed with email:", this.email);
    },
  },
};
</script>
