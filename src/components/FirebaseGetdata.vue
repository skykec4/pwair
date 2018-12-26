<template>
  <div>
    <h1>getdata</h1>
    <v-btn @click="getData" color="info">getdata</v-btn>
    <div>{{userData}}</div>
  </div>
</template>

<script>
var database = firebase.database();

export default {
  data() {
    return {
      userData: []
    };
  },
  methods: {
    getData() {
      for (let a in this.userData) {
        console.log("userData : ", a);
        if (a == "skykec4") {
          alert("하핫");
        }
      }
    }
  },

  created() {
    let starCountRef = database.ref("users").on("value", snapshot => {
      console.log("starCountRef snapshot : ", snapshot.val());
      this.userData = snapshot.val();
    });
    //console.log("starCountRef : ", starCountRef);

    //   starCountRef;
  }
};
</script>

<style>
</style>
