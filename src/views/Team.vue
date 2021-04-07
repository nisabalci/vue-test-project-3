<template>
	<v-container fluid> {{ getText }}</v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex"
export default {
	data: () => ({}),
	computed: {
		...mapGetters(["getLoading", "getEventHub", "getText"]),
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
