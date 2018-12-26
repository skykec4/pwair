<template>
  <div>
    <!-- <v-alert :value="true" type="success">This is a success alert.</v-alert>

    <v-alert :value="true" type="info">This is a info alert.</v-alert>

    <v-alert :value="true" type="warning">This is a warning alert.</v-alert>

    <v-alert :value="true" type="error">This is a error alert.</v-alert>-->
    <div>{{this.$store.state.weatherList}}</div>
  </div>
</template>

<script>
export default {
  created() {
    //this.$store.dispatch("GET_WEATHER_LIST");

    // console.log("vuex data", this.$store.state.userSession);

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        var a = {
          displayName,
          email,
          emailVerified,
          photoURL,
          isAnonymous,
          uid,
          providerData
        };
        console.log("user data", a);
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });
  }
};
</script>

<style>
</style>
