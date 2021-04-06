<template>
	<v-container fluid style="max-width: 100%">
		<v-card>
			<toolbar />
		</v-card>
		<v-container class="my-5">
			<v-layout row wrap>
				<v-flex xs12 md6>
					<v-btn block class="grey" @click="changeState()">{{ getLoading }}</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
		<v-text-field v-model="message" @change="textChanged">{{ getText }}</v-text-field>
	</v-container>
</template>
<script>
import Toolbar from "@/components/Toolbar"
import { mapActions, mapGetters } from "vuex"
export default {
	data: () => ({
		message: "",
	}),

	components: {
		toolbar: Toolbar,
	},
	computed: {
		...mapGetters(["getLoading", "getEventHub", "getText"]),
	},
	methods: {
		...mapActions(["setLoading", "setText"]),
		changeState() {
			this.setLoading(!this.getLoading)
		},
		textChanged() {
			this.setText(!this.message)
		},
	},
}
</script>
