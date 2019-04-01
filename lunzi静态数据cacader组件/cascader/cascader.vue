<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{result || '&nbsp;'}} 
      <!--加空格是为了避免去掉选择框下面的空白-->
    </div>
    <div class="popover-wraper" v-if="popoverVisible">
      <cascader-items 
        :items="source"
        :height="popoverHeight"
        :selected="selected"
        @update:selected="onUpdateSelected"
      >
      </cascader-items>
    </div>
    </div>
</template>
<script>
import CascaderItems from './cascader-items'
export default {
  name: 'GuluCascader',
  components: {
     CascaderItems
  },
  props: {
    source: {
      type: Array
    },
    popoverHeight:{
      type: String
    },
    selected: {
      type: Array,
      default: () => {return []}
    }
  },
  data(){
    return {
      popoverVisible: true
    }
  },
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    }
  },
  computed: {
    result() {
      return this.selected.map((item) => item.name).join('/')
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.cascader {
  position: relative;
  .trigger {
    border: 1px solid $border-color;
    height: $input-height;
    display: inline-flex;
    align-items: center;
    border-radius: $border-radius;
    min-width: 10em;
    padding:0 1em;
  }
  .popover-wraper {
    position: absolute;
    overflow: hidden;
    top: 100%;
    left:0;
    background-color:#fff;
    display: flex;
    @extend .box-shadow; //选择器多，样式少
    // @include box-shadow2; //选择器少，样式多
    .label {
      white-space: nowrap;
    }
  }
}
</style>

