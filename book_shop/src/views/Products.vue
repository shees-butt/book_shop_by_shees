<template>
  <NavBar />
  <SubNav />

  <BookList :books="books" />
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