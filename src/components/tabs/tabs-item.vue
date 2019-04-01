<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'GuluTabsItem',
  inject: ['eventBus'],
  data(){
    return {
      active: false
    }
  },
  computed:{
    classes(){
      return {
        active: this.active
      }
    }
  },
  created() {
    //console.log(this.eventBus)
    this.eventBus.$on('update:selected',(name) => {
      // if(name === this.name) {
      //   console.log(`${this.name}被选中了`)
      //   this.active = true
      // } else {
      //   console.log(`${this.name}没有被选中`)
      //   this.active = false
      // }
      // 优化后
      this.active = name === this.name
     
    })
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type:String || Number,
      required: true
    }
  },
  methods:{
    xxx() {
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>
<style lang="scss">
  $blue:#1890ff;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;

    &.active {
      color:$blue;
      font-weight: bold;
    }
  }
</style>
