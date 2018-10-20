<template>
  <div>
    <HeaderCommon></HeaderCommon>
    <mt-popup
      v-model="popupVisible"
      position="center">
      <img src="../../static/img/wechat.png" alt="" v-if="slot">
      <img src="../../static/img/alipay.png" alt="" v-else>
    </mt-popup>
    <div class="zhifu">
    <mt-cell title="请选择支付方式"></mt-cell>
    <mt-cell title="微信" is-link @click.native="open">
      <img slot="icon" src="../../static/img/weixi.png" width="40" height="40">
    </mt-cell>
    <mt-cell title="支付宝" is-link @click.native="open1">
      <img slot="icon" src="../../static/img/zhifubao.png" width="40" height="40">
    </mt-cell>
    </div>
  </div>
</template>

<script>
  import HeaderCommon from '@/components/HeaderCommon'
  export default {
    name: "pay",
    components:{HeaderCommon},
    data(){
      return{
        popupVisible:false,
        // slot:true
      }
    },
    methods:{
      open(){
        this.popupVisible = true
        this.slot = true
      },
      open1(){
        this.popupVisible = true
        this.slot = false
      },
    }
  }
</script>

<style lang="scss">
  .zhifu{
  .mint-cell-wrapper{
    height: 50px;
    /*padding: 0;*/
  }
  .mint-cell{
    /*padding: 10px;*/
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  }
</style>
