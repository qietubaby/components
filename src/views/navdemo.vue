<template>
  <g-nav :selected.sync="selected">
    <g-nav-item name="home">首页</g-nav-item>
    <g-sub-nav name="about">
      <template slot="title">关于</template>
      <g-nav-item name="culture">企业文化</g-nav-item>
      <g-nav-item name="developers">开发团队</g-nav-item>

      <g-sub-nav name="contacts">
        <template slot="title">联系方式</template>
        <g-nav-item name="wechat">微信</g-nav-item>
        <g-nav-item name="qq">qq</g-nav-item>
      
        <g-sub-nav name="phone">
          <template slot="title">手机</template>
          <g-nav-item name="cm">移动</g-nav-item>
          <g-nav-item name="cu">联通</g-nav-item>
          <g-nav-item name="cn">电信</g-nav-item>
      </g-sub-nav>
      </g-sub-nav>
    </g-sub-nav>
    <g-nav-item name="hire">招聘</g-nav-item>
  </g-nav>
</template>
<script>
import GNav from "@/components/nav/nav.vue";
import GNavItem from "@/components/nav/nav-item.vue";
import GSubNav from "@/components/nav/sub-nav.vue";
export default {
  data() {
    return {
      selected: []
    };
  },
  components: { GNav, GNavItem, GSubNav }
};
</script>
