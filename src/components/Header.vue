<template>
  <div class="header clearfix">
    <div class="fll">
      <img src="../../img/logo.png" alt="">
    </div>
    <div class="flr">
      <router-link to="/login">登录</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="scss">
.header{
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #c50206;
  height: 34px;
  width: 365px;
  padding: 5px;
  .fll {
    width: 130px;
    height: 32px;
    border: 1px solid #c50206;
    padding: 0 2px;
    img{
      width: 130px;
      height: 31.27px;
    }
  }
  .flr{
    width: 34px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    border: 1px solid #c50206;
    padding: 0 2px;
    a {
      font-size: 17px;
      text-decoration: none;
      color: #fff;
      font-weight: 300;
    }
  }
}
</style>
