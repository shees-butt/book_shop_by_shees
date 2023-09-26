<template>
  <v-container>
    <v-row>
      <v-col v-for="(card, index) in cards" :key="index" cols="12" sm="4">
        <v-card class="mx-auto pb-2" max-width="344">
          <v-img :src="card.image" height="500px" cover></v-img>
          <v-div class="d-flex">
            <v-div class="ma-1 me-auto"
              ><v-card-title>
                {{ card.title }}
              </v-card-title></v-div
            >
            <v-div class="ma-2 me-4"
              ><v-btn color="red" icon="mdi-heart" size="small"></v-btn
            ></v-div>
          </v-div>
          <v-div class="d-flex">
            <v-div class="ma-4 me-auto"
              ><v-card-price class="font-weight-bold text-green ms-1">
                Price: {{ card.price }}
              </v-card-price></v-div
            >
            <v-div class="ma-4"
              ><v-card-author
                class="font-weight-bold text-deep-orange-accent-2"
              >
                Author: {{ card.author }}
              </v-card-author></v-div
            >
          </v-div>

          <v-card-actions class="ms-3">
           <router-link to="/bookdetails"> <v-btn color="deep-orange-accent-2" variant="outlined">
              Buy Now!
            </v-btn></router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        image:
          "https://images-us.bookshop.org/ingram/9780593539279.jpg?height=500&v=v2-106211ed3da7d63be3dc17f3fca6fd89",
        title: "Drama Free",
        price: "$18",
        author: "Gail Gibbons",
      },
      {
        image:
          "https://images-us.bookshop.org/ingram/9781250859914.jpg?height=500&v=v2-c0550c118665c0ff2b2cd96638dcca56",
        title: "No One Can Know",
        price: "$22",
        author: "Gail Gibbons",
      },
      {
        image:
          "https://images-us.bookshop.org/ingram/9781250799425.jpg?height=500&v=v2-78ce685ce2858fffbdc13fca0ff22994",
        title: "Original Sins",
        price: "$18",
        author: "Gail Gibbons",
      },
      {
        image:
          "https://images-us.bookshop.org/ingram/9780063159488.jpg?height=500&v=v2-a81d803fedc0bc19490c0add00000000",
        title: "Good Inside",
        price: "$24",
        author: "Gail Gibbons",
      },
      {
        image:
          "https://images-us.bookshop.org/ingram/9780306829758.jpg?height=500&v=v2-7895ae85609a4d90c098130a704db59b",
        title: "Super Powers",
        price: "$12",
        author: "Gail Gibbons",
      },
      {
        image:
          "https://images-us.bookshop.org/ingram/9780814348420.jpg?height=500&v=v2-d999023305a1fe785e7fec809e7492e8",
        title: "Memoir Trees",
        price: "$15",
        author: "Gail Gibbons",
      },
      {
        image:
          "https://images-us.bookshop.org/ingram/9781400033416.jpg?height=500&v=v2",
        title: "Beloved",
        price: "$19",
        author: "Gail Gibbons",
      },
      {
        image:
          "https://images-us.bookshop.org/ingram/9781728248448.jpg?height=500&v=v2-dd58d903a7ca5a9cdbafcf8fd435b144",
        title: "Widowland",
        price: "$18",
        author: "Gail Gibbons",
      },
      {
        image:
          "https://images-us.bookshop.org/ingram/9781953387165.jpg?height=500&v=v2-309db63c8144138fdef025dc11c37c3b",
        title: "My Volcano",
        price: "$25",
        author: "Gail Gibbons",
      },
      // Add more card objects as needed
    ],
  }),
};
</script>
