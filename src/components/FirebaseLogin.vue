<template>
  <div>
    <form>
      <div>
        <label for="email">email :</label>
        <input id="email" type="text" v-model="email">
      </div>
      <div>
        <label for="password">password :</label>
        <input id="password" type="current-password" v-model="password">
      </div>

      <button v-on:click.prevent="signInWithFirebase">login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "test@test.com",
      password: "123123"
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
          console.error(error);
          throw new Error(error);
        });
    }
  }
};
</script>

<style></style>
