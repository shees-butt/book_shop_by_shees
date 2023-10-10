<template>
  <div>
    <NavBar />
    <SubNav />
    <v-container>
      <v-row>
        <!-- left Section: User Information Form -->
        <v-col cols="12" sm="8">
          <v-card>
            <v-card-title>Checkout</v-card-title>
            <v-card-text>
              <!-- Your user information form goes here -->
              <v-form>
                <v-text-field label="Full Name"></v-text-field>
                <v-text-field label="Email"></v-text-field>
                <v-text-field label="Address"></v-text-field>
                <v-text-field label="City"></v-text-field>
                <v-text-field label="Postal Code"></v-text-field>
                <v-text>Payment Method</v-text>
                <v-radio
                  color="deep-orange-accent-2"
                  label="Cash On Delivery"
                  value="1"
                ></v-radio>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn color="deep-orange-accent-2" @click="placeOrder">
                Place Order
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- right Section: Product Details -->
        <v-col cols="12" sm="4">
          <v-row v-for="(item, index) in cartItems" :key="index" class="product-details">
            <!-- <v-col cols="3">
              <v-img :src="item.cover_image_url" class="h-100" cover></v-img>
            </v-col> -->
            <v-col cols="12">
              <div class="product-title">{{ item.title }}</div>
              <div class="font-weight-bold text-deep-orange-accent-2 mb-3">
                {{ item.author }} (Author)
              </div>
              <div class="product-price">Price: $ {{ item.price }}</div>
              <div class="product-quantity">
                Quantity: {{ item.quantity }}
              </div>
            </v-col>
          </v-row>
          
          <!-- Display Book Details -->
          <v-row v-if="bookDetails" class="product-details">
            <!-- <v-col cols="3">
              <v-img :src="bookDetails.cover_image_url" class="h-100" cover></v-img>
            </v-col> -->
            <v-col cols="12">
              <div class="product-title">{{ bookDetails.title }}</div>
              <div class="font-weight-bold text-deep-orange-accent-2 mb-3">
                {{ bookDetails.author }} (Author)
              </div>
              <div class="product-price">Price: $ {{ bookDetails.price }}</div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SubNav from "@/components/SubNav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "CheckOut",

  components: {
    NavBar,
    SubNav,
    Footer,
  },
  computed: {
    cartItems() {
      return this.$store.state.cart;
    },
    bookDetails() {
      return this.$store.state.book;
    },
  },
  methods: {
    placeOrder() {
      // order placement logic
    },
  },
};
</script>

<style scoped>
.product-details {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 20px; /* Add margin between cart items */
}

.product-title {
  font-size: 24px;
  margin-bottom: 5px;
  font-weight: bold;
}

.font-weight-bold {
  font-weight: bold;
}

.product-price {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.product-quantity {
  font-size: 18px;
  margin-top: 10px;
}
</style>
