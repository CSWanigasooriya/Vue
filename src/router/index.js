import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
    {
        path: '/',
        name: 'SignInRoute',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/SignIn.vue'),
    },
    {
        path: '/user',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/User.vue'),
        children: [
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'home',
                component: () =>
                    import(/* webpackChunkName: "about" */ '../views/Home.vue'),
            },
            {
                // UserPosts will be rendered inside User's <router-view>
                // when /user/:id/posts is matched
                path: 'about',
                component: () =>
                    import(/* webpackChunkName: "about" */ '../views/About.vue'),
            }
        ],
        meta: {
            authRequired: true,
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

router.beforeEach((to, from, next) => {
    const auth = getAuth();
    if (to.matched.some(record => record.meta.authRequired)) {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
                next();
            } else {
                // User is signed out
                // ...
                alert('You must be logged in to see this page');
                next({
                    path: '/',
                });
            }
        });
    } else {
        next();
    }
});

export default router