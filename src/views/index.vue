<template>
  <div>
    <Header></Header>
    <div class="Swipe">
      <Swipe></Swipe>
    </div>
<div class="table">
  <div class="table-row">
    <router-link :to="{path:'/newsListCommon', query:{type:0,title:'信工新闻眼'}}" class="table-cell a">
      <img src="/static/img/icon_01.png" alt="">
        <span>信工新闻眼</span>
    </router-link>
    <router-link :to="{path:'/zzsh', query:{title:'掌上组织生活'}}" class="table-cell a">
      <img src="/static/img/icon_02.png" alt="">
      <span>掌上组织生活</span>
      </router-link>
    <router-link :to="{path:'/liuyan', query:{title:'党员云互动'}}" class="table-cell a">
      <img src="/static/img/icon_03.png" alt="">
      <span>党员云互动</span>
      </router-link>
  </div>
  <div class="table-row">
    <router-link :to="{path:'/newsListCommon', query:{type:3,title:'党建一点通'}}" class="table-cell a">
      <img src="/static/img/icon_04.png" alt="">
      <span>党建一点通</span>
      </router-link>
    <router-link :to="{path:'/newsListCommon', query:{type:5,title:'党员亮身份'}}" class="table-cell a">
      <img src="/static/img/icon_05.png" alt="">
      <span>党员亮身份</span>
      </router-link>
    <router-link :to="{path:'/dsnow', query:{title:'党史上的今天'}}" class="table-cell a">
      <img src="/static/img/icon_06.png" alt="">
      <span>党史上的今天</span>
      </router-link>
  </div>
</div>
<div class="section-img">
  <img src="/static/img/banner01.png" alt="">
</div>
    <div class="test">
      <div class="foot-left">

      </div>
      <div class="foot-right">
        <div class="row">
          <router-link :to="{path:'/newsListCommon', query:{type:6,title:'随时随地学'}}"></router-link>
          <router-link :to="{path:'/newsListCommon', query:{type:7,title:'随时随地拍'}}"></router-link>
        </div>
        <div class="row">
          <router-link :to="{path:'/newsListCommon', query:{type:4,title:'制度建设'}}"></router-link>
          <router-link :to="{path:'/newsListCommon', query:{type:1,title:'特色活动'}}"></router-link>
        </div>
      </div>
    </div>
<Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Swipe from '@/components/Swipe'
  import Footer from '@/components/Footer'
  export default {
    components: {Header, Swipe, Footer}
  }
</script>

<style scoped lang="scss">
.Swipe{
  padding-top: 44px;
}
  .table{
    background: url("/static/img/bt_bg.png") no-repeat;
    background-size: 100%;
    .table-row{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .table-cell{
        text-align: center;
        display: flex;
        height: 98px;
        flex-direction: column;
        justify-content: space-between;
        padding:10px 0;
        box-sizing: border-box;
        img{
          margin: 0 auto;
          width: 50px;
          height: 50px;
        }
        span{
          color: #000;
          width: 110px;
          height: 20px;
        }
      }
    }
  }
  .section-img img{
    width: 375px;
    height: 90px;
    display: block;    //消除图片自带的下白边
  }
  .test{
    height: 165px;
    padding-bottom: 46px;
    background: url("/static/img/tese.png");
    background-size: 100%;
    display: flex;
    .foot-left{
      flex: 1;
      /*background: aqua;*/
    }
    .foot-right{
      flex: 2;
      /*background: aquamarine;*/
      .row{
        display: flex;
        height: 50%;
        a{
          flex: 1;
          height: 100%;
          /*border: 1px solid #000;*/
        }
      }
    }
  }
</style>
