import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dataFilter from '@/filters/data.filter.js'
import messagePrlugin from '@/utils/message.plugin.js'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePrlugin)
Vue.use(Vuelidate)
Vue.filter('datefilter', dataFilter)

var firebaseConfig = {
  apiKey: "AIzaSyCWhJ4ggft8ijeXqUzT55WYFm2Bus60zI4",
  authDomain: "vuefirstappsrm.firebaseapp.com",
  databaseURL: "https://vuefirstappsrm.firebaseio.com",
  projectId: "vuefirstappsrm",
  storageBucket: "vuefirstappsrm.appspot.com",
  messagingSenderId: "62423491143",
  appId: "1:62423491143:web:b130db15c9a90edcf98762",
  measurementId: "G-TVMF0F4JBG"
};

firebase.initializeApp(firebaseConfig);

let app

firebase.auth().onAuthStateChanged(() => {
	if(!app){
		app = new Vue({
		  router,
		  store,
		  render: h => h(App)
		}).$mount('#app')
	}
})


