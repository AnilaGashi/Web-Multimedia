import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import BaseButton from "./components/ui/BaseButton.vue";

const app = createApp(App);
app.use(router);
app.use(store);
app.component("base-button", BaseButton);
app.mount("#app");
