import { createStore } from "vuex";
import Moduleuser from "./user";
export default createStore({
  state: {
    user: {
      username: "",
      id: "",
      firstname: "",
      lastname: "",
    },
  },
  getters: {
    //无法直接获取，需要一些计算才能获取的内容
    fullname(state) {
      return state.user.firstname + state.user.lastname;
    },
  },
  mutations: {
    updateUser(state, user) {
      state.user.username = user.username;
    },
  },
  actions: {
    //对state的各种操作，但不能直接修改
    updateUser(state, user) {},
  },
  modules: {
    user: Moduleuser,
  },
});
//访问方式：store.state.user.username
