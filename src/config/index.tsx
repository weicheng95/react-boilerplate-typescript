const isProduction = false;
const isDevelopment = !isProduction;

const CONFIG = {
  isProduction,
  isDevelopment,
  baseURL: '/',
  title: 'APP',
  http: {
    baseURL: 'http://localhost:3000/api',
  },
};

export default CONFIG;
