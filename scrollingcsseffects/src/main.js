import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Scrollanimation from './directives/scrollanimation'

Vue.directive('scrollanimation', Scrollanimation)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
