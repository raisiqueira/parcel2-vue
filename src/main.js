import { configureCompat, createApp } from "vue"
import ElementUI from "element-ui";
import ElementPlus from "element-plus";

configureCompat({ MODE: 2 })

import App from "./App.vue"

const app = createApp(App);
app.use(ElementUI);
// app.use(ElementPlus);
app.mount("#app");