<template>
  <v-container>
    <v-row>
      <v-col v-for="book in books" :key="book.id" cols="12" sm="4">
        <v-card class="mx-auto pb-2" max-width="344">
          <v-img :src="book.cover_image_url" height="500px" cover></v-img>
          <div class="d-flex">
            <div class="ma-1 me-auto">
              <v-card-title>{{ book.title }}</v-card-title>
            </div>
            <div class="ma-2 me-4">
              <v-btn color="red" icon="mdi-heart" size="small"></v-btn>
            </div>
          </div>
          <div class="d-flex">
            <div class="ma-4 me-auto">
              <div class="font-weight-bold text-green ms-1">
                Price: {{ book.price }}
              </div>
            </div>
            <div class="ma-4">
              <div class="font-weight-bold text-deep-orange-accent-2">
                Author: {{ book.author }}
              </div>
            </div>
          </div>

          <v-card-actions class="ms-3">
            <router-link :to="{ name: 'bookdetails', params: { id: book.id } }">
              <v-btn color="deep-orange-accent-2" variant="outlined">
              <v-icon left>mdi-book</v-icon>
              Details
              </v-btn>
            </router-link>
            <v-btn
              @click="addToCart(book)"
              color="deep-orange-accent-2"
              variant="outlined"
              v-if="isLoggedIn"
              class="ms-2"
            >
              <v-icon left>mdi-cart-plus</v-icon>
              Add to Cart
            </v-btn>
            <!-- <div v-else>
              <p>You must be logged in to add to cart.</p>
            </div> -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["books"],
  computed: {
    isLoggedIn() {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      return user && token;
    },
  },
  methods: {
    addToCart(book) {
      console.log("Add to Cart button clicked for book:", book);
      const cartItem = {
        id: book.id,
        title: book.title,
        price: book.price,
        quantity: 1, 
      };
      this.$store.dispatch("addToCart", cartItem);
      console.log("Item added to cart:", cartItem);
    },
  },
};
</script>
