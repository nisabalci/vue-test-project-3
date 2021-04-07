<template>
	<v-container class="projects">
		<v-card elevation="1">
			<v-card-text subheading grey--text>Panels</v-card-text>
		</v-card>
		<v-container class="my-5">
			<v-expansion-panel>
				<v-expansion-panel-content v-for="project in projects" :key="project.title">
					<div slot="header">{{ project.title }}</div>
					<v-card>
						<v-card-text class="px-4 grey--text">
							<div class="font-weight-bold">due by {{ project.due }}</div>
							<div>{{ project.content }}</div>
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-container>
	</v-container>
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
