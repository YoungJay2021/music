<template>
  <div class="album-wrapper">
    <a href="" class="sw-l"></a>
    <a href="" class="sw-r"></a>
    <ul class="album">
      <li v-for="product in products" :key="product.albumId" class="album-item">
        <img :src="product.coverUrl" alt="" />
        <a href="" class="album-img"></a>
        <p class="album-name-wrap">
          <a href="" class="album-name">{{ product.albumName }}</a>
        </p>
        <p class="album-singer-wrap">
          <a href="" class="album-singer">{{ product.artistName }}</a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NewAlbum",
  mounted() {
    axios.get("http://127.0.0.1:3000/album/list?limit=5").then((response) => {
      const {
        data: { products },
      } = response;
      console.log(response.data.products);

      this.products = products;
    });
  },

  data() {
    return {
      products: [],
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d3d3d3;
$bg-color: #f5f5f5;
$font-color: #666;
.album-wrapper {
  height: 186px;
  margin: 20px 0 37px;
  border: 1px solid $border-color;
  position: relative;
  background-color: $bg-color;
}
.album {
  width: 645px;
  height: 150px;
  padding: 0;
  margin: 28px 22px 0;
}
.sw-l {
  width: 17px;
  height: 17px;
  position: absolute;
  top: 71px;
  left: 4px;
  background: url(../../assets/img/mid.png) no-repeat -260px -75px;
}
.sw-r {
  width: 17px;
  height: 17px;
  position: absolute;
  top: 70px;
  right: 4px;
  background: url(../../assets/img/mid.png) no-repeat -300px -75px;
}
.album-item {
  float: left;
  width: 118px;
  height: 150px;
  margin-left: 11px;
  position: relative;
  img {
    width: 100px;
    height: 100px;
    float: left;
    position: absolute;
    left: 0;
    top: 0;
  }
  p {
    margin: 0;
  }
}
.album-img {
  float: left;
  width: 118px;
  height: 100px;
  background: url(../../assets/img/cover.png) no-repeat 0 -570px;
}
.album-name-wrap {
  width: 100px;
  line-height: 18px;
  font-size: 12px;
  display: inline;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.album-singer {
  color: $font-color;
  font-size: 12px;
}
</style>
