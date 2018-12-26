import axios from "axios";

const key = {
  serviceKey:
    "66tRqA5RO8ZA1vBsaBFxzBhDP9mUCNF7M2WrgtSUgC2T%2BzniQYqcQ1gxRGy9ltMozYaU3f1hMfyxhWahpD5WNg%3D%3D"
};

const confing = {
  urlPrefix_News: "https://api.hnpwa.com/v0/",
  urlPrefix_weather:
    "http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/"
};

const getNewsList = () => {
  return axios.get(`${confing.urlPrefix_News}news/1.json`);
};

const getWeatherList = () => {
  let URI = confing.urlPrefix_weather + "ForecastSpaceData";
  URI = URI + "?ServiceKey=" + key.serviceKey;
  URI = URI + "&base_date=" + "20181219";
  URI = URI + "&base_time=" + "0500";
  URI = URI + "&nx=" + "60"; //오전동 기준
  URI = URI + "&ny=" + "122"; //오전동 기준
  URI = URI + "&numOfRows=" + "10";
  URI = URI + "&pageNo=" + "1";
  URI = URI + "&_type=" + "json";

  //URI =    "http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData?ServiceKey=66tRqA5RO8ZA1vBsaBFxzBhDP9mUCNF7M2WrgtSUgC2T%2BzniQYqcQ1gxRGy9ltMozYaU3f1hMfyxhWahpD5WNg%3D%3D&base_date=20181219&base_time=0500&nx=60&ny=122&numOfRows=10&pageNo=1&_type=json";

  //axios.get(url, { crossdomain: true });
  return axios.get(URI, {
    mode: "no-cors",
    crossdomain: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    withCredentials: true,
    credentials: "same-origin"
  });
};

export { getNewsList, getWeatherList };
