<template>
	<v-container fluid> {{ message }}</v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex"
export default {
	data: () => ({
		message: null,
	}),
	computed: {
		...mapGetters(["getLoading", "getEventHub", "getText"]),
	},
	methods: {
		...mapActions(["setLoading", "setText"]),
		changeState() {
			this.setLoading(!this.getLoading)
		},
		textChanged() {
			this.setText(!this.getText)
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
