<template>
  <button
    class="g-button"
    :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')"
  >
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon name="loading" v-if="loading" class="loading icon"></g-icon>
    <div class="content">
       <slot></slot>
    </div>
   
  </button>
</template>
<script>
  export default {
   // props: ['icon','iconPosition']
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        typoe: String,
        default: 'left',
        validator(value) { // 属性检查器 验证iconPosition是否为'left'或者'right'


          // if(value !=='left' && value !== 'right') {
          //   return false;
          // } else {
          //   return true
          // }

          // 简化后
          // return !(value !=='left' && value !== 'right');

          // 简化后
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>
<style lang="scss">
@import "@/assets/css/var.scss";
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    width: 1em;
    height: 1em;
    order: 1;
    margin-right: .1em;
  }
  > .content {
    order: 2;
  } 
  &.icon-right {
    > .icon{
      order: 2;
      margin-left: .1em;
      margin-right: 0;
    }
    > .content {
      order: 1;
      
    }
  }
  .loading {
    @include spin;
  }
}

</style>
