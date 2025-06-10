import ContactUsCard from "./ContactUsCard.vue";

function registerComponents(app) {
    app.component("card-contact-us", ContactUsCard);
}

export default {
    registerComponents
};