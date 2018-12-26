export default {
  SET_NEW(state, data) {
    state.newsList = data.data;
  },
  SET_WEATHER(state, data) {
    state.weatherList = data;
  },
  SET_SESSION(state, data) {
    console.log("mutations : ", data);
    state.userSession = data;
  }
};
