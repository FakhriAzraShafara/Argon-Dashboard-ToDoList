const auth = {
    path: '/',
    name: 'Auth',
    redirect: { name: 'Signin' },
    children: [
        {
            path: "/auth/signin",
            name: "Signin",
            component: () => {
                if (auth === true) {
                    return import('@/views/Dashboard/Default.vue');
                } else {
                    return import('@/views/Auth/Signin.vue');
                }
            },
        },
        {
            path: "/auth/signup",
            name: "Signup",
            component: () => {
                if (auth === true) {
                    return import('@/views/Dashboard/Default.vue');
                } else {
                    return import('@/views/Auth/Signup.vue');
                }
            },
        },
    ],
};

export default auth;
