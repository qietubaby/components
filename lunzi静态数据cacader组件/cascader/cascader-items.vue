<template>
  <div class="cascaderItem" :style="{height: height}">
    <div class="left">
      <!-- <div style="color:red;">
       selected: {{selected && selected[level] && selected[level].name}}
       level: {{level}}
      </div> -->
      <div class="label" @click="onClickLabel(item)" :key="index" v-for="(item,index) in items">
        {{item.name}}
        <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
     
    </div>
     <div class="right" v-if="rightItems">
       <gulu-cascader-items :level="level+1" :selected="selected" :height="height" :items="rightItems" @update:selected="onUpdateSelected"></gulu-cascader-items> 
      </div>
  </div>
</template>
<script>
import Icon from '@/components/icon/icon.vue';
export default {
  name: "GuluCascaderItems",
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    },
    selected: {
      type: Array,
      default: () => {return []}
    },
    level: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      leftSelected: null
    };
  },
  computed: {
    rightItems() {
      let currentSelected = this.selected[this.level]
      if (currentSelected && currentSelected.children) {
        return currentSelected.children;
      } else {
        return null;
      }
    }
  },
  components: {
    Icon
  },
  methods: {
    onClickLabel(item) {
     
      // this.leftSelected = item
      // this.selected[this.level] = item // Vue这么赋值无效，必须用set
      // this.$set(this.selected,this.level,item)
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      console.log(this.level)
      copy.splice(this.level + 1)
      this.$emit('update:selected',copy)
      // console.log(copy)
    },
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/var.scss";
.cascaderItem {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .left {
    height: 100%;
    padding: .3em 0;
   
  }
  .right {
    border-left: 1px solid $border-color-light;
    height: 100%;
  }
  .label {
    padding:0.3em 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      margin-left:1rem;
      color: $border-color-light;
      transform:scale(0.7);
    }
  }
}
</style>
