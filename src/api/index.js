import axios from 'axios';

const confing = {
  urlPrefix: 'https://api.hnpwa.com/v0/'
}

function getNewsList() {
  return axios.get(`${confing.urlPrefix}news/1.json`)
}

export {
  getNewsList
}
