import axios from 'axios';

const baseURL = 'http://13.209.248.222:8090';

const instance = axios.create({
  baseURL: baseURL,
});

/** TEST용 **/
export const test = () => {
  return instance.get('/demo/test/healthcheck');
};

/** 마이페이지용 **/
export const mySubscription = (userId) => {
  return instance.get('/users/{userId}');
};