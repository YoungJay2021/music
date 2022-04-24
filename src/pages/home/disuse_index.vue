<template>
  <div class="page">
    <div class="top1"></div>
    <div class="top2"></div>
    <div class="pic"></div>
    <div class="mid">
      <div class="mid-l">
        <div class="mid-bar"></div>
        <ul class="pop">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="mid-bar"></div>
        <ul class="album">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="mid-bar"></div>
        <div class="songlist">
          <dl></dl>
          <dl></dl>
          <dl></dl>
        </div>
      </div>
      <div class="mid-r">
        <div class="load"></div>
        <div class="mid-bar"></div>
        <div class="singer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-page",
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
li {
  list-style: none;
}
.top1 {
  height: 70px;
  background-color: #242424;
}
.top2 {
  height: 34px;
  background-color: #c20c0c;
}
.pic {
  height: 285px;
  background-color: pink;
}
.mid {
  width: 980px;
  height: 1400px;
  margin: 0 auto;
  border: 1px solid #c0c0c0;
  display: flex;
  flex-direction: row;
}
.mid-l {
  // flex: 2.8 1 auto;
  width: 720px;
  background-color: rgba(170, 244, 33, 0.067);
  padding: 20px 20px 40px;
  display: flex;
  flex-direction: column;
}
.mid-bar {
  margin-top: 15px;
  height: 35px;
  background-color: rgba(222, 14, 87, 0.067);
}
.pop {
  padding: 0;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  // align-content: space-between;
}
.pop li {
  margin: 15px 0;
  width: 140px;
  height: 190px;
  background-color: rgba(11, 209, 248, 0.067);
}
.album {
  padding: 0 16px;
  display: flex;
  flex-flow: row;
  height: 186px;
  margin: 20px 0 37px;
  border: 1px solid #c0c0c0;
  background-color: #f5f5f5;
}
.album li {
  justify-content: space-around;
  align-items: center;
  height: 150px;
  width: 118px;
  margin: 28px 0 0 12px;
  background-color: rgba(206, 82, 16, 0.067);
}
.songlist {
  padding: 0;
  height: 472px;

  margin-top: 20px;
  display: flex;
}
.songlist dl {
  background-color: #f5f5f5;
  flex-grow: 1;
  border: 1px solid #c0c0c0;
}

.mid-r {
  width: 250px;
  // flex: 1 1 auto;
  background-color: rgba(15, 178, 233, 0.067);
}
.load {
  height: 126px;
  background-color: rgba(150, 150, 150, 0.067);
}
</style>
