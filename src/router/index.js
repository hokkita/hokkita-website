import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/pages/Home.vue';

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
            path: '/:pathMatch(.*)*', 
            name: 'PageNotFound', 
            component: PageNotFound,
            meta: { title: '404 - Page not found | HokKita Solutions'}
        },
    ],
    scrollBehaviour(to, from, savedPosition) {
        return { top: 0 } //always scroll to top
    },
});

// Dynamic page title configuration
router.afterEach((to) => {
    document.title = to.meta.title || 'Default Title';
    document.description = to.meta.description || 'Default Description';
});

export default router;