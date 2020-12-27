<template>
  <div>
    <front-top></front-top>
    <front-header></front-header>
    <top-message></top-message>
    <img-card></img-card>
    <div class="center_container messages_container">
      <div class="left_content">
        <gongkai-card></gongkai-card>
      </div>
      <div class="right_content">
        <xinxi-card></xinxi-card>
      </div>
    </div>
  </div>
</template>

<script>
import FrontTop from '@/components/front-main/FrontTop'
import FrontHeader from '@/components/front-main/FrontHeader'
import TopMessage from '@/components/front-main/index/TopMessage'
import GongkaiCard from '@/components/front-main/index/GongkaiCard'
import XinxiCard from '@/components/front-main/index/XinxiCard'
import ImgCard from '@/components/front-main/index/ImgCard'
export default {
  components: {
    FrontTop,
    FrontHeader,
    TopMessage,
    GongkaiCard,
    XinxiCard,
    ImgCard
  },
  data: function() {
    return {}
  },
  methods: {},
  created() {}
}
</script>

<style lang='scss' scoped>
.messages_container {
  display: flex;
  margin-top: 25px;
  justify-content: space-between;
  .left_content {
    width: 660px;
  }
  .right_content {
    width: 412px;
  }
}
</style>
