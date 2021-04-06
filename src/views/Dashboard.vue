<template>
	<v-container fluid style="max-width: 100%">
		<v-card>
			<toolbar />
		</v-card>
	</v-container>
</template>
<script>
import Toolbar from "@/components/Toolbar"
export default {
	components: {
		toolbar: Toolbar,
	},
}
</script>
