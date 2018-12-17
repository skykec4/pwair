<template>
  <section>
    <Top-Bar></Top-Bar>
    <router-view></router-view>
  </section>
</template>

<script>
import TopBar from "../components/MainTopBar.vue";

export default {
  components: {
    TopBar
  },
  computed: {
    // fixed() {
    //   var jbOffset = $(".jbMenu").offset();
    //   $(window).scroll(function() {
    //     if ($(document).scrollTop() > jbOffset.top) {
    //       $(".jbMenu").addClass("jbFixed");
    //     } else {
    //       $(".jbMenu").removeClass("jbFixed");
    //     }
    //   });
    // }
  }
};
</script>

<style>
</style>
