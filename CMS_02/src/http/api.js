import {$http} from './$http';
const getData=$http.get('https://jsonplaceholder.typicode.com/posts')
const login=(data)=>{
  return $http.get('https://jsonplaceholder.typicode.com/posts',data)
}

export {getData,login}