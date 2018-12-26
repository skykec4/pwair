<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <h1>Login</h1>
        <div>
          <v-flex xs12 sm6 md3>
            <v-text-field :rules="emailRules" v-model="email" label="email"></v-text-field>
          </v-flex>
        </div>
        <div>
          <v-flex xs12 sm6 md3>
            <v-text-field :rules="passwordRules" v-model="password" label="password"></v-text-field>
          </v-flex>
        </div>
        <v-btn v-on:click.prevent="signInWithFirebase" color="info">login</v-btn>

        <!-- <v-btn v-on:click.prevent="signInWithFirebase" color="info">Sign In</v-btn> -->
        <router-link to="/SignIn">Sign In</router-link>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      email: "test@test.com",
      password: "123123",
      emailRules: [v => !!v || "email is required"],
      passwordRules: [v => !!v || "password is required"]
    };
  },
  methods: {
    signInWithFirebase() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(response => {
          this.$router.push("/main");
        })
        .catch(error => {
          // console.error(error);
          if ("auth/user-not-found" == error.code) {
            alert("해당 사용자가 없습니다.");
          }
          //throw new Error(error);
        });
    }
  }
};
</script>

<style></style>
