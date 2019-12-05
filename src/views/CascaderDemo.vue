<template>
<div>

 
  <cascader
    :source.sync="source"
    popoverHeight="200px"
    :selected.sync="selected"
  >

  </cascader>
  </div>
</template>

<script>
import Cascader from '@/components/cascader/cascader.vue'

export default {
  data() {
    return {
      selected: [],
      source: [],
    };
  },
  created() {
    this.source = [
      {
        name: "河北省",
        children: [{
          name: "邯郸",
          children: [
            { name: '涉县' },
            { name: '肥乡' },
            { name: '磁县' }
          ]
        }, {
          name: "石家庄"
        }]
      }
    ]
  },
  components: {
   Cascader
  }
}
</script>