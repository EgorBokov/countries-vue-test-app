import { createMemoryHistory, createRouter } from 'vue-router';
import CountriesPage from '@/pages/CountriesPage.vue';
import CountryCardPage from '@/pages/CountryCardPage.vue';

export const routes = [
    { path: '/', component: CountriesPage },
    { path: '/country/:name', component: CountryCardPage },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});