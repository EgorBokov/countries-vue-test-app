import { createWebHistory, createRouter } from 'vue-router';
import CountriesPage from '@/pages/CountriesPage.vue';
import CountryCardPage from '@/pages/CountryCardPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

export const routes = [
    { path: '/', component: CountriesPage },
    { path: '/:name', component: CountryCardPage },
    { path: '/:catchAll(.*)', component: NotFoundPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});