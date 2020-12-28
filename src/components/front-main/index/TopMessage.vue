<template>
  <div class="center_container top_message_container">
    <div class="important_msg_title">
      <a
        href="https://mp.weixin.qq.com/s?__biz=MzI3ODA4ODQ2MQ==&mid=2647959780&idx=1&sn=2560e8165597c5fb495048bc27c920d8&chksm=f37c5686c40bdf90fc70bfd2a68182f4528e3217f8238ae8572634ebc3e51eeb30edab9d7ea6&token=761188897&lang=zh_CN#rd"
        target="_blank"
      >日照市档案馆关于巡察整改进展情况的通报
      </a>
    </div>
    <div class="message_content_box">
      <div class="left_carousel">
        <el-carousel indicator-position="none">
          <el-carousel-item v-for="item in 3" :key="item">
            <div class="message_carousel_content" v-if="item === 1">
              <img src="@/assets/imgs/front/temp/carousel1.jpg" />
              <div class="carousel_bottom_title">全市“不忘初心、牢记使命”档案文献开展</div>
            </div>
            <div class="message_carousel_content" v-if="item === 2">
              <img src="@/assets/imgs/front/temp/carousel2.jpg" />
              <div class="carousel_bottom_title">日照市档案馆召开“不忘初心、牢记使命”主题教育工作会议</div>
            </div>
            <div class="message_carousel_content" v-if="item === 3">
              <img src="@/assets/imgs/front/temp/carousel3.jpg" />
              <div class="carousel_bottom_title">市档案馆通过“全国示范数字档案馆”测评</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="right_list">
        <div class="top_message_tabs">
          <div
            class="pointer tab_item"
            :class="{'tab_item-hover': currentIndex === 1}"
            @mouseover="changeIndex(1)"
          >市馆动态</div>
          <span>|</span>
          <div
            class="pointer tab_item"
            :class="{'tab_item-hover': currentIndex === 2}"
            @mouseover="changeIndex(2)"
          >区县工作</div>
          <span>|</span>
          <div
            class="pointer tab_item"
            :class="{'tab_item-hover': currentIndex === 3}"
            @mouseover="changeIndex(3)"
          >他山之石</div>
        </div>
        <div class="message_list_box">
          <div class="message_list_content">
            <ul>
              <li class="message_list-li">
                <a href="#">· 云寻觅“海上香料之路”——“‘香料之路’档案”国际协调会云端召开</a>
                <span>[2020-12-06]</span>
              </li>
              <li class="message_list-li">
                <a href="#">· 云寻觅“海上香料之路”——“‘香料之路’档案”国际协调会云端召开</a>
                <span>[2020-12-06]</span>
              </li>
              <li class="message_list-li">
                <a href="#">· 云寻觅“海上香料之路”——“‘香料之路’档案”国际协调会云端召开</a>
                <span>[2020-12-06]</span>
              </li>
              <li class="message_list-li">
                <a href="#">· 云寻觅“海上香料之路”——“‘香料之路’档案”国际协调会云端召开</a>
                <span>[2020-12-06]</span>
              </li>
              <li class="message_list-li">
                <a href="#">· 云寻觅“海上香料之路”——“‘香料之路’档案”国际协调会云端召开</a>
                <span>[2020-12-06]</span>
              </li>
              <li class="message_list-li">
                <a href="#">· 云寻觅“海上香料之路”——“‘香料之路’档案”国际协调会云端召开</a>
                <span>[2020-12-06]</span>
              </li>
              <li class="message_list-li">
                <a href="#">· 云寻觅“海上香料之路”——“‘香料之路’档案”国际协调会云端召开</a>
                <span>[2020-12-06]</span>
              </li>
              <li class="message_list-li">
                <a href="#">· 云寻觅“海上香料之路”——“‘香料之路’档案”国际协调会云端召开</a>
                <span>[2020-12-06]</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      currentIndex: 1
    }
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index || 1
    }
  },
  created() {}
}
</script>

<style lang='scss' scoped>
@import '../../../assets/css/public.scss';
.top_message_container {
  background-color: #fff;
  width: $container_width;
}
.important_msg_title {
  line-height: 58px;
  padding-top: 8px;
  a {
    font-size: 34px;
    font-family: '黑体';
    font-weight: bold;
    color: #333;
    &:hover {
      color: #000;
    }
  }
}
.message_content_box {
  display: flex;
  width: 100%;
  .left_carousel {
    width: 643px;
    height: 335px;
    margin: 0 18px;
    padding-bottom: 21px;
  }
  .right_list {
    margin-right: 20px;
    width: 390px;
    border-top: 1px solid #dadada;
  }
}
.message_carousel_content {
  position: relative;
  .carousel_bottom_title {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 38px;
    background-color: rgba(0, 0, 0, 0.5);
    font: 18px/32px '微软雅黑', '黑体';
    color: #fff;
    text-align: center;
  }
}
.top_message_tabs {
  height: 56px;
  line-height: 56px;
  display: flex;
  span {
    padding: 0 30px;
    color: #000;
    font-size: 15px;
  }
  .tab_item {
    font-size: 18px;
    color: #111111;
  }
  .tab_item-hover {
    color: #c91c18;
    border-top: 2px solid #c91c18;
    display: inline-block;
    margin-top: -1px;
  }
}
</style>
