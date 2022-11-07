import request from "./request";

export const login = (date) => {
  return request({
    url: "/login",
    method: "POST",
    date,
  });
};
