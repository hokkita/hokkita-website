import CloseRounded from "./CloseRounded.vue";
import MenuRounded from "./MenuRounded.vue";

function registerComponents(app) {
    app.component("icon-close-rounded", CloseRounded);
    app.component("icon-menu-rounded", MenuRounded);
}

export default {
    registerComponents
};