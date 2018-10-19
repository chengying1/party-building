<template>
  <div>
    <HeaderCommon></HeaderCommon>
    <div class="img">
      <img src="../../static/img/timg.jpg" alt="">
    </div>
    <div class="menu-item">
<router-link :to="{path:'/newsListCommon', query:{type:8,title:'政治学习'}}" class="item">
  <img src="../../static/img/icon1.png" alt="">
  <span>政治学习</span>
</router-link>
      <router-link :to="{path:'/newsListCommon', query:{type:8, }}" class="item">
        <img src="../../static/img/icon2.png" alt="">
        <span>思想汇报</span>
      </router-link>
      <router-link to="/" class="item">
        <img src="../../static/img/icon3.png" alt="">
        <span>心得总结</span>
      </router-link>
      <router-link to="/" class="item">
        <img src="../../static/img/icon4.png" alt="">
        <span>民主评议</span>
      </router-link>
      <router-link to="/" class="item">
      <img src="../../static/img/icon5.png" alt="">
      <span>流动党员找组织</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import HeaderCommon from '@/components/HeaderCommon'
  export default {
    name: "zzsh",
    components:{HeaderCommon},
  }
</script>

<style scoped lang="scss">
.img img{
  width: 375px;
  height: 186px;
}
  .menu-item{
display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .item{
      padding: 15px 20px;
      display: flex;
      flex-direction: column;
      width: 85px;
      /*height: 115px;*/
      text-align: center;
      /*justify-content: space-between;*/
      img{
        width: 85px;
        margin-bottom: 10px;
      }
      span{
        font-size: 14px;
      }
    }

  }
</style>
