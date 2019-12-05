<template>
 <div style="padding:200px;">
   <div style="padding-bottom:30px;">
     日历组件的特点是需要展示上个月的几天，当前月的全部天数和下个月的几天。<br/>
     一个月最大的跨度是6周，一周是7天，所以每页要展示42天才能保证每页展示<br/>
     的数量是一样的。关键在于求上个月的末尾几天+当前月的天数+下个月的前几天。<br/>
   </div>
   <date-picker :value="d" @input="d = $event"></date-picker>
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
     d: new Date()
   }
 }
}
</script>

