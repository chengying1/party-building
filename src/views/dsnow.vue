<template>
  <div>
  <HeaderCommon></HeaderCommon>
  <div class="detailwrap">
    <!--<div class="title">{{this.title}}</div>-->

    <div v-html="this.data"></div>

  </div>
  </div>
</template>

<script>
  import HeaderCommon from '@/components/HeaderCommon'
  export default {
    name: "dsnow",
    components:{HeaderCommon},
    data(){
      return{
        // title:'',
        data:''
      }
    },
    methods:{
      getData(){
        this.$axios.get('/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70504%2Findex.html').then(res => {
          console.log(res)
          // this.title = res.data.data.title
          this.data = res
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
  /*.title{*/
    /*font-size: 24px;*/
    /*margin-bottom: 10px;*/
  /*}*/
  /*.content{*/
    /*display: none;*/
    .clear{display: none;}
  .p1_01{display: none;}
  p {
    line-height: 2;
    margin-bottom: 10px;
    font-size: 14px;
  }
  /*img {*/
    /*width: 100%;*/
    /*!*display: block;*!*/
  /*}*/
  /*h4{*/
    /*font-size: 18px;*/
    /*margin: 10px 0;*/
  /*}*/
h1{
  font-size: 24px;
  margin-bottom: 10px;
}
    h2{
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

</style>
