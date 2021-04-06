import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"
import Vuetify from "vuetify/lib"
import router from "./router"
import vuetify from "@/plugins/vuetify"
import "material-design-icons-iconfont/dist/material-design-icons.css"
import store from "./store"

Vue.use(VueRouter)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount("#app")
