<template>
  <div>

  	<h1 class="h3 font-weight-light">Profile</h1>
	
	<div class="font-italic">
		<p><small>This line of text is meant to be treated as fine print.</small></p>
	</div>
	
	<div class="row">
		<div class="col-lg-5">

			<div class="input-group mb-3">
			  <div class="input-group-prepend">
			    <span class="input-group-text">
			    	<user-icon size="1.2x" class="custom-class"></user-icon>
			    </span>
			  </div>
			  <input type="text" class="form-control" placeholder="Name" aria-label="Username" :value="name">
			</div>

			<div class="input-group mb-3">
			  <div class="input-group-prepend">
			    <span class="input-group-text">
					<phone-icon size="1.2x" class="custom-class"></phone-icon>
			    </span>
			  </div>
			  <input type="text" class="form-control" placeholder="Phone" aria-label="Username" :value="phone">
			</div>

			<div class="input-group mb-3">
			  <div class="input-group-prepend">
			    <span class="input-group-text">
					<send-icon size="1.2x" class="custom-class"></send-icon>
			    </span>
			  </div>
			  <input type="text" class="form-control" placeholder="Email" aria-label="Username" :value="email">
			</div>

			<button type="button" class="btn btn-block btn-secondary">Save</button>

		</div>

		<div class="col-lg-7">

			<div class="input-group mb-3">
			  <div class="input-group-prepend">
			    <span class="input-group-text">
			    	<user-icon size="1.2x" class="custom-class"></user-icon>
			    </span>
			  </div>
			  <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1">
			</div>
			
			<div class="input-group mb-3">
			  <div class="input-group-prepend">
			    <span class="input-group-text">
			    	<user-icon size="1.2x" class="custom-class"></user-icon>
			    </span>
			  </div>
			  <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1">
			</div>

			<div class="input-group mb-3">
			  <div class="input-group-prepend">
			    <span class="input-group-text">
			    	<user-icon size="1.2x" class="custom-class"></user-icon>
			    </span>
			  </div>
			  <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1">
			</div>

		</div>
	</div>

  </div>
</template>

<script>

import { UserIcon, PhoneIcon, SendIcon } from 'vue-feather-icons'

export default {

		computed: {
			name() {
				return this.$store.getters.info.name
			},
			phone() {
				return this.$store.getters.info.phone
			},
			email() {
				return this.$store.getters.info.email
			}
		},
    components: {
      UserIcon, PhoneIcon, SendIcon
    }
}
</script>
