import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MG_Admintbl from "./components/Manager/adminTable.vue";
import MG_Nav from "./components/Manager/navBar.vue";
createApp(App)
    .use(store)
    .use(router)
    .component('MGAdmintbl', MG_Admintbl)
    .component('MGNav', MG_Nav)
    .mount("#app")