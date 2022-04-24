<template>
  <div class="banner-wrapper">
    <div class="banner">
      <div class="banner-img"></div>
      <div class="banner-download"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageBanner",
};
</script>

<style lang="scss" scopes>
.banner-wrapper {
  display: flex;
}
.banner {
  width: 982px;
  height: 285px;
  margin: 0 auto;
  background-color: rgb(243, 134, 134);
  display: flex;
}

.banner-img {
  width: 730px;
  height: 285px;
  background: url(../../assets/img/page1.jpg) no-repeat 0 0;
  background-size: 730px 285px;
}
.banner-download {
  width: 254px;
  height: 285px;

  background: url(../../assets/img/download.png) no-repeat 0 0;
}
</style>
