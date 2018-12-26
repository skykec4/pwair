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
  },
  SESSION_CHECK(context) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        context.commit("SET_SESSION", email);
        console.log("Login page - user : ", email);
        // ...
      } else {
        alert("세션정보가 없습니다. 로그인해 주세요.");
        this.$router.push("/");
        console.log("Login page : logout");
        // User is signed out.
        // ...
      }
    });
  }
};
