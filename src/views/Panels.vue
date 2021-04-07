<template>
	<v-expansion-panels>
		<v-expansion-panel v-for="project in projects" :key="project.title">
			<v-expansion-panel-header>
				{{ project.title }}
			</v-expansion-panel-header>
			<v-expansion-panel-content class="font-weight-bold grey--text"> due by {{ project.due }} </v-expansion-panel-content>
			<v-expansion-panel-content class="grey--text">
				{{ project.content }}
			</v-expansion-panel-content>
		</v-expansion-panel>
	</v-expansion-panels>
</template>
<script>
export default {
	data: () => ({
		projects: [
			{ title: "Design a new website", due: "1st April 2021", content: "Lorem ipsum dolor sit." },
			{ title: "Code up the homepage", due: "10th Jan 2020", content: "Lorem ipsum dolor sit." },
			{ title: "Design video thumbnails", due: "20th Dec 2019", content: "Lorem ipsum dolor sit." },
			{ title: "Create a community forum", due: "20th Oct April 2018", content: "Lorem ipsum dolor sit." },
		],
	}),
}
</script>
