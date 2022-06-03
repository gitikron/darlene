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
import AD_COUSE_TYPE from "./components/admin/couse_type.vue";
import AD_COUSE_TBl from "./components/admin/couse_tbl.vue";
import AD_STOCK from "./components/admin/stock.vue";
import AD_ACC from "./components/admin/accounting.vue";
import AD_ACC_TYPE from "./components/admin/accounting_pay_type.vue";

createApp(App)
    .use(store)
    .use(router)
    .component('MGAdmintbl', MG_Admintbl)
    .component('ADINDEX', AD_INDEX)
    .component('ADOPD', AD_OPD)
    .component('ADOPDTABLE', AD_OPD_Table)
    .component('ADOPDCREATE', AD_OPD_Create)
    .component('ADCOUSE', AD_COUSE)
    .component('ADCOUSETYPE', AD_COUSE_TYPE)
    .component('ADCOUSETBL', AD_COUSE_TBl)
    .component('ADSTOCK', AD_STOCK)
    .component('ADACC', AD_ACC)
    .component('ADACCTYPE', AD_ACC_TYPE)
    .mount("#app")