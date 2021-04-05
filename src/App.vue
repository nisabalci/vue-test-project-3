<template>
	<v-app>
		<v-navigation-drawer permanent v-model="drawer" app>
			<v-list-item class="blue" dark>
				<v-list-item-content>
					<v-list-item-title class="headline">
						Vuetify App
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-divider></v-divider>
			<v-list dense nav>
				<v-list-item to="/test">
					<v-list-item-icon>
						<v-icon color="blue-grey darken-2">list</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Test</v-list-item-title>
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
	}),
}
</script>
