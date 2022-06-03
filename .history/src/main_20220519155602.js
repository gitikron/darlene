import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Admintbl from "./components/Manager/adminTable.vue";
createApp(App).use(store).use(router).mount("#app");
createApp(App).components('Admintbl', Admintbl)