<template>
  <div class="login-content">
  <HeaderCommon></HeaderCommon>
  <div class="login-wrap">
    <div class="img">
      <img src="../../static/img/logo.png" alt="">
    </div>
    <form class="login-from">
      <input placeholder="身份证号" type="number" v-model="formData.number" style="color: white">
      <input placeholder="密码" type="password" v-model="formData.password" style="color: white">
      <input class="button" type="button" value="登录" style="color: white" @click="handlelogin">
    </form>
  </div>

  </div>
</template>

<script>
  import HeaderCommon from '@/components/HeaderCommon'
  export default {
    components:{HeaderCommon},
    name: "login",
    data(){
      return{
        formData:{
          number:'1001',
          password:'123456',
        }
      }
    },
    methods:{
      handlelogin(){
        var formData = new FormData()
        formData.append('id_card', this.formData.number)
        formData.append('password', this.formData.password)

        this.$axios.post('/user/userLogin.do', formData).then(res => {

          this.$store.commit('CHANGE_userInfo', res.data)
          this.$store.commit('CHANGE_token', res.token)
          // console.log(res)
          this.$router.push('/personal')
        })
      }
    }

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
