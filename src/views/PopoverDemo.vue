<template>
  <div class="content">
    <h2>Popover 弹出框</h2>
    <h3>组件用法</h3>
    <div>
      <p>① Popover提供4种不同方向的展示方式，可以通过传入left/right/top/bottom来选择你要的效果。</p>
      <p>② 可以选择click或者hover两种交互模式。</p>
      <p>③ 可以使用open和close来接收弹出框的打开和关闭的回调。</p>
      <p>④ 可以通过点击document和按钮两种方式关闭弹出框</p>
    </div>

    <div class="demoitem mt20">
      <g-popover
        position="top"
        @open="openback"
        @close="closeback"
      >
        <template
          slot="content"
          slot-scope="{close}"
        >钟南山，84岁再战防疫最前线；李兰娟，年过古稀仍奔波一线，ICU查房后脸上压痕清晰可见；陈薇，大年初二就奔赴武汉，科研成果大大加快确诊速度…
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
        <template slot="content">疫情拐点尚未到来，病毒变化形式还在“花样翻新”，但很多人已摘下口罩，出门聚餐聚会</template>
        <g-button>鼠标移入BOTTOM</g-button>
      </g-popover>
    </div>

    <div class="demoitem">
      <g-popover position="left">
        <template slot="content">疫情拐点尚未到来，病毒变化形式还在“花样翻新”，但很多人已摘下口罩，出门聚餐聚会</template>
        <g-button>点我LEFT</g-button>
      </g-popover>
    </div>

    <div class="demoitem">
      <g-popover position="right">
        <template slot="content">疫情拐点尚未到来，病毒变化形式还在“花样翻新”，但很多人已摘下口罩，出门聚餐聚会</template>
        <g-button>点我RIGHT</g-button>
      </g-popover>
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    openback() {
      //console.log('弹出了')
    },
    closeback() {
      //console.log('关闭了')
    }
  }
}
</script>