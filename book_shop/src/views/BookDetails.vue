<template>
  <div>
    <NavBar />
    <SubNav />
    <v-container>
      <v-row v-if="selectedBook">
        <v-col cols="12" sm="8">
          <v-container>
            <v-row class="product-details">
              <div class="product-title">{{ selectedBook.title }}</div>
              <div class="font-weight-bold text-deep-orange-accent-2 mb-3">
                {{ selectedBook.author }} (Author)
              </div>
              <div class="product-description">
                {{ selectedBook.description }}
              </div>
              <div class="product-price">Price: $ {{ selectedBook.price }}</div>
              <span>
                <v-btn
                  @click="addToCartDialog"
                  color="deep-orange-accent-2"
                  outlined
                  v-if="isLoggedIn && selectedBook.id"
                >
                  <v-icon left>mdi-cart-plus</v-icon>
                  Add to Cart
                </v-btn>
                <div v-else>
                  <p>You must be logged in to add to cart.</p>
                  <!-- You can add a login button or a link to your login page here -->
                </div>
              </span>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img :src="selectedBook.cover_image_url" class="h-100" cover></v-img>
        </v-col>
      </v-row>
    </v-container>
    <Reviews />
    <Footer />

    <!-- Add to Cart Dialog -->
    <v-dialog
      transition="dialog-top-transition"
      v-model="showAddToCartDialog"
      max-width="600"
    >
      <v-card>
        <v-container>
          <h2 class="text-center mb-3">Add To Cart</h2>
          <v-row>
            <v-col>
              <v-card-title>{{ selectedBook.title }}</v-card-title>
              <v-card-text>
                <div class="font-weight-bold text-deep-orange-accent-2 mb-3">
                  {{ selectedBook.author }} (Author)
                </div>
                <div class="product-description">{{ selectedBook.description }}</div>
                <div class="product-price">Price: $ {{ selectedBook.price }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="continueShopping">Continue Shopping</v-btn>
                <router-link
                  :to="{
                    name: 'checkout',
                    params: { bookId: selectedBook.id },
                  }"
                  v-if="isLoggedIn"
                >
                  <v-btn>Checkout</v-btn>
                </router-link>

                <div v-else>
                  <p>You must be logged in to proceed to checkout.</p>
                  <!-- You can add a login button or a link to your login page here -->
                </div>
              </v-card-actions>
            </v-col>
            <v-col>
              <v-img :src="selectedBook.cover_image_url" class="h-100" cover></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SubNav from "@/components/SubNav.vue";
import Footer from "@/components/Footer.vue";
import Reviews from "@/components/Reviews.vue";

export default {
  name: "Home",

  components: {
    NavBar,
    SubNav,
    Footer,
    Reviews,
  },
  props: ["id"],
  data() {
    return {
      showAddToCartDialog: false,
      quantity: 1, // Initialize quantity to 1
    };
  },

  computed: {
    selectedBook() {
      return this.$store.state.book;
    },
    isLoggedIn() {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      return user && token;
    },
  },

  mounted() {
    this.$store.dispatch("getBook", this.id);
  },
  methods: {
    addToCartDialog() {
      this.showAddToCartDialog = true;
      console.log("Add to Cart button clicked");
      const cartItem = {
        id: this.selectedBook.id,
        title: this.selectedBook.title,
        price: this.selectedBook.price,
        quantity: this.quantity,
      };

      // Dispatch an action to add the item to the cart in the store
      this.$store.dispatch("addToCart", cartItem);
      console.log("Item added to cart:", cartItem);
    },
    continueShopping() {
      this.showAddToCartDialog = false;
    },
  },
};
</script>

<style scoped>
.product-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
}

.product-title {
  font-size: 34px;
  margin-bottom: 5px;
  font-weight: bold;
}

.product-description {
  font-size: 16px;
  margin-bottom: 20px;
}

.product-price {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.purchase-btn,
.cart-btn {
  margin-top: 10px;
}
</style>
