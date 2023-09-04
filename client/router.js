import GlobalApp from "./global-app.js";

const About = { template: `<h1>About</h1>
<h3>Simple To Do List program.` };

const routes = [
    { path: '/', component: GlobalApp },
    { path: '/about', component: About }
];

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the history for simplicity here.
    // history: VueRouter.createWebHashHistory(),
    history: VueRouter.createWebHistory(),
    routes // short for `routes: routes`
});

export default router;