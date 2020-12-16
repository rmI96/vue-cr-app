<template>
	<div>
	<footer class="font-small bg-dark text-white-50 pt-4">

	  <div class="container text-center text-md-left">

	    <div class="row">

	      <!-- Grid column -->
	      <div class="col-md-4 mx-auto">

	        <!-- Content -->
	        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
	        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
	          consectetur
	          adipisicing elit.</p>
			<p>{{date | datefilter('datetime')}}</p>
	      </div>
	      <!-- Grid column -->

	      <hr class="clearfix w-100 d-md-none">

	      <!-- Grid column -->
	      <div class="col-md-2 mx-auto">

	        <!-- Links -->
	        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

	        <ul class="list-unstyled">
	          <li>
	            <a  class="text-info" href="#!">Link 1</a>
	          </li>
	          <li>
	            <a  class="text-info" href="#!">Link 2</a>
	          </li>
	          <li>
	            <a  class="text-info" href="#!">Link 3</a>
	          </li>
	          <li>
	            <a  class="text-info" href="#!">Link 4</a>
	          </li>
	        </ul>

	      </div>
	      <!-- Grid column -->

	      <hr class="clearfix w-100 d-md-none">

	      <!-- Grid column -->
	      <div class="col-md-2 mx-auto">

	        <!-- Links -->
	        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

	        <ul class="list-unstyled">
	          <li>
	            <a class="text-info" href="#!">Link 1</a>
	          </li>
	          <li>
	            <a class="text-info" href="#!">Link 2</a>
	          </li>
	          <li>
	            <a class="text-info" href="#!">Link 3</a>
	          </li>
	          <li>
	            <a class="text-info" href="#!">Link 4</a>
	          </li>
	        </ul>

	      </div>
	      <!-- Grid column -->

	      <hr class="clearfix w-100 d-md-none">

	      <!-- Grid column -->
	      <div class="col-md-2 mx-auto">

	        <!-- Links -->
	        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

	        <ul class="list-unstyled">
	          <li>
	            <a  class="text-info" href="#!">Link 1</a>
	          </li>
	          <li>
	            <a  class="text-info" href="#!">Link 2</a>
	          </li>
	          <li>
	            <a  class="text-info" href="#!">Link 3</a>
	          </li>
	          <li>
	            <a  class="text-info" href="#!">Link 4</a>
	          </li>
	        </ul>

	      </div>
	      <!-- Grid column -->

	    </div>

	  </div>

	  <hr>

	  <ul class="list-unstyled list-inline text-center py-2">
	    <li class="list-inline-item mr-4">
	      <h5>Register for free</h5>
	    </li>
	    <li class="list-inline-item">
	      <a href="#!" class="btn btn-secondary">Sign up!</a>
	    </li>
	  </ul>

	  <hr>

	  <div class="footer-copyright text-center py-3">© 2020 Copyright:
	    <a  class="text-info" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
	  </div>

	</footer>
	</div>
</template>

<script>

	export default{

		data: () => ({
			date: new Date(),
			interval: null
		}),
		mounted(){
			this.interval = setInterval(() => {
				this.date = new Date();
			}, 1000)
		},
		beforeDestroy(){
			clearInterval(this.interval);
		}

	}
</script>