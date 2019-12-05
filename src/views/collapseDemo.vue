<template>
  <div>
    <collapse :single="true" :selected="abc">
      <collapseItem :single="true" title="这是第一条" name="1">
       <div>1111111111111</div>
      </collapseItem>
       <collapseItem :single="true" title="这是第二条" name="2">
       <div>22222222222222</div>
      </collapseItem>
       <collapseItem :single="true" title="这是第三条" name="3">
       <div>3333333333333</div>
      </collapseItem>
    </collapse>
  </div>
</template>

<script>
//tabs 组件
import Collapse from '@/components/collapse/collapse.vue'
import CollapseItem from '@/components/collapse/collapse-item.vue'

export default {
  data() {
    return {
     abc: ['1']
    }
  },
  components: {
    Collapse,
    CollapseItem
  }
}
</script>