<template>
  <div>
    <div class="demoitem">
      <g-popover position="top">
        <template
          slot="content"
          slot-scope="{close}"
        >这是什么呀content
          <g-button @click="close">关闭</g-button>
        </template>
        <g-button>点我TOP</g-button>
      </g-popover>
    </div>

    <div class="demoitem">
      <g-popover
        position="bottom"
        trigger="hover"
      >
        <template slot="content">这是什么呀content</template>
        <g-button>鼠标移入BOTTOM</g-button>
      </g-popover>
    </div>

    <div class="demoitem">
      <g-popover position="left">
        <template slot="content">这是什么呀content</template>
        <g-button>点我LEFT</g-button>
      </g-popover>
    </div>

    <div class="demoitem">
      <g-popover position="right">
        <template slot="content">这是什么呀content</template>
        <g-button>点我RIGHT</g-button>
      </g-popover>
    </div>
  </div>
</template>
<script>

export default {

}
</script>