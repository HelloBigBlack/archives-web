<template>
  <div class="module_page_container">
    <div class="module_page_header">
      <div class="left_title">
        <span>{{pageTitle}}</span>
      </div>
      <div class="right_header">
        <slot name="header"></slot>
      </div>
    </div>
    <div class="module_page_content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pageTitle'],
  data: function() {
    return {}
  },
  methods: {},
  created() {}
}
</script>

<style lang='scss' scoped>
.module_page_container {
  width: 100%;
}
.module_page_header {
  $header_height: 60px;
  height: $header_height;
  line-height: $header_height;
  text-align: left;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  .left_title {
    padding-left: 18px;
    span {
      font-size: 18px;
      font-weight: 500;
    }
  }
  .right_header {
    margin-right: 18px;
  }
}
.module_page_content {
  margin: 24px 18px;
}
</style>
