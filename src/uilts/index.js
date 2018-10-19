import Axios from 'axios'
import store from "../store";
import router from "../router";

const instance = Axios.create({
  baseURL: 'http://211.67.177.56:8080/hhdj',
  timeout: 15000
})
instance.defaults.headers.common['Token'] = store.state.token;
// 添加请求拦截器
instance.interceptors.request.use(config => {
// 在发送请求之前做些什么
//判断是否存在token，如果存在将每个页面header都添加token
  if(store.state.token){
    config.headers.common['Token']=store.state.token
  }

  return config;
}, error => {
// 对请求错误做些什么
  return Promise.reject(error);
});

// http response 拦截器
instance.interceptors.response.use(
  response => {

    return response;
  },
  error => {

    if (error.response) {
      switch (error.response.status) {
        case 401:
          this.$store.commit('del_token');
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error.response.data)
  });

const xhr = {
  get(url, data, config){
    return new Promise((resolve,reject) => {
      instance.get(url, {params: data}, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  fetch(url, data, config, methods){
    return new Promise((resolve,reject) => {
      instance[methods](url,  data, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url, data, config){
    return this.fetch(url, data, config, 'post')
  }
}
export default xhr
