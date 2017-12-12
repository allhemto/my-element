// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//fade/zoom等
import 'element-ui/lib/theme-chalk/base.css'
//collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import App from './App'

Vue.use(ElementUI,{size:'small'})
Vue.use(ElementUI)
Vue.component(CollapseTransition.name, CollapseTransition)

new Vue({
  el: '#app',
  render: h => h(App)
})
