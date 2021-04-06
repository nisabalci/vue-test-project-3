<template>
	<v-app>
		<v-navigation-drawer permanent v-model="drawer" app>
			<v-list-item class="blue" dark>
				<v-list-item-content>
					<v-list-item-title class="headline">
						{{ navTitle }}
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-divider></v-divider>
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
		</v-navigation-drawer>
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>
<script>
export default {
	data: () => ({
		drawer: true,
		navTitle: "Vuetify App",
		links: [
			{ icon: "dashboard", text: "Dashboard", route: "/dashboard" },
			{ icon: "folder", text: "Projects", route: "/projects" },
			{ icon: "person", text: "Team", route: "/team" },
		],
	}),
}
</script>
