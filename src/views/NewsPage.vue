<template>
  <div>{{this.$store.state.newsList}}</div>
</template>

<script>
import { getNewsList } from "../api/index.js";
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.$store.dispatch("GET_NEW_LIST");
    // getNewsList()
    //   .then(res => (this.newsList = res.data))
    //   .catch(err => {
    //     console.log("err : ", err);
    //   });
  }
};
</script>

<style>
</style>
