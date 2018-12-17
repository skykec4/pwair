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
    </v-toolbar>

    <!--  -->
    <!--  -->
    <!-- <div>
      <span>Top Bar</span>
    </div>-->
    <!-- <div>
      <router-link to="/main/SubProduct">SubProduct</router-link>
      <router-link to="/main/news">news</router-link>
    </div>-->
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Main", URI: "/main/MainProduct" },
        { title: "Sub", URI: "/main/SubProduct" },
        { title: "News", URI: "/main/news" }
      ],
      toolbarTitle: "" || "Main"
    };
  },
  methods: {
    click(item) {
      console.log("click", item);
      this.toolbarTitle = item;
    },
    title(item) {
      return item;
    }
  }
};
</script>

<style scoped>
</style>
