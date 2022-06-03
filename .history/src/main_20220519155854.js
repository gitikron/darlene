import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MG_Admintbl from "./components/Manager/adminTable.vue";
createApp(App)
    .use(store)
    .use(router)
    .component('MG_Admintbl', MG_Admintbl)
    .mount("#app")