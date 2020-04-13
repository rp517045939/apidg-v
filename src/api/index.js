import request from "@/utils/request";
export default {
//授权登陆
  login(obj = {}) {
    return request.post("/login/", obj).then(res => res.data);
  },
  list(obj = {}) {
    return request.get("/apilist/", obj).then(res => res.data);
  },
}
