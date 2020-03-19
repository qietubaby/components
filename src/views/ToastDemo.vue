<template>
  <div class="box">
    <g-button @click="showToast">点我触发toast组件</g-button>
  </div>

</template>

<script>
export default {
  methods: {
    showToast() {
      this.$toast("<p>我是message</p>", {
        position: "top",
        enableHtml: true,
        closeButton: {
          text: "知道了",
          callback(toast) {
            toast.log();
            console.log("这里是回调");
          }
        }
      });
    }
  }
}
</script>