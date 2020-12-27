<template>
  <div class="center_container img_card_container">
    <ul>
      <li>
        <img src="@/assets/imgs/front/index-card/card1.jpg" />
      </li>
      <li>
        <img src="@/assets/imgs/front/index-card/card2.jpg" />
      </li>
      <li>
        <img src="@/assets/imgs/front/index-card/card3.jpg" />
      </li>
      <li>
        <img src="@/assets/imgs/front/index-card/card4.jpg" />
      </li>
    </ul>
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
.img_card_container {
  background-color: #fff;
  padding: 15px 0px;
  margin-top: 25px;
}
li {
  display: inline-block;
  margin: 0px 8px;
  width: 248px;
  img {
    width: 100%;
    height: 74px;
  }
}
</style>
