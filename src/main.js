import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入element-ui
import './plugins/element.js'
//引入初始化样式
import './assets/style/base.less'
//引入字体图标
import './assets/fonts/iconfont.css'
//引入axios请求
import './api'
//引入vue-table-with-tree-grid
import TreeTable from 'vue-table-with-tree-grid'


Vue.component('tree-table', TreeTable)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')