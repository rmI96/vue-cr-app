<template>
  <div>
	
	<h1 class="h3 font-weight-light">Счет</h1>
	<div class="font-italic">
		<p><small>This line of text is meant to be treated as fine print.</small></p>
	</div>
	<hr>
	<div class="row">
		<div class="col-lg-4">
			<div class="p-3 bg-warning">
				<div class="font-weight-bolder">Счет в валюте</div>
				<hr>
				<div><span>12.0 </span>Р</div>
			</div>
		</div>
		<div class="col-lg-8">
			<div class="p-3 bg-warning">
				<div class="font-weight-bolder">Курс валют</div>
				<hr>
				<div class="shadow-sm">
					
				
				<table class="table table-borderless">
				  <thead>
				    <tr class="table-light">
				      <th>Валюта</th>
				      <th>Курс</th>
				      <th>Дата</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr class="table-light">
				      <th>грн</th>
				      <td>12</td>
				      <td>00.00.00</td>
				    </tr>
				  </tbody>
				</table>
				</div>
			</div>
			
			
		</div>
		
	</div>

  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
