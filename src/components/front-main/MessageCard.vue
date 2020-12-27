<template>
  <div class="message_card_container">
    <div class="card_title">
      <a :class="{'red_bottom_border': showRedBorder}">{{messageTitle}}</a>
    </div>
    <div class="card_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'messageTitle': {
      type: String,
      default: ''
    },
    'showRedBorder': {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {}
  },
  methods: {},
  created() {}
}
</script>

<style lang='scss' scoped>
.message_card_container {
  padding: 10px 18px;
  background-color: #fff;
}
.card_title {
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #cbcbcb;
  a {
    display: inline-block;
    font-size: 18px;
    height: 39px;
    line-height: 39px;
    color: #222222;
    font-weight: bold;
  }
}
.red_bottom_border {
  border-bottom: 2px solid #c91c18;
}
</style>
