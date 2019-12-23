<template>
  <div id="app">
    <header class="header">
      <router-link to="/">
        <img
          class="logo"
          src="@/assets/images/logo.png"
          alt=""
        >
      </router-link>
    </header>

    <div class="container">
      <ul class="side-bar">

        <li class="big-title">组件</li>

        <li>
          <router-link to="/button">Button 按钮</router-link>
        </li>
        <li>
          <router-link to="/popover">popover弹窗</router-link>
        </li>
        <li>
          <router-link to="/icon">Icon 图标</router-link>
        </li>
        <li>
          <router-link to="/tab">Tab 选项卡</router-link>
        </li>
        <li>
          <router-link to="/collapse">Collapse 折叠面板</router-link>
        </li>
        <li>
          <router-link to="/cascader">Cascader 级联选择器</router-link>
        </li>
        <li>
          <router-link to="/ajaxcascader">Cascader Ajax版本级联选择器</router-link>
        </li>
        <li>
          <router-link to="/table">Table 表格组件</router-link>
        </li>
        <li>
          <router-link to="/scroll">Scroll 滚动组件</router-link>
        </li>
         <li>
          <router-link to="/datepicker">时间选择器组件</router-link>
        </li>
      </ul>
      <div class="component-content">

        <router-view />
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 1110px;
  margin: 0 auto;
  height: 80px;
  border-bottom: 1px solid #dcdfe6;
  .logo {
    margin-top: 19px;
  }
}
.container {
  overflow: hidden;
  width: 1110px;
  margin: 40px auto 40px auto;
  .side-bar {
    width: 240px;
    float: left;
  }
  .component-content {
    width: 870px;
    float: right;
  }
}
.side-bar {
  .big-title {
    font-weight: bold;
  }
  li {
    height: 40px;
    line-height: 40px;
  }
  li a {
    color: #444;

    text-decoration: none;
    &:hover {
      color: #409eff;
    }
  }
  li a.current {
    color: #409eff;
  }
}
</style>
