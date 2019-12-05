<template>
  <div>
  
<!-- 
    <Child
      v-bind:title="doc.title"
      @update:title="doc.title = $event"

    /> -->

    <tabs
      :selected.sync="selectedTab"
      direction="vertical"
    >
      <!-- 
        这行代码和上面等价 -->
        <!-- <tabs selected="selectedTab" @update:selected="selectedTab = $event"> -->
       
      <tabs-head>
        <template slot="actions">
          <button>设置</button>
        </template>
        <tabs-item name="woman">美女</tabs-item>
        <tabs-item
          name="finance"
          disabled
        >财经</tabs-item>
        <tabs-item name="sports">体育</tabs-item>
      </tabs-head>
      <tabs-body>
        <tabs-pane name="woman">美女资讯</tabs-pane>
        <tabs-pane name="finance">财经资讯</tabs-pane>
        <tabs-pane name="sports">体育资讯</tabs-pane>
      </tabs-body>
    </tabs>
  </div>
</template>

<script>
//tabs 组件
import Tabs from '@/components/tabs/tabs.vue'
import TabsHead from '@/components/tabs/tabs-head.vue'
import TabsItem from '@/components/tabs/tabs-item.vue'
import TabsBody from '@/components/tabs/tabs-body.vue'
import TabsPane from '@/components/tabs/tabs-pane.vue'
export default {
  data() {
    return {
      selectedTab: "woman",
      doc: {
        title: "小明"
      }
    }
  },
  components: {
    Tabs,
    TabsHead,
    TabsItem,
    TabsBody,
    TabsPane

  }
}
</script>