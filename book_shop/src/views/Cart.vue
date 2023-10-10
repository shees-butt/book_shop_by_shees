<template>
  <div>
    <NavBar />
    <SubNav />
    <v-container>
      <div>
        <h2>Your Cart</h2>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Quantity</th>
              <th>Price</th>
              <th>Proceed</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.price }}</td>
              <td>
                <router-link
                  :to="{
                    name: 'checkout',
                    params: { bookId: item.id },
                  }"
                >
                  <v-btn>Checkout</v-btn>
                </router-link>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SubNav from "@/components/SubNav.vue";
import Footer from "@/components/Footer.vue";
import BookList from "@/components/BookList.vue";

export default {
  name: "Cart",
  components: {
    NavBar,
    SubNav,
    Footer,
    BookList,
  },
  computed: {
    isLoggedIn() {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      return user && token;
    },
    cartItems() {
      return this.$store.state.cart;
    },
  },
};
</script>
