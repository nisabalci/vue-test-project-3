import Vue from "vue"
import VueRouter from "vue-router"
import Dashboard from "../views/Dashboard.vue"
import Projects from "../views/Projects.vue"
import Team from "../views/Team.vue"
import Cards from "../views/Cards.vue"
import Panels from "../views/Panels.vue"

Vue.use(VueRouter)

const routes = [
	{ path: "/dashboard", name: "Dashboard", component: Dashboard },
	{ path: "/projects", name: "Projects", component: Projects },
	{ path: "/team", name: "Team", component: Team },
	{ path: "/cards", name: "Cards", component: Cards },
	{ path: "/panels", name: "Panels", component: Panels },
]

const router = new VueRouter({
	routes,
	mode: "history",
})
export default router
