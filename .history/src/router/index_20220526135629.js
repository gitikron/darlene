import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/Login.vue";

import Admin from "../views/Admin.vue";
import Doctor from "../views/Doctor.vue";
import Sale from "../views/Sale.vue";
import User from "../views/User.vue";
var request = require('request')

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
        path: "/admin",
        name: "Admin",
        component: Admin,
    },
    {
        path: "/doctor",
        name: "Doctor",
        component: Doctor,
    },
    {
        path: "/sale",
        name: "Sale",
        component: Sale,
    },
    {
        path: "/user",
        name: "User",
        component: User,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;