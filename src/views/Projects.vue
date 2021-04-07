<template>
	<v-container fluid style="max-width: 100%">
		<v-card class="elevation-1">
			<v-card-title>Projects</v-card-title>
		</v-card>
		<v-container class="my-5 ">
			<v-layout row class="mb-5 ">
				<v-btn small text class="grey--text" @click="sortBy('title')" color="white" dark>
					<v-icon left small> folder </v-icon>
					<span class="caption text-lowercase">By project name</span>
				</v-btn>

				<v-btn small text class="grey--text" @click="sortBy('person')" color="white" dark>
					<v-icon left small>person</v-icon>
					<span class="caption text-lowercase">By person</span>
				</v-btn>
			</v-layout>

			<v-card flat v-for="project in projects" :key="project.title">
				<v-layout row wrap :class="`pa-3 project ${project.status}`">
					<v-flex xs12 md6>
						<v-card-title class="caption grey--text">Project title</v-card-title>
						<v-card-text>{{ project.title }}</v-card-text>
					</v-flex>
					<v-flex xs6 sm4 md2>
						<v-card-title class="caption grey--text">Person</v-card-title>
						<v-card-text>{{ project.person }}</v-card-text>
					</v-flex>
					<v-flex xs6 sm4 md2>
						<v-card-title class="caption grey--text">Due by</v-card-title>
						<v-card-text>{{ project.due }}}</v-card-text>
					</v-flex>
					<v-flex xs6 sm4 md2>
						<v-container class="right">
							<v-chip small :class="`project ${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
						</v-container>
					</v-flex>
				</v-layout>
				<v-divider></v-divider>
			</v-card>
		</v-container>
	</v-container>
</template>
<script>
export default {
	data: () => ({
		projects: [
			{ title: "Design a new website", person: "The Net Ninja", due: "1st April 2021", status: "ongoing", content: "Lorem ipsum dolor sit." },
			{ title: "Code up the homepage", person: "Chun Li", due: "10th Jan 2020", status: "complete", content: "Lorem ipsum dolor sit." },
			{ title: "Design video thumbnails", person: "Ryu", due: "20th Dec 2019", status: "complete", content: "Lorem ipsum dolor sit." },
			{ title: "Create a community forum", person: "Gouken", due: "20th Oct April 2018", status: "overdue", content: "Lorem ipsum dolor sit." },
		],
	}),
	computed: {
		myProjects() {
			return this.projects.filter((project) => {
				return project.person === "The Net Ninja"
			})
		},
	},
	methods: {
		sortBy(prop) {
			this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1))
		},
	},
}
</script>
<style>
.project.complete {
	border-left: 4px solid #3cd1c2;
}
.project.ongoing {
	border-left: 4px solid orange;
}
.project.overdue {
	border-left: 4px solid tomato;
}
.v-chip.project.complete {
	background: #3cd1c2;
}
.v-chip.project.ongoing {
	background: #ffaa2c;
}
.v-chip.project.overdue {
	background: #f83e70;
}
</style>
