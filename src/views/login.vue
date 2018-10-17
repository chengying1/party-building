<template>
  <div class="login-content">
  <HeaderCommon></HeaderCommon>
  <div class="login-wrap">
    <div class="img">
      <img src="../../static/img/logo.png" alt="">
    </div>
    <!--<div class="login-from" >-->
      <!--<mt-field  placeholder="身份证号" type="number" v-model="number"></mt-field>-->
      <!--<mt-field  placeholder="密码" type="password" v-model="password"></mt-field>-->
      <!--<mt-button type="primary">primary</mt-button>-->
    <!--</div>-->
    <from class="login-from">
      <input placeholder="身份证号" type="number" v-model="number">
      <input placeholder="密码" type="password" v-model="password">
      <input class="button" type="button" value="登录" style="color: white">
    </from>
  </div>

  </div>
</template>

<script>
  import HeaderCommon from '@/components/HeaderCommon'
  export default {
    components:{HeaderCommon},
    name: "login"
  }
</script>

<style scoped lang="scss">
  .login-content {
      .login-wrap {
        background: #c50206;
        height: 100vh;
        text-align: center;
        .img img{
          margin: 30px 0;
          width: 203px;
          height: 49px;
        }
      }
    .login-from{
      input{
        background: #c50206;
        color: #000;
        width: 288px;
        height: 40px;
        padding: 0 10px;
        border-radius: 6px;
        margin-bottom: 10px;
        border: 1px solid #ff0;

      }
      input::-webkit-input-placeholder {
        color: #fff;
        /*font-size: 12px;*/
        /*text-align: right;*/
      }
      .button{
        width: 310px;
        background: #e3574f;
        border: 0px solid #000;
      }
    }
  }
</style>
