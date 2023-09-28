<template>
  <NavBar />
  <SubNav />
  <v-container>
    <v-row v-if="book">
      <v-col cols="12" sm="8">
        <v-container>
          <v-row class="product-details">
            <div class="product-title">{{ book.title }}</div>
            <div class="font-weight-bold text-deep-orange-accent-2 mb-3"
              >{{ book.author }} (Author)</div
            >
            <div class="product-description">
              {{ book.description }}
            </div>
            <div class="product-price">Price: $ {{ book.price }}</div>
            <span>
              <router-link to="/" class="purchase-btn">
                <v-btn color="deep-orange-accent-2" variant="outlined"
                  >Purchase Now</v-btn
                >
              </router-link>
              <router-link to="/" class="cart-btn ms-5">
                <v-btn color="deep-orange-accent-2" variant="outlined"
                  >Add to Cart</v-btn
                >
              </router-link></span
            >
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" sm="4">
        <v-img :src="book.cover_image_url" class="h-100" cover></v-img>
      </v-col>
    </v-row>
  </v-container>
  <Reviews />
  <Footer />
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

  computed: {
    book() {
      return this.$store.state.book;
    },
  },

  mounted() {
    this.$store.dispatch("getBook", this.id);
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