import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/Login.vue";
import Manager from "../views/manager.vue";

const routes = [{
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage,
    },
    {
        path: "/manager",
        name: "manager",
        component: Manager,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;