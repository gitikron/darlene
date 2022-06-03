import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/Login.vue";

const routes = [{
        path: "/index",
        name: "home",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;