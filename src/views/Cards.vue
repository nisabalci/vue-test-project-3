<template>
	<v-container class="my-5">
		<v-layout row wrap>
			<v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
				<v-card flat class="text-xs-center ma-3" color="light-blue lighten-5" elevation="4">
					<v-card-text>
						<v-card-text class="subheading">{{ person.name }}</v-card-text>
						<v-card-text>{{ person.role }}</v-card-text>
					</v-card-text>
					<v-card-actions>
						<v-btn flat color="blue-grey lighten-4" elevation="0">
							<v-icon small left>message</v-icon>
							<v-card-text>Message</v-card-text>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
export default {
	data: () => ({
		team: [
			{ name: "The Net Ninja", role: "Web Developer" },
			{ name: "Chun Li", role: "Mobile Developer" },
			{ name: "Ryu", role: "Graphic Designer" },
			{ name: "Gouken", role: "Social Media maverick" },
			{ name: "Yoshi", role: "Sales guru" },
		],
	}),
}
</script>
