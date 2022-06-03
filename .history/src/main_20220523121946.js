import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MG_Admintbl from "./components/Manager/adminTable.vue";
import AD_INDEX from "./components/admin/index.vue";
import AD_OPD from "./components/admin/opd.vue";
import AD_OPD_Create from "./components/admin/opd_create.vue";
import AD_OPD_Table from "./components/admin/opd_table.vue"
import AD_COUSE from "./components/admin/couse.vue";
import AD_STOCK from "./components/admin/stock.vue";
import dotenv from 'dotenv'

dotenv.config()

createApp(App)
    .use(store)
    .use(router)
    .component('MGAdmintbl', MG_Admintbl)
    .component('ADINDEX', AD_INDEX)
    .component('ADOPD', AD_OPD)
    .component('ADOPDTABLE', AD_OPD_Table)
    .component('ADOPDCREATE', AD_OPD_Create)
    .component('ADCOUSE', AD_COUSE)
    .component('ADSTOCK', AD_STOCK)
    .mount("#app")