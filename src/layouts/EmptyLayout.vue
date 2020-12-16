<template>
	<div class="layer-ht">
		<router-view />
	</div>
</template>



<!-- scoped -->
<style>
	.layer-ht{
		height: 100vh;
		width: 99999999px;
		background-color: #f4eeff;
		display: table-cell;
		vertical-align: middle;
	}
</style>

<script>
	import messages from '@/utils/messages'

	export default{
		computed: {
			error() {
				return this.$store.getters.error
			}
		},
		watch: {
			error(fbError) {
				console.log(fbError)
				this.$message(messages[fbError.code] || 'Что-то пошло не так', 'error');
			}
		}
		
	}
</script>

















