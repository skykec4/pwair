<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <h1>Sign In</h1>
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
        <v-btn v-on:click.prevent="sendSignInLinkToEmail" color="info">Sign In</v-btn>

        <!-- <v-btn v-on:click.prevent="signInWithFirebase" color="info">Sign In</v-btn> -->
        <!-- <router-link to="/SignIn">Sign In</router-link> -->
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      emailRules: [v => !!v || "email is required"],
      passwordRules: [v => !!v || "password is required"]
    };
  },
  methods: {
    sendSignInLinkToEmail() {
      if (this.valid) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(res => {
            alert("가입을 축하합니다~");
            this.$router.push("/");
          })
          .catch(function(error) {
            console.log("error", error.code);

            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // ...
            if ("auth/email-already-in-use" == error.code) {
              alert("이미 사용중인 email입니다.");
            } else if ("auth/weak-password" == error.code) {
              alert("비밀번호는 최소 6자리이상 입니다.");
            }
          });
      } else {
        alert("입력값을 전부 입력해 주세요");
      }
    }
  }
};
</script>

<style></style>
