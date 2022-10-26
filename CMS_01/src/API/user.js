const axios = require('axios').default;

const userAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });


export {userAPI}