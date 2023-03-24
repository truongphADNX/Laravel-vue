import "./bootstrap";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router/index.js";
import {
    Table,
    Card,
    Menu,
    List,
    Drawer,
    Button,
    message,
} from "ant-design-vue";
import axios from "axios";
window.axios = axios;
import App from "./App.vue";

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);

import "ant-design-vue/dist/antd.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);
app.use(Button);
app.use(Table);
app.use(Menu);
app.use(Card);
app.use(List);
app.use(Drawer);
app.mount("#app");

app.config.globalProperties.$message = message;
