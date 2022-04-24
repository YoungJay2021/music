<template>
  <div class="subnav-wrapper">
    <ul class="subnav">
      <li class="subnav-item subnav-item--active">推荐</li>
      <li class="subnav-item">排行榜</li>
      <li class="subnav-item mark">歌单</li>
      <li class="subnav-item">主播电台</li>
      <li class="subnav-item">歌手</li>
      <li class="subnav-item">新碟上架</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SuNav",
};
</script>

<style lang="scss" scoped>
$color-subnav: #c20c0c;
$color-subnav-active: #9b0909;
$color: #fff;
.subnav-wrapper {
  height: 35px;
  background-color: $color-subnav;
  display: flex;
  justify-content: center;
}
.subnav {
  margin: 0 auto;
  display: flex;
}
.subnav-item {
  height: 20px;
  line-height: 21px;
  padding: 0 13px;
  margin: 7px 17px 0;
  color: $color;

  &--active {
    background: $color-subnav-active;
    border-radius: 20px;
    font-size: 12px;
  }
}
.mark {
  background: url(../../assets/img/trademark.png) no-repeat 46px 0;
}
</style>
