// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mynav from './components/nav'
import mytop from './components/top'
import store from './store'

import './assets/style/jichu.css'
import './assets/style/mycss.css'
import './assets/style/tupian.css'
import './assets/lib/weui-master/dist/style/weui.min.css'
import './js/date.js'
import './assets/js/jichu.js'
Vue.config.productionTip = false
Vue.component('my-nav',mynav)
Vue.component('my-top',mytop)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
