import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AD_INDEX from "./components/admin/index.vue";
import AD_OPD from "./components/admin/opd.vue";
import AD_OPD_Create from "./components/admin/opd_create.vue";
import AD_OPD_Table from "./components/admin/opd_table.vue"
import AD_COUSE from "./components/admin/couse.vue";
import AD_COUSE_TYPE from "./components/admin/couse_type.vue";
import AD_COUSE_TBl from "./components/admin/couse_tbl.vue";
import AD_ACC from "./components/admin/Paysetting.vue";
import AD_SETTING from "./components/admin/setting.vue";
import AD_ADACCOUNT from "./components/admin/admin_account.vue";
import AD_MDACCOUNT from "./components/admin/MD_account.vue";
import AD_SALEACCOUNT from "./components/admin/sales_account.vue";
import AD_ITEM from "./components/admin/item.vue";
import AD_ITEM_UNIT from "./components/admin/item_unit.vue";
import AD_ITEM_LIST from "./components/admin/item_list.vue";
import AD_STOCK from "./components/admin/stock.vue";
import AD_STOCK_TYPE from "./components/admin/couse_type.vue";

createApp(App)
    .use(store)
    .use(router)
    .component('ADINDEX', AD_INDEX)
    .component('ADOPD', AD_OPD)
    .component('ADOPDTABLE', AD_OPD_Table)
    .component('ADOPDCREATE', AD_OPD_Create)
    .component('ADCOUSE', AD_COUSE)
    .component('ADCOUSETYPE', AD_COUSE_TYPE)
    .component('ADCOUSETBL', AD_COUSE_TBl)
    .component('ADACC', AD_ACC)
    .component('ADADACCOUNT', AD_ADACCOUNT)
    .component('ADMDACCOUNT', AD_MDACCOUNT)
    .component('ADSALEACCOUNT', AD_SALEACCOUNT)
    .component('ADSETTING', AD_SETTING)
    .component('ADITEM', AD_ITEM)
    .component('ADITEMUNIT', AD_ITEM_UNIT)
    .component('ADITEMLIST', AD_ITEM_LIST)
    .component('ADSTOCK', AD_STOCK)
    .component('ADSTOCKTYPE', AD_STOCK_TYPE)
    .mount("#app")