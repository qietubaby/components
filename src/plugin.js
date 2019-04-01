import Toast from '@/components/toast/toast.vue'

// 没有解决重复弹出toast的问题
/*
export default {
  install(Vue,options){ //options
    Vue.prototype.$toast = function(message,toastOptions){
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData:toastOptions
      })
      
     // 默认插槽
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
     
      //console.log(123)
    }
  }
}
*/

// 解决重复出现toast问题
let currentToast;
export default {
  install(Vue){ //options
    Vue.prototype.$toast = function(message,toastOptions){
      if(currentToast) {
        currentToast.close()
      }
      currentToast = createToast({Vue,message,propsData:toastOptions,onClose:() => {
        currentToast = null
      }})
    }
  }
}

/*helpers*/
function createToast({Vue,message,propsData,onClose}){
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData 
  })
  
  // 默认插槽
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close',onClose)
  document.body.appendChild(toast.$el)
  return toast
  //console.log(123)
}