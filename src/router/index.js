import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

//按钮组件展示
import ButtonDemo from '../views/ButtonDemo.vue'

//popover
import PopoverDemo from '../views/PopoverDemo.vue'

//icon
import IconDemo from '../views/IconDemo.vue'

// Tab
import TabDemo from '../views/TabDemo.vue'

// 折叠面板
import CollapseDemo from '../views/collapseDemo.vue'
// 级联选择器
import CascaderDemo from '../views/CascaderDemo.vue'
import CascaderAjaxDemo from '../views/CascaderAjaxDemo.vue'
// Table组件
import TableDemo from '../views/TableDemo.vue'

// 滚动组件
import ScrollDemo from '../views/ScrollDemo.vue'

// import slidedemo from './views/slidedemo.vue'
// import navdemo from './views/navdemo.vue'
// import griddemo from './views/griddemo.vue'
//  import uploaderTest from './views/uploaderTest.vue'
//  import Sticky from './views/sticky.vue'


//import dateDemo from './views/datePickerDemo.vue'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'current',
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'demo',
      component: Home
    },
    {
      path: '/button',
      name: 'Buttondemo',
      component: ButtonDemo
    },
    {
      path: '/popover',
      name: 'Popoverdemo',
      component: PopoverDemo
    },
    {
      path: '/icon',
      name: 'IconDemo',
      component: IconDemo
    },
    {
      path: '/tab',
      name: 'TabDemo',
      component: TabDemo
    },
    {
      path: '/collapse',
      name: 'CollapseDemo',
      component: CollapseDemo
    },
    {
      path: '/cascader',
      name: 'CascaderDemo',
      component: CascaderDemo
    },
    {
      path: '/ajaxcascader',
      name: 'CascaderAjaxDemo',
      component: CascaderAjaxDemo
    },
    {
      path: '/table',
      name: 'TableDemo',
      component: TableDemo
    },
    {
      path: '/scroll',
      name: 'ScrollDemo',
      component: ScrollDemo
    }
  ]
})
