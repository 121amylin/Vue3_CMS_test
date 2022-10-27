import axios from 'axios';
// 創建 userAPI axios實例
const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments',
    timeout: 6000,
    headers: {
      'Content-Type':'application/json;charset=UTF-8',  }
  });

// // 添加請求攔截器
request.interceptors.request.use(function (config) {
  // 在發送請求之前做些什麼
  return config;
}, function (error) {
  // 對請求錯誤做些什麼
  return Promise.reject(error);
});

// 添加響應攔截器
request.interceptors.response.use(function (response) {
  // 對響應數據做點什麼
  return response.data;
}, function (error) {
  // 對響應錯誤做點什麼
  return Promise.reject(error);
});

class UserAPI{
    async getData(data){
        let resData=await request(
            // {
            // rul:'https://jsonplaceholder.typicode.com/comments',
            // method:'get',
            // data:data
            // }
        )
        return resData
    }
}

export {UserAPI}