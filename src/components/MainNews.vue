<template>
  <div>
    <div>{{this.$store.state.newsList}}</div>
  </div>
</template>

<script>
import TopBar from "../components/MainTopBar.vue";
import { getNewsList } from "../api/index.js";
export default {
  components: {
    TopBar
  },
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
