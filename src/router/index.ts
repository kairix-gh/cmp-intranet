import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: "/news/:page?",
        name: "News",
        component: () => import("@/views/News.vue")
    },
    {
        path: "/resources/:category",
        name: "Resources",
        component: () => import("@/views/Resources.vue"),
    },
    {
        path: "/hotel/:id",
        name: "Hotel",
        component: () => import("@/views/Hotel.vue"),
    },
    {
        path: "/article/:id",
        name: "Article",
        component: () => import("@/views/Article.vue")
    },
]

// Only include workbench if we're in development
if (process.env.NODE_ENV === "development") {
    routes.push({
        path: "/workbench",
        name: "Workbench",
        component: () => import("@/views/Workbench.vue")
    })
}

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to) {
        // Not ideal, but will work in this case
        if (to.name == "Article" || to.name == "Hotel") {
            return { top: 0 }
        }
    }
})

export default router
