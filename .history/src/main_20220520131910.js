import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MG_Admintbl from "./components/Manager/adminTable.vue";
import AD_INDEX from "./components/admin/index.vue";
createApp(App)
    .use(store)
    .use(router)
    .component('MGAdmintbl', MG_Admintbl)
    .component('ADINDEX', AD_INDEX)
    .mount("#app")