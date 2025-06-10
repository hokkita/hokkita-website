import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/css/tailwind.css'
import router from '@/router/index.js';

import Components from "@/components";
import Layouts from "@/layouts";

import Cards from "@/components/cards";
import Icons from "@/components/icons";

const app = createApp(App);

Components.registerComponents(app);
Layouts.registerComponents(app);

Cards.registerComponents(app);
Icons.registerComponents(app);

app.use(router);
app.mount("#app");