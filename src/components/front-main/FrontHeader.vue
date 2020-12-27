<template>
  <div class="center_container">
    <div class="left_logo">
      <img src="@/assets/imgs/front/index-logo.png" />
    </div>
    <div class="header_menu_container">
      <ul class="header_menu">
        <li>
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">本馆概况</a>
          <ul class="menu_nav_1">
            <li>
              <a href="#">历史沿革</a>
            </li>
            <li>
              <a href="#">职责分工</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">工作动态</a>
          <ul class="menu_nav_2">
            <li>
              <a href="#">公告</a>
            </li>
            <li>
              <a href="#">市管动态</a>
            </li>
            <li>
              <a href="#">区县工作</a>
            </li>
            <li>
              <a href="#">他山之石</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">政策法规</a>
          <ul class="menu_nav_1">
            <li>
              <a href="#">档案法规</a>
            </li>
            <li>
              <a href="#">业务规范</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">常用下载</a>
        </li>
        <li>
          <a href="#">档案业务</a>
          <ul class="menu_nav_3">
            <li>
              <a href="#">接收征集</a>
            </li>
            <li>
              <a href="#">教育培训</a>
            </li>
            <li>
              <a href="#">查阅服务</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">档案文化</a>
          <ul class="menu_nav_3">
            <li>
              <a href="#">历史上的今天</a>
            </li>
            <li>
              <a href="#">档案话今昔</a>
            </li>
            <li>
              <a href="#">日照记忆</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">机关建设</a>
          <ul class="menu_nav_4">
            <li>
              <a href="#">规章制度</a>
            </li>
            <li>
              <a href="#">作风建设</a>
            </li>
            <li>
              <a href="#">学习专题</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style lang='scss' scoped>
@import "../../assets/css/public.scss";

.left_logo {
  text-align: left;
  padding: 40px 0;
}
.header_menu {
  background-color: $main_color;
  height: 44px;
  > li {
    float: left;
    color: #fff;
    line-height: 44px;
    height: 44px;
    width: 137px;
    text-align: center;
    position: relative;
  }
  > li:hover {
    background-color: $main_light_color;
  }
  > li a {
    font-size: 18px;
    color: #fff;
  }
}
.header_menu li ul {
  display: none;
  position: absolute;
  top: 44px;
  li {
    opacity: 0.9;
    margin-right: 1px;
    height: 40px;
    line-height: 40px;
    float: left;
    width: 137px;
    background-color: $main_color;
    border-top: 1px solid #fff;
    &:hover {
      background-color: $main_light_color;
    }
  }
}
.header_menu li:hover ul {
  display: block;
  &:hover {
    display: block;
  }
}
.menu_nav_1 {
  left: -67px;
  width: 850px;
}
.menu_nav_2 {
  left: -210px;
  width: 690px;
}
.menu_nav_3 {
  left: -137px;
  width: 430px;
}
.menu_nav_4 {
  left: -270px;
  width: 430px;
}
</style>
