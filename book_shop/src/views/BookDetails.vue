<template>
  <NavBar />
  <SubNav />
  <SingleBook/>
  <Reviews/>
  <Footer />
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import SubNav from "@/components/SubNav.vue";
import Footer from "@/components/Footer.vue";
import SingleBook from "@/components/SingleBook.vue";
import Reviews from "@/components/Reviews.vue";

export default {
  name: "Home",

  components: {
    NavBar,
    SubNav,
    Footer,
    SingleBook,
    Reviews,
  },
  props: ['id']
};
</script>