import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';

const routes = [
    {
        path: "/list",
        component: List,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/detail",
        component: Detail,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 