<template>
	<v-container fluid>
		Team
	</v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex"
export default {
	computed: {
		...mapGetters(["getLoading", "getEventHub"]),
	},
	methods: {
		...mapActions(["setLoading"]),
		changeState() {
			this.setLoading(!this.getLoading)
		},
	},
	beforeDestroy() {
		this.getEventHub.$off("callAlert")
	},
	mounted() {
		this.getEventHub.$on("callAlert", (loading) => {
			alert(loading)
		})
	},
}
</script>
