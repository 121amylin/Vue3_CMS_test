import {$http} from './$http';
const getData=$http.get('https://jsonplaceholder.typicode.com/posts')

export {getData}