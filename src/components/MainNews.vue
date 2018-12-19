<template>
  <div>
    <!-- <p v-text="this.$store.state.newsList"></p> -->
    <div v-for="(data, index) in this.$store.state.newsList" :key="index">
      <ul>
        <li>{{data.id}}</li>
        <li>{{data.title}}</li>
        <li>{{data.points}}</li>
        <li>{{data.user}}</li>
        <li>{{data.time}}</li>
        <li>{{data.time_ago}}</li>
        <li>{{data.comments_count}}</li>
        <li>{{data.type}}</li>
        <a :href="data.url" target="_blank">링크</a>
        <li>{{data.domain}}</li>
        <hr>
      </ul>
      <p></p>
    </div>
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
  },
  mounted() {
    console.log(this.$store.state.newsList);
  }
};
</script>

<style>
</style>
