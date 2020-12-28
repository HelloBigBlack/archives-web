<template>
  <div class="manager_container">
    <div class="manager_header">
      <div class="header_left">
        <span>档案馆管理系统</span>
      </div>
    </div>
    <div class="manager_main">
      <div class="manager_main_side">
        <ul class="side_menu">
          <li>档案管理</li>
          <router-link :to="{name: 'workNews'}" tag="li">工作动态</router-link>
          <li>他山之石</li>
        </ul>
      </div>
      <div class="manager_main_content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {}
  },
  methods: {},
  created() {}
}
</script>

<style lang='scss' scoped>
$header_height: 60px;
.manager_container {
  // height: 100vh;
  width: 100vw;
  background-color: #fff;
}
.manager_header {
  display: flex;
  justify-content: space-between;
  background-color: dodgerblue;
  color: #fff;
  height: $header_height;
  line-height: $header_height;
  .header_left {
    padding-left: 18px;
    span {
      font-size: 18px;
    }
  }
}
.manager_main {
  display: flex;
}
.manager_main_side {
  min-height: calc(100vh - 60px);
  background-color: #fcfcfd;
  box-shadow: -2px -2px 32px 0 rgba(0, 0, 0, 0.04) inset;
  width: 240px;
}
.manager_main_content {
  width: calc(100% - 240px);
}
.side_menu {
  $line_height: 38px;
  width: 100%;
  padding: 24px 0px;
  > li {
    cursor: pointer;
    font-size: 14px;
    height: $line_height;
    line-height: $line_height;
    margin: 0 18px;
    color: #555;
    &:hover {
      background-color: dodgerblue;
      color: #fff;
    }
  }
}
</style>
