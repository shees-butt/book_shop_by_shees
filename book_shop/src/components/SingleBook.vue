<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="8">
        <v-container>
          <v-row class="product-details">
            <v-title class="product-title">Original Sins</v-title>
            <v-author class="font-weight-bold text-deep-orange-accent-2 mb-3"
              >Gail Gibbons (Author)</v-author
            >
            <v-description class="product-description">
              From acclaimed columnist and political commentator Michael
              Harriot, a searingly smart and bitingly hilarious retelling of
              American history that corrects the record and showcases the
              perspectives and experiences of Black Americans. America's
              backstory is a whitewashed mythology implanted in our collective
              memory. It is the story of the pilgrims on the Mayflower building
              a new nation. It is George Washington's cherry tree and Abraham
              Lincoln's log cabin. It is the fantastic tale of slaves that
              spontaneously teleported themselves here with nothing but strong
              backs and negro spirituals. It is a sugarcoated legend based on an
              almost true story. It should come as no surprise that the dominant
              narrative of American history is blighted with errors and
              oversights--after all, history books were written by white men
              with their perspectives at the forefront. It could even be said
              that the devaluation and erasure of the Black experience is as
              American as apple pie. In Black AF History, Michael Harriot
              presents a more accurate version of American history. Combining
              unapologetically provocative storytelling with meticulous research
              based on primary sources as well as the work of pioneering Black
              historians, scholars, and journalists, Harriot removes the white
              sugarcoating from the American story, placing Black people
              squarely at the center. With incisive wit, Harriot speaks
              hilarious truth to oppressive power, subverting conventional
              historical narratives with little-known stories about the
              experiences of Black Americans. From the African Americans who
              arrived before 1619 to the unenslavable bandit who inspired
              America's first police force, this long overdue corrective
              provides a revealing look into our past that is as urgent as it is
              necessary. For too long, we have refused to acknowledge that
              American history is white history. Not this one. This history is
              Black AF.
            </v-description>
            <v-price class="product-price">Price: $25</v-price>
            <v-span>
              <router-link to="/" class="purchase-btn">
                <v-btn color="deep-orange-accent-2" variant="outlined"
                  >Purchase Now</v-btn
                >
              </router-link>
              <router-link to="/" class="cart-btn ms-5">
                <v-btn color="deep-orange-accent-2" variant="outlined"
                  >Add to Cart</v-btn
                >
              </router-link></v-span
            >
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" sm="4">
        <v-img
          src="https://images-us.bookshop.org/ingram/9781250799425.jpg?height=500&v=v2-78ce685ce2858fffbdc13fca0ff22994"
          class="h-100"
          cover
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
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