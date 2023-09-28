<template>
  <div>
    <NavBar />
    <SubNav/>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows="hover"
      class="h-screen"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <!-- Add an image here -->
        <v-img :src="slide.imageSrc" height="100%" cover>
          <!-- Add a transparent overlay for text -->
          <v-sheet color="rgba(0, 0, 0, 0.5)" height="100%">
            <div
              class="d-flex flex-column fill-height justify-center align-center"
            >
              <!-- Add heading text -->
              <h2 class="text-h2" style="color: white">{{ slide.heading }}</h2>
              <!-- Add a button -->
              <router-link to="/products" class="text-decoration-none"
                ><v-btn class="mt-8" color="deep-orange-accent-2"
                  >Discover The Store</v-btn
                ></router-link
              >
            </div>
          </v-sheet>
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <BookList :books="books"/>
    
    <Footer />
  </div>
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
    BookList
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  mounted() {
    this.$store.dispatch("getBooks");
  },
  
  data() {
    return {
      slides: [
        {
          imageSrc:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Replace with your image URL
          heading: "Unlock Worlds of Imagination: Enter Our Book Nook",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Replace with your image URL
          heading: "Explore Endless Worlds: Your Virtual Bookstore",
        },
        {
          imageSrc:
            "https://assets.brightspot.abebooks.a2z.com/dims4/default/7a1be20/2147483647/strip/true/crop/800x600+0+0/resize/1600x1200!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Fdc%2Fc0%2F1e44eb5b4f64aef77543b49cd4d2%2Fbooks-promo.png", // Replace with your image URL
          heading: "A Library in Your Pocket: Discover, Read, Repeat",
        },
      ],
    };
  },
};
</script>
