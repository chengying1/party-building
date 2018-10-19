<template>
  <div>
    <HeaderCommon></HeaderCommon>
    <div class="detailwrap">
      <div class="title">{{this.title}}</div>

        <div class="content" v-html="this.content"></div>

    </div>
  </div>
</template>

<script>
  import HeaderCommon from '@/components/HeaderCommon'
  export default {
    name: "newsListDetail",
    components:{HeaderCommon},
  data(){
      return{
          title:'',
        content:''
      }
  },
    methods:{
      getData(){
        this.$axios.get('/news/newsContent.do',{newsId:this.$route.query.id}).then(res => {
          // console.log(res)
          this.title = res.data.title
          this.content = res.data.content
        })
      }
    },
    created(){
      this.getData()
    }


  }
</script>

<style  lang="scss">
.detailwrap{
  padding: 10px;
  box-sizing: border-box;
  .title{
    font-size: 24px;
    margin-bottom: 10px;
  }
  .content{
    p {
      line-height: 2;
      margin-bottom: 10px;
    }
    img {
      width: 100%;
      /*display: block;*/
    }
    h4{
      font-size: 18px;
      margin: 10px 0;
    }

  }
}
</style>
