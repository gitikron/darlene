import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/Login.vue";
import Manager from "../views/Manager.vue";

import Admin from "../views/Admin.vue";
import Doctor from "../views/Doctor.vue";
import Sale from "../views/Sale.vue";
import User from "../views/User.vue";
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