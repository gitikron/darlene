import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/login.vue";

const routes = [{
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;