import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import '../src/assets/css/style.scss'
// 按钮组件
import Button from '@/components/button/button.vue'
import Icon from '@/components/icon/icon.vue'
import ButtonGroup from '@/components/button-group/button-group.vue'



// icon组件
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)


// input 组件
import Input from '@/components/input/input.vue'

Vue.component('g-input', Input)


// toast插件
import plugin from './plugin';
Vue.use(plugin) // use会执行install方法


//tabs 组件
// import Tabs from '@/components/tabs/tabs.vue'
// import TabsHead from '@/components/tabs/tabs-head.vue'
// import TabsItem from '@/components/tabs/tabs-item.vue'
// import TabsBody from '@/components/tabs/tabs-body.vue'
// import TabsPane from '@/components/tabs/tabs-pane.vue'

// Vue.component('g-tabs', Tabs)
// Vue.component('g-tabs-head', TabsHead)
// Vue.component('g-tabs-item', TabsItem)
// Vue.component('g-tabs-body', TabsBody)
// Vue.component('g-tabs-pane', TabsPane)


//popover 组件
import Popover from '@/components/popover/popover.vue'
Vue.component('g-popover', Popover)

// Cascader 组件
// import Cascader from '@/components/cascader/cascader.vue'
// import CascaderItem from '@/components/cascader/cascader-items.vue'
// Vue.component('g-cascader', Cascader)
// Vue.component('g-cascader-item', CascaderItem)
Vue.config.productionTip = false


//轮播图组件
import Slides from '@/components/slides/slides.vue'
import slidesItem from '@/components/slides/slides-item.vue'

Vue.component('g-slides', Slides)
Vue.component('g-slides-item', slidesItem)

// 自定义指令。指令是专门用来封装dom操作的
// binding.value 就是绑定的回调函数
/*
Vue.directive('click-outside',{
  bind: function(el,binding){
    // console.log(el)
    // console.log(binding.value)
    document.addEventListener('click',(e)=>{
      let {target} = e
      if(target === el || el.contains(target)){
        console.log('inside')
        return
      }
      binding.value()
    })
  }
})
*/



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
import { expect } from 'chai'
// 单元测试  Vue动态创建实例

try {
    {
        const Constructor = Vue.extend(Button)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount(div)
        let useElement = vm.$el.querySelector('use')

        expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')

        expect(href).to.eq('#i-settings')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')

        expect(href).to.eq('#i-loading')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        const Constructor = Vue.extend(Button)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let { order } = window.getComputedStyle(svg)

        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        const Constructor = Vue.extend(Button)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let { order } = window.getComputedStyle(svg)

        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        // mock
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount()
        let spy = chai.spy(function() {})
        vm.$on('click', spy)
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
    }
} catch (error) {
    window.errors = [error]
} finally {
    window.errors && window.errors.forEach(error => {
        console.error(error.message)
    });
}