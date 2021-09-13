import { createRouter, createWebHistory } from "vue-router";

import About from "../views/About"
import Home from "../views/Home"
import SignIn from "../views/SignIn"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})


export default router