<template>
	<div>

		<nav class="navbar navbar-dark bg-dark">
			<a class="navbar-brand" href="#">
			App cd
			</a>
			
			<div>
				<div class="btn-group">
					<button type="button" class="btn btn-secondary">{{name}}</button>
					<button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
					  <span class="sr-only">{{name}}</span>
					</button>
					<div class="dropdown-menu dropdown-menu-lg-right" aria-labelledby="dropdownMenuReference">
					  <router-link tag='a' class="dropdown-item" active-class='active' to="/profile" exact>
						  Profile
						</router-link>
					  <a class="dropdown-item" href="#">Another action</a>
					  <a class="dropdown-item" href="#">Something else here</a>
					  <div class="dropdown-divider"></div>
					  <a @click.prevent="logout" class="dropdown-item" href="#">Logout</a>
					</div>
				</div>
				<button @click.prevent="$emit('ClickOnMenu')" class="navbar-toggler ml-3">
	     		<span class="navbar-toggler-icon"></span>
	    	</button>
    	</div>

		</nav> 
	</div>
</template>


<script>
	export default{

		methods: {
			async logout(){
				await this.$store.dispatch('logout')
				this.$router.push('/login?message=logout')
			}
		},
		computed: {
			name(){
				return this.$store.getters.info.name
			}

		}

	}
</script>