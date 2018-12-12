import Vue from "vue";
import Router from "vue-router";
import Navbar from "./components/Navbar.vue";
import login from "./views/login.vue";
import signup from "./views/signup.vue";
import landing from "./components/Landing";
import Home from "./components/Home.vue";
Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/nav",
      name: "nav",
      component: Navbar
    },
    {
      path: "/",
      name: "landing",
      component: landing
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/signup",
      name: "signup",
      component: signup
    }
  ]
});
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   const isAuthenticated = firebase.auth().currentUser;
//   if (requiresAuth && !isAuthenticated) {
//     //console.log("not authenticated");
//     next("/login");
//   } else {
//     next();
//   }
// });
export default router;
