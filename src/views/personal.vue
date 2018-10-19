<template>
  <div>
    <HeaderCommon></HeaderCommon>
    <div class="banner">
      <div v-if="$store.state.userInfo.header">
        <img :src="$store.state.userInfo.header" alt="">
      </div>
      <div v-else>
        <img src="../../static/img/头像.png" alt="">
      </div>
      <div v-if="$store.state.userInfo.username">
        <router-link class="desc" to="/login">{{$store.state.userInfo.username}}</router-link>
      </div>
      <div v-else>
        <router-link class="desc" to="/login">你还没有登陆，请登录</router-link>
      </div>
    </div>

    <div class="celll">
    <mt-cell title="个人信息" is-link   :to="{path:'/people', query:{title:'个人信息'}}" class="cell">
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
    <div class="logout">
      <input type="button" value="退出登录">
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
    width: 62.5px;
    height: 62.5px;
    border-radius: 50%;
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
  .logout{
    padding: 20px 10px 10px;
    input{
      font-size: 16px;
      color: #fff;
      height: 47px;
      border-radius: 6px;
      margin-top: 10px;
        width: 355px;
        background: #e3574f;
      border: 0px solid #000;
    }
  }
</style>
