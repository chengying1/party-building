<template>
  <div class="wrap">
  <div class="header">
    <div class="icon" @click="back" ></div>
    <p>{{this.$route.query.title}}</p>
    <p v-show="this.$route.name === 'personal'" >我的党建</p>
    <p v-show="this.$route.name === 'newsList'" >消息早知道</p>
    <p v-show="this.$route.name === 'login'" >登录</p>
    <!--<p v-show="this.$route.query.type === 0" >信工新闻眼</p>-->
  </div>
    <!--<div class="null">-->
      <!--&lt;!&ndash;lalalala&ndash;&gt;-->
    <!--</div>-->
  </div>
</template>

<script>
  // let css = this.$route.name === 'newsListDetail'
  export default {
  methods:{
      back(){
        this.$router.back(-1)
      }
  }
  }

</script>

<style scoped lang="scss">
  .wrap {
    .header {
      position: fixed;
      z-index: 9;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      background: #c50206;
      height: 34px;
      line-height: 34px;
      width: 365px;
      padding: 5px;
      text-align: center;

      p {
        color: white;
        font-size: 18px;
        margin-right: 10px;
      }
      .icon{
        border: 2px solid #fff;
        border-top: 0px solid #fff;
        border-right: 0px solid #fff;
        width: 10px;
        height: 10px;
        float: left;
        transform: rotate(45deg);
        margin-top: 10px;
        margin-left: 10px;
      }
    }

    /*.null{*/
      /*!*background: #55a532;*!*/
      /*height: 44px;*/

      /*background: transparent;*/
    /*}*/
    &::after{
      content: '';
      display: block;
      height: 44px;
    }

  }
</style>
