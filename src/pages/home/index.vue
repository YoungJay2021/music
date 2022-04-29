<template>
  <div>
    <HomeNav />
    <SubNav />
    <PageBanner />

    <div class="mid">
      <div class="mid-l">
        <MidNav />
        <SongOrder />
        <MidNav />
        <NewAlbum />
      </div>
      <div class="mid-r"></div>
    </div>
  </div>
</template>

<script>
import HomeNav from "../../components/nav";
import SubNav from "../../components/subnav";
import PageBanner from "../../components/banner";
import MidNav from "../../components/mid-nav";
import SongOrder from "../../components/songs-order";
import NewAlbum from "../../components/album";
// import HelloWorld from "../../components/swiper";
export default {
  name: "IndexPage",
  components: {
    HomeNav,
    SubNav,
    PageBanner,
    MidNav,
    SongOrder,
    NewAlbum,
    // HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
.mid {
  display: flex;
  margin: 0 auto;
  width: 980px;
  height: 1500px;
}
.mid-l {
  width: 729px;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 20px 40px;
  border: 1px solid #666;
}
.mid-r {
  flex: 1;
  height: 100%;
  background-color: rgb(24, 235, 217);
}
</style>
