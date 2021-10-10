import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
    {
        path: '/',
        name: 'SignInRoute',
        component: () =>
            import('../views/SignIn.vue'),
    },
    {
        path: '/user',
        component: () =>
            import('../views/User.vue'),
        children: [
            {
                path: 'home',
                component: () =>
                    import('../views/Home.vue'),
            },
            {
                path: 'course',
                component: () =>
                    import('../views/Course.vue'),
            },
            {
                path: 'grade',
                component: () =>
                    import('../views/Grade.vue'),
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


//Authentication Guards
//Fix me [Remove Alert Boxes]
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