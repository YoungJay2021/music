<template>
  <div class="mid-nav-wrapper">
    <div class="mid-nav">
      <a href="#" class="hot">热门推荐</a>
      <div class="tab">
        <a href="#" class="tab-item">华语</a>
        <span class="line">|</span>
        <a href="#" class="tab-item">流行</a>
        <span class="line">|</span>
        <a href="#" class="tab-item">摇滚</a>
        <span class="line">|</span>
        <a href="#" class="tab-item">民谣</a>
        <span class="line">|</span>
        <a href="#" class="tab-item">电子</a>
      </div>
      <span class="more">
        <a href="#" class="more-click">更多</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MidNav",
};
</script>

<style lang="scss" scoped>
$color: #c10d0c;
$font-color: #666;
.mid-nav {
  height: 33px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid $color;
  background: url(../../assets/img/mid.png) no-repeat -225px -156px;
}
a.hot {
  float: left;
  font-size: 20px;
  line-height: 28px;
  font-family: "Microsoft Yahei";
}
.more {
  float: right;
  width: 40px;
  height: 28px;
  line-height: 28px;
  font-size: 12px;
  background: url(../../assets/img/mid.png) no-repeat 26px -232px;
}
.tab {
  float: left;
  margin: 7px 0 0 20px;
  font-size: 12px;
}
.tab-item {
  color: $font-color;
}
.line {
  margin: 0 10px;
}
</style>
