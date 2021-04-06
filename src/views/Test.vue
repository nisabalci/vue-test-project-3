<template>
	<v-container fluid style="max-width: 100%">
		<v-card>
			<navbar />
		</v-card>
	</v-container>
</template>
<script>
import Navbar from "../components/Navbar.vue"
export default {
	components: { navbar: Navbar },
}
</script>
