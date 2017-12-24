// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

Vue.config.productionTip = false
Vue.use(ElementUI)


//图片懒加载
Vue.use(VueLazyload, {
  error: 'http://oear5piod.bkt.clouddn.com/error.png',
  loading: 'http://oear5piod.bkt.clouddn.com/loading.png',
  attempt: 1
})


sync(store, router)
// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
new Vue({
  router,
  store,
  render: h=>h(App)
}).$mount('#app');
