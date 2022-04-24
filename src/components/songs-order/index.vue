<template>
  <div>
    <div v-for="song in songs" :key="song.id">
      <div>
        <p>歌曲名: {{ song.name }}</p>
        <img :src="song.al.picUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name:"SongOrder"
  mounted() {
    axios
    .get("http://127.0.0.1:3000/dj/hot")
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

<style></style>
