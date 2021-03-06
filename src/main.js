// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueQuillEditor from 'vue-quill-editor'
import loading from './components/loading/index'
import modal from './components/modal/index'
import './util/debounce'

Vue.use(vueQuillEditor)
Vue.use(loading)
Vue.use(modal)
Vue.config.productionTip = false
// router.push('/articles')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
