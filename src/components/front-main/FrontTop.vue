<template>
  <div class="cust_container">
    <div class="center_container content_box">
      <div class="left_content">
        <span class="pointer">日照档案信息网</span>
      </div>
      <div class="right_content">
        <span class="pointer">公务邮箱</span>
        <span class="pointer">返回旧版</span>
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
@import '../../assets/css/public.scss';
$height: 31px;
.cust_container {
  background-color: $main_color;
  height: $height;
  line-height: $height;
  width: 100%;
  color: #eee;
  font-size: 14px;
}
.content_box {
  height: $height;
  display: flex;
  justify-content: space-between;
}
.left_content {
  text-align: left;
}
.right_content {
  text-align: right;
  span {
    margin-left: 30px;
  }
}
</style>
