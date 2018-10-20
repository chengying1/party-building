<template>
  <div class="integral-dateil">
    <HeaderCommon></HeaderCommon>
    <div class="item" v-for="(item,index) in list" :key="index">
      <div class="left fll">
        <div class="content"> {{item.typeName}}</div>
        <div class="time">{{item.timeFormat}}</div>
      </div>
      <div class="right flr">+0.1</div>
    </div>
  </div>
</template>

<script>
  import HeaderCommon from '@/components/HeaderCommon'
  export default {
    name: "integralDateil",
    components:{HeaderCommon},
    data(){
      return{
        page:1,
        list:[]
      }
    },
    methods:{
      getList(){
        this.$axios.get(`/integral/integralList.do?page=${this.page}&rows=10`).then(res => {
          // console.log(res)
          this.list = res.rows
        })
      }
    },
    created(){
      this.getList()
    }

  }
</script>

<style scoped lang="scss">
.integral-dateil{
  .item{
    padding: 16px;
    height: 45px;
    border-bottom: 1px solid rgba(153,153,153,.3);
    .left{
      .content{
        font-size: 18px;
        margin-bottom: 5px;
        color: #333;
      }
      .time{
        font-size: 14px;
      }
    }
    .right{
      color: red;
      font-size: 16px;
    }
  }
}
</style>
