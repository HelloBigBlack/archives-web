<template>
  <div>
    <message-card :messageTitle="'公开专栏'">
      <ul class="message_tabs">
        <li :class="{'li-active': currentIndex === 1}" @mouseover="changeCurrentIndex(1)">党务公开</li>
        <li :class="{'li-active': currentIndex === 2}" @mouseover="changeCurrentIndex(2)">馆务公开</li>
        <li :class="{'li-active': currentIndex === 3}" @mouseover="changeCurrentIndex(3)">预决算公开</li>
        <li :class="{'li-active': currentIndex === 4}" @mouseover="changeCurrentIndex(4)">业务公开</li>
      </ul>
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
          </ul>
        </div>
      </div>
    </message-card>
  </div>
</template>

<script>
import MessageCard from '@/components/front-main/MessageCard'
export default {
  components: {
    MessageCard
  },
  data: function() {
    return {
      currentIndex: 1
    }
  },
  methods: {
    changeCurrentIndex(index) {
      this.currentIndex = index || 1
    }
  },
  created() {}
}
</script>

<style lang='scss' scoped>
@import '../../../assets/css/public.scss';
.message_tabs {
  margin: 20px 0 10px 0;
  overflow: hidden;
  li {
    float: left;
    background: #f6e8e8;
    margin-left: 1px;
    height: 37px;
    line-height: 37px;
    width: 154.5px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
  }
  .li-active {
    background: $main_light_color;
    color: #fff;
  }
}
</style>
