import { getNewsList, getWeatherList } from "../api/index.js";

//this.$store.dispatch("GET_NEW_LIST");
//this.$store.dispatch('fetchMessage');
export default {
  GET_NEW_LIST(context) {
    getNewsList()
      .then(data => {
        context.commit("SET_NEW", data);
      })
      .catch(err => {
        console.log("err");
      });
  },
  GET_WEATHER_LIST(context) {
    getWeatherList()
      .then(data => {
        context.commit("SET_WEATHER", data);
      })
      .catch(err => {
        console.log("err");
      });
  }
};
