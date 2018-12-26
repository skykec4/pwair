import { getNewsList, getWeatherList } from "../api/index.js";

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
      .then(data => context.commit("SET_WEATHER", data))
      .catch(err => console.log("err", err));
  }
};
