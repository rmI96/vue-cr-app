<template>
 	<div>

  	<div class="container pb-5">
  		<div class="row align-items-center">
  			<div class="col-12">
  				
  			</div>
  		</div>
	    
	    <div class="row justify-content-center">
	    	<div class="col-lg-5">
	    		<div class="shadow-sm p-4 bg-white">
	    			<h1 class="font-weight-light h2 text-center mb-4">Login</h1>
	    			<form @submit.prevent="submitHandler">
						  <div class="form-group">
						    <input 
						    	v-model.trim="email" 
						    	:class="{'is-invalid': ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}" 
						    	type="email" 
						    	class="form-control" 
						    	placeholder="Email address">
						    	<div class="invalid-feedback" >More example invalid feedback text</div>
						  </div>
						  <div class="form-group mb-4">
						    <input 
						    	v-model.trim="password" 
						    	:class="{'is-invalid': ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}" 
						    	type="password" 
						    	class="form-control"
						    	placeholder="Password">
						    	<div class="invalid-feedback" >length 6 min </div>
						  </div>
						  <button type="submit" class="btn btn-block btn-dark">Click on me</button>
						</form>
						<div class="text-center mt-3"><p> <router-link to="/registration" tag="a" class="text-decoration-none text-secondary">Register now</router-link></p></div>
	    		</div>
	    	</div>
	    </div>
    </div>

	</div>

</template>

<script>
	import {email, required, minLength} from 'vuelidate/lib/validators'
	import messages from '@/utils/messages'

	export default{
		name: 'login',
		data: () => ({
			email: '',
			password: ''
		}),
		validations: {
			email: {email, required},
			password: {required, minLength: minLength(6)}
		},
		mounted() {

			if(messages[this.$route.query.message]){
				this.$message(messages[this.$route.query.message], 'message');
			}
			
			
		},
		methods: {
			async submitHandler(){
				console.log(this.$v)
				if (this.$v.$invalid){
					this.$v.$touch()
					return
				}
				const formData = {
					email: this.email,
					password: this.password
				}
				
				try{
					await this.$store.dispatch('login', formData)
					// console.log(formData);
					this.$router.push('/');
				} catch (e){
					console.log('error')
				}
				
			}
		}
	}
</script>