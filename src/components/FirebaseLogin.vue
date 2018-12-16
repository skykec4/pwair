<template>
  <button @click="login">login</button>
</template>

<script>
export default {
  data() {
    return {
      emali: "",
      password: ""
    };
  },
  methods: {
    login() {
      // https://firebase.google.com/docs/auth/web/password-auth?hl=ko
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then()
        .catch();
    }
  }
};
</script>

<style></style>
