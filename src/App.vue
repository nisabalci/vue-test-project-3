<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" clipped app>
			<v-list dense nav>
				<v-list-item v-for="link in links" :key="link.text" router :to="link.route">
					<v-list-item-icon>
						<v-icon color="blue-grey darken-2">{{ link.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>{{ link.text }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<!-- <div @click="getEventHub.$emit('callAlert', 'asd')">{{ getLoading }}</div> -->
			<!-- <div @click="changeState()">{{ getLoading }}</div> -->
		</v-navigation-drawer>
		<v-app-bar app clipped-left>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>{{ navTitle }}</v-toolbar-title>
		</v-app-bar>
		<!-- <v-text-field v-model="text" @change="textChanged">{{ getText }}</v-text-field> -->
		<v-main class="mx-4 mb-4">
			<router-view />
		</v-main>
	</v-app>
</template>
<script>
import { mapGetters, mapActions } from "vuex"
import clickMixin from "./mixins/clickMixin"
export default {
	data: () => ({
		data: { text: "text", text1: "text1" },
		drawer: true,
		message: null,
		navTitle: "Vuetify App",
		links: [
			{ icon: "dashboard", text: "Dashboard", route: "/dashboard" },
			{ icon: "folder", text: "Projects", route: "/projects" },
			{ icon: "person", text: "Team", route: "/team" },
		],
	}),
	mixins: [clickMixin],
	computed: {
		...mapGetters(["getLoading", "getEventHub", "getText"]),
	},
	methods: {
		...mapActions(["setLoading", "setText"]),
		changeState() {
			this.setLoading(true)
			this.data = { ...this.data, abc: "asd", xyx: "asd", text: "qwe" }
			this.clicked("asd")
		},
	},
}
</script>
