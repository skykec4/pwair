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
    this.$store.dispatch("GET_WEATHER_LIST");
  }
};
</script>

<style>
</style>
