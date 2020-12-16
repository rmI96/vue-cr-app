<template>
  <div>
	
	<h1 class="h4 font-weight-light">New Post</h1>
	
	<div class="font-italic">
		<p><small>This line of text is meant to be treated as fine print.</small></p>
	</div>

	<div class="row">
		<div class="col-lg-7">
			<div class="form-group">
		    <label for="exampleInputEmail1">Title</label>
		    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
		  </div>

			<div class="form-group">
		    <label for="exampleFormControlTextarea1">Description</label>
		    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
		  </div>

		  <button type="button" class="btn btn-secondary">Save</button>
		</div>
		<div class="col-lg-5">
			<div class="mb-2">Tag</div>
			<div class="custom-control custom-checkbox mb-1">
			  <input type="checkbox" class="custom-control-input" id="customCheck1">
			  <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
			</div>
			<div class="custom-control custom-checkbox mb-1">
			  <input type="checkbox" class="custom-control-input" id="customCheck2">
			  <label class="custom-control-label" for="customCheck2">Check this custom checkbox</label>
			</div>
			<div class="custom-control custom-checkbox mb-1">
			  <input type="checkbox" class="custom-control-input" id="customCheck3">
			  <label class="custom-control-label" for="customCheck3">Check this custom checkbox</label>
			</div>
			<div class="custom-control custom-checkbox mb-1">
			  <input type="checkbox" class="custom-control-input" id="customCheck4">
			  <label class="custom-control-label" for="customCheck4">Check this custom checkbox</label>
			</div>
			<div class="custom-control custom-checkbox mb-1">
			  <input type="checkbox" class="custom-control-input" id="customCheck5">
			  <label class="custom-control-label" for="customCheck5">Check this custom checkbox</label>
			</div>
			<div class="mb-2 mt-2">Other settings</div>
			<div class="custom-control custom-switch mb-1">
			  <input type="checkbox" class="custom-control-input" id="customSwitch1">
			  <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
			</div>
			<div class="custom-control custom-switch mb-1">
			  <input type="checkbox" class="custom-control-input" id="customSwitch2">
			  <label class="custom-control-label" for="customSwitch2">Toggle this switch element</label>
			</div>
			<div class="custom-control custom-switch mb-1">
			  <input type="checkbox" class="custom-control-input" id="customSwitch3">
			  <label class="custom-control-label" for="customSwitch3">Toggle this switch element</label>
			</div>

		</div>
	</div>


  </div>
</template>

<script>

export default {
  name: 'Newpost'
}
</script>