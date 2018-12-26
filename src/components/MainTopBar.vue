<template>
  <header>
    <v-toolbar color="grey darken-1" dark>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-menu :nudge-width="100">
        <v-toolbar-title slot="activator">
          <v-icon dark>reorder</v-icon>
        </v-toolbar-title>

        <v-list>
          <v-list-tile v-for="(item,index) in items" :key="index" @click="click(item.title)">
            <router-link :to="item.URI">
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </router-link>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-toolbar-title>{{this.toolbarTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat @click="logout">Logout</v-btn>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Main", URI: "/main/MainProduct" },
        { title: "Sub", URI: "/main/SubProduct" },
        { title: "News", URI: "/main/news" },
        { title: "firebase", URI: "/main/firebase" }
      ],
      toolbarTitle: "" || "Main"
    };
  },
  methods: {
    click(item) {
      this.toolbarTitle = item;
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(res => {
          alert("로그아웃 되었습니다.");
          this.$router.push("/login");
        })
        .catch(err => {
          console.log("로그아웃 error", err);
        });
    }
  }
};
</script>

<style scoped>
</style>
