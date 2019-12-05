<!-- Table组件展示 -->
<template>
  <g-table
    :data-source="dataSource"
    :columns="columns"
    :selected-items.sync="selected"
    :bordered="true"
    :order-by.sync="orderBy"
    @update:orderBy="x"
    :loading="loading"
    :height="400"
    expend-field="description"
    :checkable="true"
  >
    <template slot-scope="xxx">
      <button @click="edit(xxx.item)">编辑</button><button @click="view(xxx.item)">查看</button>
    </template>
  </g-table>
</template>

<script>
import GTable from '@/components/table/table.vue'

export default {
  data() {
    return {
      selected: [{
        id: 1, name: '方方', score: 100
      }],
      columns: [
        { text: '姓名', field: 'name', width: 200 },
        { text: '分数', field: 'score' }
      ],
      orderBy: { // true表示开启排序，但是不确定是asc desc
        name: true,
        score: 'desc'
      },
      loading: false,
      dataSource: [
        {
          id: 1, name: '方方', score: 100, description: '这个是老师啊'
        },
        {
          id: 2, name: '圆圆', score: 37, description: '这个是学生啊'
        },
        {
          id: 3, name: '张三', score: 45, description: '这个是学生啊'
        },
        {
          id: 4, name: '李四', score: 99, description: '这个是学生啊'
        },
        {
          id: 5, name: '超人', score: 25, description: '这个是学生啊'
        },
        {
          id: 6, name: '蝙蝠侠', score: 89, description: '这个是学生啊'
        },
        {
          id: 7, name: '蜘蛛侠', score: 38, description: '这个是学生啊'
        },
        {
          id: 8, name: '钢铁侠', score: 2, description: '这个是学生啊'
        },
        {
          id: 9, name: '方方', score: 100, description: '这个是学生啊'
        },
        {
          id: 10, name: '圆圆', score: 37, description: '这个是学生啊'
        },
        {
          id: 11, name: '张三', score: 45, description: '这个是学生啊'
        },
        {
          id: 12, name: '李四', score: 99, description: '这个是学生啊'
        },
        {
          id: 13, name: '超人', score: 25, description: '这个是学生啊'
        },
        {
          id: 14, name: '蝙蝠侠', score: 89, description: '这个是学生啊'
        },
        {
          id: 15, name: '蜘蛛侠', score: 38, description: '这个是学生啊'
        },
        {
          id: 16, name: '钢铁侠', score: 2, description: '这个是学生啊'
        }
      ]
    };
  },

  components: {
    GTable
  },
  methods: {
    x(key) {
      //  this.loading = true
      this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
    },
    edit(item) {
      alert(`开始编辑${item.id}`)
    },
    view(item) {
      alert(`开始查看${item.id}`)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>