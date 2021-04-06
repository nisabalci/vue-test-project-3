<template>
	<nav>
		<v-toolbar dense>
			<v-toolbar-title class="text-uppercase grey--text">
				<span class="font-weight-light">Todo</span>
				<span>List</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn>
				<span>Sign Out</span>
				<v-icon right>exit_to_app</v-icon>
			</v-btn>
		</v-toolbar>

		<v-navigation-drawer permanent app v-model="drawer">
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
	</nav>
</template>

<script>
export default {
	data: () => ({
		drawer: false,
		navTitle: "Vuetify App",
		links: [{ icon: "star", text: "Test", route: "/test" }],
	}),
}
</script>
