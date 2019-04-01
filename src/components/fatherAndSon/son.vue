<template>
  <div>
    <g-button @click="changeNum">Sync的用处{{num}}</g-button>
  </div>
</template>
<script>
export default {
  props:['num'],
  methods: {
    changeNum(){
    //  this.num = 123
      this.$emit('update:num',123)
    }
  }
}
</script>
