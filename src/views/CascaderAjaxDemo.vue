<template>
  <div>

    <cascader
      :source.sync="source"
      popoverHeight="200px"
      :selected.sync="selected"
      :load-data="loadData"
    >
    </cascader>
  </div>
</template>

<script>
import Cascader from '@/components/cascader/cascader.vue'
import db from './db.json'
function ajax(parentId = 0) {
  return new Promise((success) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id == parentId)

      /**这部分工作其实是后台做的，用来判断有没有children */
      result.forEach(node => {
        if (db.filter(item => item.parent_id === node.id).length > 0) {
          node.isLeaf = false
        } else {
          node.isLeaf = true
        }
      })
      success(result)
    }, 300)

  })
}
export default {
  data() {
    return {
      // cascader组件数据
      selected: [],
      source: [],
    };
  },
  created() {
    ajax(0).then(result => {
      console.log(result)
      this.source = result
    })


  },
  methods: {
    // node就是lastItem
    loadData(node, updateSource) {
      let { id } = node
      ajax(id).then(result => {
        updateSource(result)
      })
    }
  },
  components: {
    Cascader
  }
}
</script>