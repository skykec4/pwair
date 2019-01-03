<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import WebFontLoader from "webfontloader";

export default {
  mounted() {
    WebFontLoader.load({
      google: {
        families: ["Roboto:100,300,400,500,700,900"]
      },
      active: this.setFontLoaded
    });
  },
  methods: {
    setFontLoaded() {
      this.$emit("font-loaded");
    }
  }
};
</script>

<style>
@media screen and (max-width: 320px) {
  body {
    background-color: red;
  }
  h1 {
    color: white;
  }
}
@media screen and (max-width: 768px) {
  body {
    background-color: green;
  }
  h1 {
    color: red;
  }
}
@media screen and (min-width: 1080px) {
  body {
    background-color: blue;
  }
  h1 {
    color: yellow;
  }
}
</style>
