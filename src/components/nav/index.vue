<template>
  <header class="nav-wrapper">
    <h1 class="logo"></h1>
    <ul class="nav">
      <li class="nav-item nav-item--active">发现音乐</li>
      <li class="nav-item">我的音乐</li>
      <li class="nav-item">关注</li>
      <li class="nav-item">商城</li>
      <li class="nav-item">音乐人</li>
      <li class="nav-item top-download">
        下载客户端
        <sub class="sub-hot"></sub>
      </li>
    </ul>
    <div class="actions">
      <div class="input-wrapper">
        <input class="top-input" placeholder="音乐/视频/电台/用户" />
      </div>

      <button class="center-btn">创作者中心</button>

      <a class="login-btn">登录</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "HomeNav",
};
</script>

<style lang="scss" scoped>
$bg-color: #242424;
$bg-color-active: #000;
$color: #ccc;
$color-active: #fff;
$color-border: #4f4f4f;
$color-font: #787878;

.nav-wrapper {
  display: flex;
  justify-content: center;
  background-color: $bg-color;
  height: 70px;
}

.logo {
  width: 176px;
  height: 69px;
  background: url(../../assets/img/topbar.png) no-repeat 0 0;
}

.nav {
  display: flex;
}

.nav-item {
  height: 70px;
  font-size: 14px;
  line-height: 70px;
  list-style: none;
  color: $color;
  padding: 0 19px;
  background-color: $bg-color;

  &--active {
    color: $color-active;
    background: $bg-color-active url(../../assets/img/redsub.png) no-repeat 20px
      60px;
  }
}

.actions {
  display: flex;
}
.input-wrapper {
  width: 158px;
  height: 32px;
  margin: 19px 0 0 50px;
  background-color: #fff;
  border-radius: 32px;
  background: #fff url(../../assets/img/topbar.png) no-repeat 0px -97px;
}
.top-input {
  width: 118px;
  margin: 10px 30px 0;
  border: none;
  font-size: 12px;
}
.center-btn {
  color: $color;
  background-color: $bg-color;
  height: 32px;
  border-radius: 20px;
  border: 1px solid $color-border;
  margin: 19px 10px 0;
  font-size: 12px;
}
.login-btn {
  color: $color-font;
  margin: 29px 10px 0;
  font-size: 12px;
}
.top-download {
  position: relative;
}
.sub-hot {
  position: absolute;
  width: 28px;
  height: 19px;
  top: 21px;
  left: 100px;
  background: url(../../assets/img/topbar.png) no-repeat -190px 0px;
}
</style>
