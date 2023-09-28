<template>
  <v-container fluid class="background-container">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12 pa-5">
          <form @submit.prevent="submitForm" ref="signupForm" novalidate>
            <h1 class="text-center mb-5">Sign Up</h1>
            <v-text-field
              v-model="name"
              label="Name"
              prepend-inner-icon="mdi-account-outline"
              required
              :error-messages="nameErrors"
              :error="submitted && nameErrors.length > 0"
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="E-mail"
              prepend-inner-icon="mdi-email-outline"
              required
              type="email"
              :error-messages="emailErrors"
              :error="submitted && emailErrors.length > 0"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              prepend-inner-icon="mdi-lock-outline"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              @click:append-inner="visible = !visible"
              required
              pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).*$"
              title="Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol."
              :error-messages="passwordErrors"
              :error="submitted && passwordErrors.length > 0"
            ></v-text-field>

            <v-btn color="primary" class="mr-4" type="submit">Submit</v-btn>
            <p class="text-center pt-5">
              Already have an account?
              <router-link to="/login">Login</router-link>
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
      name: "",
      email: "",
      password: "",
      visible: false,
      submitted: false,
    };
  },
  computed: {
    nameErrors() {
      return this.name.length < 6 && this.submitted
        ? ["Username must be at least 6 characters"]
        : [];
    },
    passwordErrors() {
      const errors = [];
      if (
        !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).*$/.test(
          this.password
        ) &&
        this.submitted
      ) {
        errors.push(
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol."
        );
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
    async submitForm() {
      try {
        this.submitted = true; // Set submitted to true
        if (this.$refs.signupForm.checkValidity()) {
          const userData = {
            name: this.name,
            email: this.email,
            password: this.password,
          };

          // Dispatch the signup action from the Vuex store
          const user = await this.$store.dispatch("signup", userData);

          // Handle successful signup if needed
          console.log("User signed up:", user);

          this.clearForm();
        } else {
          console.log("Form is invalid. Please correct the errors.");
        }
      } catch (error) {
        // Handle signup error (e.g., display an error message)
        console.error("Signup error:", error);
      }
    },

    clearForm() {
      // Reset the form fields to their initial empty state
      this.name = "";
      this.email = "";
      this.password = "";
      this.visible = false;
      this.submitted = false;

      // Optionally, you can also reset any specific error messages here if needed
    },

    isValidEmail(email) {
      // Implement a basic email format validation here
      // You can use a regular expression or a more comprehensive library for email validation
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
  background-size: cover; /* Ensure the image covers the entire container */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  background-position: center center; /* Center the image horizontally and vertically */
  height: 100vh; /* Set the container's height to the viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Center the card vertically on small screens */
@media screen and (max-width: 600px) {
  .elevation-12 {
    margin-top: 20vh;
  }
}

/* Style for invalid input fields */
.v-text-field.error--text {
  border-color: red;
}

/* Style for valid input fields */
.v-text-field.success--text {
  border-color: green;
}
</style>
