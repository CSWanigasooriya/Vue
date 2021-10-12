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
        path: '/register',
        component: () =>
            import('../views/SQLRegister.vue'),
    },
    {
        // path: "*",
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () =>
            import('../views/Error.vue'),
    },
    {
        path: '/admin',
        component: () =>
            import('../views/Admin.vue'),
        meta: {
            authRequired: true,
        },
    },
    {
        path: '/user',
        component: () =>
            import('../views/User.vue'),
        children: [
            {
                path: '',
                component: () =>
                    import('../views/Home.vue'),
            },
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
            },
            {
                path: 'attendence',
                component: () =>
                    import('../views/Attendance.vue'),
            },
            {
                path: 'message',
                component: () =>
                    import('../views/Message.vue'),
            },
            {
                path: 'profile',
                component: () =>
                    import('../views/Profile.vue'),
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