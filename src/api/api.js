import axios from 'axios';

// TODO: server 주소로 변경
const baseURL = 'https://google.com';

const instance = axios.create({
  baseURL: baseURL,
});

/** TEST용 **/
export const test = () => {
  return instance.get('/');
};
