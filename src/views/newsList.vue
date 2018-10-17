<template>
  <div>
  <HeaderCommon></HeaderCommon>
    <div   v-for="(item, index) in rows" :key="index">
      <router-link :to="{path: '/newsListDetail',query:{id:item.newsId}}" class="list">
      <div class="list-left">
        <img src="..\..\static\img\iconfont_gonggaotongzhi.png" alt="">
      </div>
      <div class="list-right">
        <div class="title">{{item.title}}</div>
        <div class="time">{{item.currentTime}}</div>
      </div>
      </router-link>
    </div>
    <div class="bottom">
      没有数据了
    </div>
  <Footer></Footer>
  </div>
</template>

<script>
  import HeaderCommon from '@/components/HeaderCommon'
  import Footer from '@/components/Footer'
  export default {
    components:{HeaderCommon, Footer},
    name: "newsList",
    data(){
      return{
        rows:[]
      }
    },
    methods:{
      getData(){
        this.$axios.get('/news/newsList.do',{page:1,rows:10,type:2}).then(res => {
          // console.log(res)
          this.rows = res.data.rows
        })
      }
    },
    created(){
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
.list{
  display: flex;
  height: 76px;
  padding: 10px;
  border-bottom: 1px solid rgba(0,0,0,.1);
  .list-left{
    flex: 1;
    text-align: center;
    img{
      width: 35px;
      height: 37px;
      padding-top: 10px;

    }
  }
  .list-right{
    flex: 4;

    display: flex;
    flex-direction: column;
    padding: 5px;
    .title{
      flex: 2;
      font-size: 15px;
      color: #333;
    }
    .time{
      flex: 1;
      margin: 5px 0;
    }
  }
}
  .bottom{
    padding: 10px 0;
    text-align: center;
    color:#666;
    font-size: 14px;
  }
</style>
