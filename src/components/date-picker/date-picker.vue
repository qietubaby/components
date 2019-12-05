<template>
  <div>
    <g-popover position="bottom">
      <g-input
        type="text"
        :value="formattedValue"
      />
      <template slot="content">
        <div class="gulu-date-picker-pop">
          <div class="gulu-date-picker-nav">
            <span
              :class="c('prevYear','navItem')"
              @click="onClickPrevYear"
            >
              <g-icon name="zuozuo" /></span>
            <span
              :class="c('prevMonth','navItem')"
              @click="onClickPrevMonth"
            >
              <g-icon name="left" /></span>
            <span :class="c('yearAndMonth')">
              <span @click="onClickYear">{{display.year}}年</span>
              <span @click="onClickMonth">{{display.month+1}}月</span>
            </span>
            <span
              :class="c('nextMonth','navItem')"
              @click="onClickNextMonth"
            >
              <g-icon name="right" /></span>
            <span
              :class="c('nextYear','navItem')"
              @click="onClickNextYear"
            >
              <g-icon name="youyou" /></span>
          </div>
          <div class="gulu-date-picker-panels">
            <div
              v-if="mode==='years'"
              class="gulu-date-picker-content"
            >年</div>
            <div
              v-else-if="mode==='months'"
              class="gulu-date-picker-content"
            >月</div>
            <div
              v-else
              class="gulu-date-picker-content"
            >
              <div class="gulu-date-picker-weekdays">
                <span
                  class="gulu-date-picker-weekday"
                  v-for="i in [1,2,3,4,5,6,0]"
                  :key="i"
                >
                  {{weekdays[i]}}
                </span>
              </div>
              <div
                class="gulu-date-picker-row"
                v-for="i in helper.range(1,7)"
                :key="i"
              >
                <span
                  :class="[c('cell'),{currentMonth: isCurrentMonth(getVisibleDay(i,j)),selected: isSelected(getVisibleDay(i,j))}]"
                  v-for="j in helper.range(1,8)"
                  :key="j"
                  @click="onClickCell(getVisibleDay(i,j))"
                >
                  {{getVisibleDay(i,j).getDate()}}
                </span>
              </div>
            </div>
          </div>
          <div class="gulu-date-picker-actions">
            <g-button>清除</g-button>
          </div>
        </div>
      </template>
    </g-popover>

  </div>
</template>
<script>
import GInput from "@/components/input/input.vue";
import GIcon from "@/components/icon/icon.vue";
import GPopover from "@/components/popover/popover.vue";
import GButton from "@/components/button/button.vue";
import helper from './helper';
export default {
  components: {
    GInput,
    GIcon,
    GPopover,
    GButton
  },
  props: {
    firstDayOfWeek: {
      type: Number,
      default: 1
    },
    value: {
      type: Date,
      default: () => new Date()
    }
  },
  data() {
    let [year, month] = helper.getYearMonthDate(this.value)
    return {
      mode: 'days',
      helper: helper,
      popoverContainer: null,
      weekdays: ['日', '一', '二', '三', '四', '五', '六'],
      display: { year, month }
    }
  },
  computed: {
    visibleDays() {
      let date = new Date(this.display.year, this.display.month, 1)

      // 获取到这个月的第一天
      let first = helper.firstDayOfMonth(date)

      // 获取到这个月的最后一天
      let last = helper.lastDayOfMonth(date)

      // 当前月的天数
      let array = []
      let [year, month] = helper.getYearMonthDate(date)

      for (let i = first.getDate(); i <= last.getDate(); i++) {
        array.push(new Date(year, month, i))
      }

      // 计算上个月末尾几天的天数
      // 因为 0 表示星期天，所以 0 要单独处理。 如果1号是星期一，那么前面加0天，如果是1号是星期二，前面
      // 加1天，如果是0（星期天），前面就加6天
      let n = first.getDay() === 0 ? 6 : first.getDay() - 1
      let array2 = []
      for (let i = 0; i < n; i++) {
        array2.push(new Date(year, month, -i))
      }


      // 计算下个月的前几天
      let m = 42 - array.length - array2.length;
      let array3 = [];
      for (let i = 1; i <= m; i++) {
        array3.push(new Date(year, month + 1, i))
      }
      return [...array2, ...array, ...array3]
    },
    formattedValue() {
      const [year, month, day] = helper.getYearMonthDate(this.value)
      return `${year}-${month + 1}-${day}`
    }
  },
  methods: {
    c(...classNames) {
      return classNames.map(className => `gulu-date-picker-${className}`)
    },
    onClickYear() {
      this.mode = 'years'
    },
    onClickMonth() {
      if(this.mode === 'month') {
        this.mode === ''
      } else {
         this.mode = 'month'
      }
     
    },
    getVisibleDay(row, col) {
      return this.visibleDays[(row - 1) * 7 + col - 1]
    },
    onClickCell(date) {
      // 只能点击当前月份的日期
      if (this.isCurrentMonth(date)) {
        this.$emit('input', date)
      }

    },
    // 判断是否是当前月份，当然也必须是同一年
    isCurrentMonth(date) {
      let [year1, month1] = helper.getYearMonthDate(date);
      return year1 === this.display.year && month1 === this.display.month;
    },
    isSelected(date) {
      console.log(date)
      let [y,m,d] = helper.getYearMonthDate(date);
      let [y2,m2,d2] = helper.getYearMonthDate(this.value);
      return y === y2 && m === m2 && d === d2;
    },
    onClickPrevYear() {
      const oldDate = new Date(this.display.year, this.display.month);
      const newDate = helper.addYear(oldDate, -1);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
    },
    onClickNextYear() {
      const oldDate = new Date(this.display.year, this.display.month);
      const newDate = helper.addYear(oldDate, 1);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
    },
    onClickNextMonth() {
      const oldDate = new Date(this.display.year, this.display.month);
      const newDate = helper.addMonth(oldDate, 1);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
    },
    // 上一月
    onClickPrevMonth() {
      const oldDate = new Date(this.display.year, this.display.month);
      const newDate = helper.addMonth(oldDate, -1);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/css/var.scss";
.gulu-date-picker {
  &-nav {
    display: flex;
    align-items: center;
  }
  &-navItem,
  &-cell,
  &-weekday {
    width: 32px;
    height: 32px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  &-cell {
    color: #ddd;
    cursor: not-allowed;
    border-radius: $border-radius;
    &.currentMonth {
      color: black;
      &:hover {
      background: $blue;
      cursor: pointer;
      border-radius: $border-radius;
      color: white;
     }
    }
    &.selected {
      border: 1px solid $blue;
    }
  }
  &-yearAndMonth {
    margin: 0 auto;
  }
  &-selectMonth {
    width: 224px;
    height: 224px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-actions{
    padding: 8px;
    text-align: right;
  }
}
</style>
