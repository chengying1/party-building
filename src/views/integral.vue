<template>
  <div class="witch">
    <HeaderCommon></HeaderCommon>
    <div class="img">
      <img src="../../static/img/jifen.png" alt="">
      <span class="jifen">61.5</span>
    </div>
    <div class="liebiao">
    <mt-cell title="积分明细" is-link  :to="{path:'/integralDateil', query:{title:'积分明细'}}">
      <img slot="icon" src="../../static/img/icon_02.png" width="32" height="32">
    </mt-cell>
    </div>
    <div class="rule">
      <mt-cell title="积分规则">
        <span><img src="../../static/img/wenhao.png" alt=""></span>
      </mt-cell>
    </div>
    <div class="list">
      <mt-cell :title="item.title" v-for="(item,index) in list" :key="index">
        <span>{{item.value}}</span>
      </mt-cell>
    </div>
  </div>
</template>

<script>
  import HeaderCommon from '@/components/HeaderCommon'
  export default {
    name: "integral",
    components:{HeaderCommon},
    data(){
      return{
        list:[
          {title:'登录app', value:5},
          {title:'完善个人信息', value:2},
          {title:'查看积分', value:5},
          {title:'按时缴纳党费', value:5},
          {title:'查看通知', value:5},
          {title:'了解学院工作动态', value:5},
          {title:'上交思想汇报经审核通过', value:5},
          {title:'主动学习相关文件', value:5},
          {title:'认真撰写心得总结并上交，经审核通过', value:5},
          {title:'提交个人总结，并参与评议', value:5},
          {title:'积极参与互动', value:5},
          {title:'学习党建知识', value:5},
          {title:'学习党史', value:5},
          {title:'争先创优事迹', value:5},
          {title:'关注并积极参与特色活动', value:5},

        ]
      }
    }
  }
</script>
<style lang="scss">
  .witch{
    width: 100%;

  .liebiao{
  .mint-cell-text{
    margin-left: 5px;
  }
  }
  .rule{
    .mint-cell{
      min-height: 34px;
      background: rgb(238,238,238);
      .mint-cell-text{
        font-size: 14px;
      }
    }
  }
  .list{
    .mint-cell{
      min-height: 34px;
      border-bottom: 1px solid rgba(153,153,153,.3);
      .mint-cell-text{
        font-size: 14px;
        color: rgb(153,153,153);
      }
      .mint-cell-value{
        font-size: 14px;
        color:red;
      }
    }
  }
  }
</style>

<style scoped lang="scss">

  .img {
    position: relative;
    text-align: center;
    img {
      width:100%;
      height:auto;
    }
    .jifen {
      position: absolute;
      font-size: 16px;
      color: #fff;
      top: 45%;
      left: 45%;
    }
  }
  /*.list{*/
    /*/deep/ .mint-cell-text{*/
      /*color: #55a532;*/
    /*}*/
  /*}*/
</style>
