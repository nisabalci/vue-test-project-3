<template>
	<v-container fluid style="max-width: 100%">
		<v-card>
			<toolbar />
		</v-card>
		<v-container class="my-5">
			<v-layout row wrap>
				<!-- <v-flex xs12 md6>
					<v-btn block class="grey" @click="changeState()">{{ getLoading }}</v-btn>
				</v-flex> -->
			</v-layout>
		</v-container>
		<v-container>
			<v-row>
				<v-col cols="12" sm="6">
					<v-text-field v-model="message" label="Message" @change="textChanged"></v-text-field>
				</v-col>
			</v-row>
		</v-container>
	</v-container>
</template>
<script>
import Toolbar from "@/components/Toolbar"
import { mapActions, mapGetters } from "vuex"
export default {
	data: () => ({}),

	components: {
		toolbar: Toolbar,
	},
	computed: {
		...mapGetters(["getLoading", "getEventHub"]),
	},
	methods: {
		...mapActions(["setLoading", "setText"]),
		changeState() {
			this.setLoading(!this.getLoading)
		},
		textChanged() {
			this.setText(this.message)
		},
	},
}
</script>
