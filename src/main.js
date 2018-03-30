import Vue from 'vue'
import App from './App.vue'
import vuer from 'vue-resource'

Vue.use(vuer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
