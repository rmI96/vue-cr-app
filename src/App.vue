<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
    <ul class="toastswrap">
    
    </ul>
  </div>
</template>

<script>
  import EmptyLayout from '@/layouts/EmptyLayout'
  import MainLayout from '@/layouts/MainLayout'
  export default {

    data: () => ({
      a: 'data-app-vue'
    }),

    computed: {
      layout(){
        return (this.$route.meta.layout || 'empty-layout')
      }
    },

    methods: {
      fn: function () {
        console.log('methods')
      }
    },

    // хуки жизненного цикла
    beforeCreate: function(){
      console.log('beforeCreate');
    },
    mounted: function(){
      console.log('mounted ' + this.a);
    },
    activated: function(){
      console.log('activated');
    },

    components: {
      EmptyLayout, MainLayout
    }

  }
</script>

<style lang="scss">
  @import '~bootstrap/dist/css/bootstrap.min.css';

  html:not(.touch-screen)::-webkit-scrollbar,
  html:not(.touch-screen) *::-webkit-scrollbar {
    width: 4px;
    height: 5px; }

  html:not(.touch-screen)::-webkit-scrollbar-track,
  html:not(.touch-screen) *::-webkit-scrollbar-track {
    background: rgba(1,1,1,0.8); }

  html:not(.touch-screen)::-webkit-scrollbar-thumb,
  html:not(.touch-screen) *::-webkit-scrollbar-thumb {
    background: rgba(1,1,1,0.6); }

  .toastswrap{
    position: fixed;
    right: 20px;
    top: 20px;
    li{
      list-style: none;
      border-radius: 12px;
      padding: 8px 25px 10px 25px;
      background-color: rgba(1,1,1,0.9);
      color: rgba(255, 255, 255, 0.8);
      width: max-content;
      margin-bottom: 15px;
      margin-left: auto;
      transition: 0.32s;
      &.error{
        background-color: brown;
      }
      &.warn{
        background-color: chocolate;
      }
      &.success{
        background-color: seagreen;
      }
    }
  }

</style>
