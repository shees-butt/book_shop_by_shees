<template>
  <v-container fluid class="background-container">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12 pa-5">
          <form @submit.prevent="submitForm" ref="loginForm" novalidate>
            <h1 class="text-center mb-5">Login</h1>
            <v-text-field
              v-model="email"
              prepend-inner-icon="mdi-email-outline"
              label="E-mail"
              required
              type="email"
              :error-messages="emailErrors"
              :error="submitted && emailErrors.length > 0"
            ></v-text-field>
            <v-text-field
              v-model="password"
              prepend-inner-icon="mdi-lock-outline"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              @click:append-inner="visible = !visible"
              label="Password"
              required
              :error-messages="passwordErrors"
              :error="submitted && passwordErrors.length > 0"
            ></v-text-field>
            <v-btn color="primary" class="mr-4" type="submit">Login</v-btn>
            <p class="text-center pt-5">
              Don't have an account?
              <router-link to="/signup">Sign Up</router-link>
            </p>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      submitted: false,
      visible: false,
    };
  },
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.password && this.submitted) {
        errors.push("Password is required");
      }
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.isValidEmail(this.email) && this.submitted) {
        errors.push("Invalid email format");
      }
      return errors;
    },
  },
  methods: {
    submitForm() {
      this.submitted = true;
      if (this.$refs.loginForm.checkValidity()) {
        console.log("Form is valid. Logging in...");
        const loginData = {
          email: this.email,
          password: this.password,
        };
        this.$store
          .dispatch("userLogin", loginData)
          .then(() => {
            this.$router.push("/");
          })
          .catch((error) => {
            console.log("Failed Login", error.response);
          });
      } else {
        console.log("Form is invalid. Please correct the errors.");
      }
    },
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
  },
};
</script>

<style scoped>
.elevation-12 {
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: #fff;
  padding: 20px;
}
.background-container {
  background-image: url("https://images.unsplash.com/photo-1579370318443-8da816457e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .elevation-12 {
    margin-top: 20vh;
  }
}
</style>
