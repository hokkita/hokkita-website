import TopNavigation from "./TopNavigation.vue";

function registerComponents(app) {
    app.component("top-nav", TopNavigation);
}

export default {
    registerComponents
};