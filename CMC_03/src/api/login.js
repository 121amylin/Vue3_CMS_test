import request from "./request";

export const login = (date) => {
  return request({
    // url: "https://jsonplaceholder.typicode.com/posts/1",
    // method: "GET",
    // date,
    // url: "https://jsonplaceholder.typicode.com/posts/1",
    // method: "GET",
    // date,
    url: "api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4",
    method: "GET",
    date,
  });
};
