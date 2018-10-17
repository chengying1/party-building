<template>
  <div>
    <HeaderCommon></HeaderCommon>
    <div class="banner">
<div>
        <img src="../../static/img/头像.png" alt="">
</div>
      <div >
        <router-link class="desc" to="/login">你还没有登陆，请登录</router-link>
      </div>
    </div>

    <div class="celll">
    <mt-cell title="个人信息" is-link  to="/" class="cell">
      <img slot="icon" src="../../static/img/icon_01.png" width="32" height="32">
    </mt-cell>
    <mt-cell title="个人量化积分" is-link  to="/" class="cell">
      <img slot="icon" src="../../static/img/icon_02.png" width="32" height="32">
    </mt-cell>
    <mt-cell title="修改密码" is-link  to="/" class="cell">
      <img slot="icon"  src="../../static/img/xgmm.png" width="32" height="32">
    </mt-cell>
    <mt-cell title="党费缴纳" is-link  to="/" class="cell">
      <img slot="icon" src="../../static/img/icon_04.png" width="32" height="32">
    </mt-cell>
    </div>


    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/Footer'
  import HeaderCommon from '@/components/HeaderCommon'
  export default {
    components:{Footer, HeaderCommon},
    name: "personal"
  }
</script>

<style scoped lang="scss">
.banner{
  text-align: center;
  height: 140px;
  background: #c50206;
  img{
    margin-top: 36px;
  }
  .desc{
    color: white;
  }
}
  .celll{
    color: #666;
    .cell{
      border-bottom: 1px solid #ddd;
      height: 52px;
    }

  }
</style>
