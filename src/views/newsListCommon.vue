<template>
  <div class="all">
    <HeaderCommon></HeaderCommon>
    <div class="test">
    <!--<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :bottomLoadingText="loadingMsg" :auto-fill="false" ref="loadmore">-->
      <div>
   <router-link :to="{path:'/newsListDetail', query:{id:item.newsId, title}}"  class="item" v-for="(item, index) in pageList" :key="index">
     <div class="img">
       <img :src="item.pic" alt="">
     </div>
      <div class="item-content">
        <div class="news">
          {{item.title}}
        </div>
        <div class="time">
          <span>{{item.currentTime}}</span>
          <span class="right"><img src="../../static/img/12-eye.png" alt="">{{item.count}}</span>
        </div>
      </div>
   </router-link>
      </div>
      <!--</mt-loadmore>-->
    </div>
    </div>
</template>

<script>

  import HeaderCommon from '@/components/HeaderCommon'
  export default {
    name: "newsListCommon",
    components:{HeaderCommon},
    data(){
      return{
        title:'',
        page:1,
        pageList:[],
        allLoaded:false,
        scrollMode:"auto",
        count:0,
        isMore:false,
        loadingMsg:'',
      }
    },
    methods:{
    // skipToIndex(){
    //   this.$router.push('/index');
    // },
    // skipToDetail(id){
    //   this.$router.push(`/news_detail?title=${this.title2}&id=${id}`)
    // },
    getListData(){
      this.$axios.get('/news/newsList.do',{page:this.page,rows:10,type:this.$route.query.type}).then(res=>{
        // console.log(res)
        // if(res.data.code == 1){
          // console.log(res)
          this.pageList = res.rows
        //   this.count = Math.ceil(res.data.total/10);
        // }else {
          // Toast({
          //   message:'数据请求失败!',
          //   position:'top',
          //   duration:1500
          // });
        // }
      })
    },
    // loadBottom(){
    //   if(this.page<this.count){
    //     this.page = this.page + 1;
    //     this.getListData();
    //     this.$refs.loadmore.onBottomLoaded();
    //   }else {
    //     this.allLoaded=true;
    //     this.isMore = true;
    //   }
    // },
  },
  created(){
    this.title = this.$route.query.title
    this.getListData();
  },
    //   loadTop:function() {
    //     this.loadPageList();
    //     this.$refs.loadmore.onTopLoaded();
    //   },
    //   loadBottom:function() {
    //     this.more();
    //     this.$refs.loadmore.onBottomLoaded();
    //   },
    //   loadPageList:function (){
    //
    //     this.$axios.get('/news/newsList.do',{page:this.page,rows:10,type:this.$route.query.type}).then(res => {
    //
    //       this.isHaveMore(this.total);
    //       this.pageList =res.data.rows;
    //       this.total = res.total
    //       this.$nextTick(function () {
    //         this.scrollMode = "touch";
    //       });
    //     });
    //   },
    //   more:function (){
    //     this.page = parseInt(this.page) + 1;
    //     this.$axios.get('/news/newsList.do',{page:this.page,rows:10,type:this.$route.query.type}).then(res => {
    //       this.pageList = this.pageList.concat(res.data.rows);
    //       this.total = parseInt(this.total) - 0
    //       this.isHaveMore(this.total);
    //       console.log(this.total)
    //     });
    //   },
    //   isHaveMore:function(isHaveMore){
    //
    //     // this.allLoaded = true; //true是禁止上拉加载
    //     if(isHaveMore){
    //       this.allLoaded = false;
    //     }
    //   }
    // },
    // created(){
    //   this.title = this.$route.query.title
    //   // this.getData()
    // },
    // mounted(){
    //   this.loadPageList();
    // },
  }
</script>

<style scoped lang="scss">
  /*.all{*/
    /*position: relative;*/
    /*.test{*/
      /*overflow: auto;*/
      /*height: auto;*/
    /*}*/
  .img img{
    width: 80px;
    height: 80px;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
  }
.item-content{
  border-bottom: 1px solid #999999;
  width: 265px;
  height: 80px;
  padding: 10px 10px 10px 100px;
  position: relative;
.news{
  font-size: 16px;
  color: #000000;
  line-height: 1.5;
  /*overflow: hidden;*/
  height: 48px;
  width: 265px;
  /*text-overflow:ellipsis;*/
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
  .time{
    position: absolute;
    bottom: 10px;
    width: 265px;
    .right{
      float: right;
      img{
        margin-right: 5px;
      }
    }
  }
}
  /*}*/

</style>
