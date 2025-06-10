import BottomFooter from "./BottomFooter.vue";
import HkButton from "./HkButton.vue";
import TopNavigation from "./TopNavigation.vue";
import UnderDevelopment from "./UnderDevelopment.vue";

function registerComponents(app) {
    app.component("bottom-footer", BottomFooter);
    app.component("hk-button", HkButton);
    app.component("top-nav", TopNavigation);
    app.component("under-development", UnderDevelopment);
}

export default {
    registerComponents
};