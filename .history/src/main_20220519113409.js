import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const dotenv = require('dotenv')

createApp(App).use(store).use(router).use(dotenv).mount("#app");