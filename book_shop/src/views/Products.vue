<template>
  <NavBar />
  <SubNav />

  <BookList :books="books" />

  <div class="text-center">
    <v-pagination v-model="page" :length="10" rounded="circle"></v-pagination>
  </div>
  <Footer />
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import SubNav from "@/components/SubNav.vue";
import Footer from "@/components/Footer.vue";
import BookList from "@/components/BookList.vue";

export default {
  name: "Home",

  components: {
    NavBar,
    SubNav,
    Footer,
    BookList,
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  mounted() {
    this.$store.dispatch("getBooks");
  },
};
</script>