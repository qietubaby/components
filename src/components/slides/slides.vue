<template>
  <div
    class="g-slides"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span
        :key="n"
        v-for="n in childrenLength"
        :class="{active: selectedIndex === n-1}"
        @click="select(n-1)"
      >{{n}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      startTouch: {}
    };
  },
  mounted() {
    this.updateChildren();
    this.playAutomatically();
    this.childrenLength = this.items.length;
    //   this.childrenLength = this.$children.filter(vm => vm.$options.name === 'GuluSlideItem').length;
  },
  updated() {
    this.updateChildren();
  },
  computed: {
    selectedIndex() {
      let index = this.names.indexOf(this.selected);
      return index === -1 ? 0 : index;
    },
    names() {
      return this.items.map(vm => vm.name);
    },
    items() {
      return this.$children.filter(vm => vm.$options.name === 'GuluSlideItem');
    }
  },
  methods: {
    onMouseEnter() {
      this.pause();
    },
    onMouseLeave() {
      this.playAutomatically();
    },
    pause() {
      window.clearTimeout(this.timerId);
      this.timerId = undefined;
    },
    onTouchStart(e) {
      this.pause();
      if (e.touches.length > 1) {
        return;
      }
      this.startTouch = e.touches[0];
    },
    onTouchEnd(e) {
      let endTouch = e.changedTouches[0];
      let { clientX: x1, clientY: y1 } = this.startTouch;
      let { clientX: x2, clientY: y2 } = endTouch;

      let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      let deltaY = Math.abs(y2 - y1);
      let rate = distance / deltaY;
      if (rate > 2) {
        if (x2 > x1) {
          this.select(this.selectedIndex - 1);
        } else {
          this.select(this.selectedIndex + 1);
        }
      }
      this.$nextTick(() => {
        this.playAutomatically();
      });
    },
    playAutomatically() {
      // setInterval(()=>{
      //   if(index === names.length) { index = 0 }
      //   this.$emit('update:selected',names[index + 1])
      //   index++
      // },1000)

      // 用setTimeout模拟 setInterval
      if (this.timerId) {
        return;
      }
      let run = () => {
        let index = this.names.indexOf(this.getSelected());
        let newIndex = index + 1;

        //this.$emit('update:selected',this.names[newIndex])
        this.select(this.names[newIndex]);
        this.timerId = setTimeout(run, 3000);
      };
      this.timerId = setTimeout(run, 3000);
    },
    getSelected() {
      let first = this.$children[0];
      return this.selected || first.name;
    },
    updateChildren() {
      let selected = this.getSelected();
      // console.log(this.lastSelectedIndex)
      // 让所有的子组件的selected 都变成一样
      this.$children.forEach(vm => {
        let reverse =
          this.selectedIndex > this.lastSelectedIndex ? false : true;

        // 只有在定时器开启才去判断这个
        if (this.timerId) {
          if (
            this.lastSelectedIndex === this.$children.length - 1 &&
            this.selectedIndex === 0
          ) {
            reverse = false;
          }
          if (
            this.lastSelectedIndex === 0 &&
            this.selectedIndex === this.$children.length - 1
          ) {
            reverse = true;
          }
        }
        // 判断当前是正序还是倒序
        vm.reverse = reverse;

        this.$nextTick(() => {
          vm.selected = selected;
        });
      });
    },
    select(newIndex) {
      this.lastSelectedIndex = this.selectedIndex;
      if (newIndex === -1) {
        newIndex = this.names.length - 1;
      }
      if (newIndex === this.names.length) {
        newIndex = 0;
      }

      this.$emit("update:selected", this.names[newIndex]);
    }
  }
};
</script>
<style lang="scss" scoped>
.g-slides {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  &-wrapper {
    position: relative;
  }
  &-dots {
    padding: 4px 0;
    > span {
      margin-right: 20px;
      width: 1.2em;
      height: 1.2em;
      border-radius: 50%;
      display: inline-flex;
      background: #ddd;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      margin: 0 0.2em;
      &.active {
        background: red;
        cursor: default;
      }
    }
  }
}
</style>