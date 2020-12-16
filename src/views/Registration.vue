<template>
  <div>
	  	<div class="container pb-5">
	  		<div class="row align-items-center">
	  			<div class="col-12">
	  				
	  			</div>
	  		</div>
		   
		    <div class="row justify-content-center">
		    	<div class="col-lg-6">
		    		<div class="shadow-sm p-4 bg-white">
		    			 <h1 class="font-weight-light h2 text-center mb-4">Registration</h1>
		    			<form @submit.prevent="submitHandler">

		    				<div class="form-group">
							    <input
							    	v-model.trim="name"
							    	:class="{'is-invalid': $v.name.$dirty && !$v.name.required}"
							    	type="text" 
							    	class="form-control" 
							    	placeholder="Name">
							    	<div class="invalid-feedback" >More example invalid feedback text</div>
							  </div>

							  <div class="form-group">
							    <input 
										v-model.trim="phone"
							    	:class="{'is-invalid': $v.phone.$dirty && !$v.phone.required}"
							    	type="tel" 
							    	class="form-control" 
							    	placeholder="Phone">
							    	<div class="invalid-feedback" >More example invalid feedback text</div>
							  </div>

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

							  <div class="custom-control custom-checkbox mb-4">
								  <input 
								  	v-model="checkbox" 
								  	:class="{'is-invalid': !checkbox}"
								  	type="checkbox" 
								  	class="custom-control-input" 
								  	id="customCheck1">
								  <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
								</div>
							  <button type="submit" class="btn btn-block btn-dark">Click on me</button>
							</form>
							<div class="text-center mt-3 text-secondary"><p>Already registered? 
								<router-link tag="a" to="/login" class="text-decoration-none "> Exit</router-link>
							</p></div>
		    		</div>
		    	</div>
		    </div>
	    </div>
  </div>
</template>

<script>
	import {email, required, minLength} from 'vuelidate/lib/validators'

	export default{
		name: 'Registration',	
		data: () => ({
			name: '',
			phone: '',
			email: '',
			password: '',
			checkbox: false
		}),
		validations: {
			name: {required},
			phone: {required},
			email: {email, required},
			password: {required, minLength: minLength(6)},
			checkbox: {checked: n => n}
		},
		methods: {
			async submitHandler(){
				console.log(this.$v)
				if (this.$v.$invalid){
					this.$v.$touch()
					return
				}
				const formData = {
					name: this.name,
					phone: this.phone,
					email: this.email,
					password: this.password
				}

				try{
					await this.$store.dispatch('register', formData)
					// console.log(formData);
					this.$router.push('/');
				} catch (e) {
					console.log('error')

				}

				
			}
		}
	}

</script>
