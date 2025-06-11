import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/pages/Home.vue';
import AboutUs from '@/pages/AboutUs.vue';
import OurServices from '@/pages/OurServices.vue';
import ContactUs from '@/pages/ContactUs.vue';

import PageNotFound from '@/pages/PageNotFound.vue';

// import LamanUtama from '@/pages/LamanUtama.vue';


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL
    ),
    routes : [
        {
            path: '/',
            component: Home,
            meta: { title: 'HokKita Solutions'}
        },
        {
            path: '/about-us',
            component: AboutUs,
            meta: { title: 'About Us | HokKita Solutions'}
        },
        {
            path: '/our-services',
            component: OurServices,
            meta: { title: 'Our Services | HokKita Solutions'}
        },
        {
            path: '/contact-us',
            component: ContactUs,
            meta: { title: 'Contact Us | HokKita Solutions'}
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'PageNotFound', 
            component: PageNotFound,
            meta: { title: '404 - Page not found | HokKita Solutions'}
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
});

// Dynamic page title configuration
router.afterEach((to) => {
    document.title = to.meta.title || 'Default Title';
    document.description = to.meta.description || 'Default Description';
});

export default router;