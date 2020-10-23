import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./Home.vue";
import Punchline from "./Punchline.vue";
import Mixer from "./Mixer.vue";
import "./assets/global.css";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
	{ path: "/", component: Home },
	{ path: "/punchline", component: Punchline },
	{ path: "/mixer", component: Mixer },
];

const router = new VueRouter({
	mode: "history",
	routes,
});

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
