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
				<v-flex xs12 md6>
					<v-btn block class="grey">2</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
	</v-container>
</template>
<script>
import Toolbar from "@/components/Toolbar"
import { mapActions, mapGetters } from "vuex"
export default {
	components: {
		toolbar: Toolbar,
	},
	computed: {
		...mapGetters(["getLoading", "getEventHub"]),
	},
	methods: {
		...mapActions(["setLoading"]),
		changeState() {
			this.setLoading(!this.getLoading)
		},
	},
}
</script>
