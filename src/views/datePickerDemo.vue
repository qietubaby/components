<template>
 <div>
   <div style="padding-bottom:30px;">
     组件功能<br/>
     选择一个日期 date-picker<br/>
     选择一段时间 daterange-picker<br/>
     选择一个月 month-picker<br/>
     选择一年 year-picker<br/>
   </div>
   <div style="padding-bottom:30px;">
     日历组件的特点是需要展示上个月的几天，当前月的全部天数和下个月的几天。<br/>
     一个月最大的跨度是6周，一周是7天，所以每页要展示42天才能保证每页展示<br/>
     的数量是一样的。关键在于求上个月的末尾几天+当前月的天数+下个月的前几天。<br/>
   </div>
   <date-picker :value="d" @input="d = $event" :scope="scope"></date-picker>
 </div>
</template>
<script>
import DatePicker from "@/components/date-picker/date-picker.vue";
export default {
 components: {
  DatePicker
 },
 data() {
   return {
     d: new Date(),
     scope: [new Date(1918, 1), new Date(2018, 5)]
   }
 }
}
</script>

