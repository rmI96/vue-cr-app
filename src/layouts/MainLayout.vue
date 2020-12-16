<template>

  <div>

  	<navbar @ClickOnMenu="isOpen = !isOpen" />

     <div class="container-fluid">
			
		<div class="content-area" :class='{full: isOpen}'>

			<router-view />

		</div>

		<div class="sitebar-area" :class='{hide: isOpen}'>

			<sitebar v-model="isOpen" />
			
		</div>

	</div>
	
	<footer-cm></footer-cm>

	<button type="button" class="btn btn-info btn-lg fixed-bottom fixed-right ml-3 mb-3">Add</button>

  </div>

</template>

<script>
  import Navbar from '@/components/Navbar'
  import Sitebar from '@/components/Sitebar'
  import FooterCm from '@/components/Footer'
  export default {
  	name: 'main-layout',
  	data: () => ({
  		isOpen: true
  	}),
	  async mounted() {

      if(!Object.keys(this.$store.getters.info).length){
          await this.$store.dispatch('fetchInfo')
      }
	  },
	  components: {
      Navbar, Sitebar, FooterCm
    }
  }
</script>

<style lang="scss">
	.content-area{
		width: 100%;
		min-height: 350px;
		padding: 50px 25% 50px 0;
		transition: 0.32s;
		&.full{
			padding-right: 0;
		}
	}
	.sitebar-area{
		position: fixed;
		right: 15px;
		top: 55px;
		width: calc(25% - 45px);
		transition: 0.32s;
		&.hide{
			transform: translateX(calc(100% + 45px));
		}
	}
</style>