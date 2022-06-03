import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Admintbl from "./components/Manager/adminTable.vue";
createApp(App)
    .use(store)
    .use(router)
    .component('Admintbl', Admintbl)
    .mount("#app")