import axios from './http.js';

const api = {
  addWorkNews(entity) {
    return axios.httpPost(`workNew`, entity);
  },
  getWorkNews() {
    return axios.httpGet(`workNews`);
  }
}
export default api;