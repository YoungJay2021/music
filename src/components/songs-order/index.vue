<template>
  <ul class="pop-wrapper" id="popsong-1">
    <li v-for="song in songs.slice(0, 8)" :key="song.id" class="pop">
      <div class="pop-img">
        <img :src="song.al.picUrl" alt="" />
        <a href="#" class="pop-cover"></a>
        <div class="pop-bottom">
          <a href="#" class="icon-play"></a>
          <p class="headset"></p>
          <p class="number">12233</p>
        </div>
      </div>
      <a class="pop-name">{{ song.name }}</a>
    </li>
  </ul>
</template>

<script>
// import Vue from "vue";
import axios from "axios";
export default {
  name: "SongOrder",
  mounted() {
    axios
      .get("http://127.0.0.1:3000/artist/top/song?id=6452")
      .then((response) => {
        const {
          data: { songs },
        } = response;
        console.log(response.data.songs);

        this.songs = songs;
      });
  },

  data() {
    return {
      songs: [],
    };
  },
};
</script>

<style lang="scss" scoped>
$color: #ccc;
$color-active: #fff;
.pop-wrapper {
  padding: 0;
  height: 468px;
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.pop {
  width: 140px;
  height: 188px;
  margin-bottom: 30px;
  img {
    width: 140px;
    height: 140px;
  }
}
.pop-img {
  width: 140px;
  height: 140px;
  position: relative;
}
.pop-cover {
  position: absolute;
  top: 0;
  left: 0;
  float: left;
  width: 100%;
  height: 100%;
  background: url(../../assets/img/cover.png) no-repeat 0 0;
}
.pop-bottom {
  width: 100%;
  height: 27px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: url(../../assets/img/cover.png) no-repeat 0 -537px;
}
.icon-play {
  width: 16px;
  height: 17px;
  bottom: 5px;
  position: absolute;
  right: 10px;
  background: url(../../assets/img/iconall.png) no-repeat 0 0;
}
.headset {
  float: left;
  width: 14px;
  height: 11px;
  margin: 9px 5px 9px 10px;
  background: url(../../assets/img/iconall.png) no-repeat 0 -24px;
}
.number {
  float: left;
  margin-top: 7px;
  font-size: 12px;
  color: $color;
}
.pop-name {
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
