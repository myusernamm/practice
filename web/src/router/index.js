import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView";
import UserProfile from "../views/UserProfile";
import NotFoundView from "../views/NotFoundView";
import RegisterView from "../views/RegisterView";
import HomwView from "../views/HomeView";
import UserList from "../views/UserList";
const routes = [
  {
    path: "/login/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/userprofile/:userid/ ", //按照userid来前往网站
    name: "userprofile",
    component: UserProfile,
  },
  {
    path: "/notfound/",
    name: "notfound",
    component: NotFoundView,
  },
  {
    path: "/register/",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/",
    name: "home",
    component: HomwView,
  },
  {
    path: "/userlist/",
    name: "userlist",
    component: UserList,
  },
  {
    path: "/404/",
    name: "404",
    component: NotFoundView,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
