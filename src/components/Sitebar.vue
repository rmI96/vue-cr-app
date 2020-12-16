<template>
	<div>
		<div class="list-group mt-3 mb-3">

			<router-link 
				v-for='link in links'
				:key='link.url'
				class='list-group-item list-group-item-action'
				tag='a' 
				active-class='active' 
				:to='link.url'
				:exact='link.exact'>
			  {{link.title}}
			</router-link>

		</div>
	</div>
</template>

<script>
	export default{
		props: ['value'],
		data: () => ({
			links: [
				{title: 'Счет', url: '/', exact: true},
				{title: 'История', url: '/history'},
				{title: 'Планирование', url: '/plan'},
				{title: 'Новая Запись', url: '/newpost'},
				{title: 'Категории', url: '/categories'}
			]
		})


	}
</script>