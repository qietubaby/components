<template>
  <div>
    <div class="box">
     
      <g-slides class="wrapper" :selected.sync="selected">
        <g-slides-item name="0">
          <div class="slidebox">1</div>
        </g-slides-item>
        <g-slides-item name="1">
          <div class="slidebox">2</div>
        </g-slides-item>
        <g-slides-item name="2">
          <div class="slidebox">3</div>
        </g-slides-item>
      </g-slides>
    
     
    </div>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      // slides数据
      selected: '0',
      showbox2: false
    };
  },
  methods: {
    showTwo() {
      this.showbox2 = !this.showbox2
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 400px;
}
.slidebox {
  background: #ddd;
  font-size: 30px;
  text-align: center;
  line-height: 150px;
  width:400px;
  height:300px;
  
}
.boxWrap{
  position:relative;
  width: 200px;
  height:200px;
  background:orange;
}
</style>