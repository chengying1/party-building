<template>
  <div class="liuyan">
    <HeaderCommon></HeaderCommon>

    <div class="liuyan-item clearfix" v-for="(item, index) in forumlist" :key="index">
      <div class="top clearfix">
        <div class="right flr"><img src="../../static/img/党员互动icon.png" alt=""></div>
        <div class="left fll">
          <img :src="item.header" alt="">
        </div>
        <div class="center">
          <div class="username">{{item.username}}</div>
          <div class="time">
            <span><img src="../../static/img/时间.png" alt=""></span>
            <span>2018-04-04</span>
            <span><img src="../../static/img/声音.png" alt=""></span>
            <span>公开</span>
          </div>
        </div>
      </div>
      <div class="content">{{item.content}}</div>
      <div class="bottom">
        <span class="span">
        <span>回复</span><i class="iconfont icon-xiaoxi"></i>
          </span>
      </div>
    </div>

    <mt-popup
      v-model="popupVisible"
      position="bottom">
      <div class="form-wrap">
      <form action="" class="form">
        <textarea v-model="content" name="" id="" cols="30" rows="10" class="textarea"></textarea>
        <input type="button" value="发布" class="tijiao" @click="submit">
        <input type="button" value="取消" class="quxiao" @click="back">
      </form>
      </div>
    </mt-popup>
    <div class="tianjia" @click="open">
      <img src="../../static/img/发布btn.png" alt="">
    </div>
  </div>
</template>

<script>
  import HeaderCommon from '@/components/HeaderCommon'
  import { Toast } from 'mint-ui';
  export default {
    name: "liuyan",
    components:{HeaderCommon, Toast},
    data(){
      return{
        popupVisible:false,
        forumlist:[],
        page:1,
        content:''
      }
    },
    methods:{
      open(){
        this.popupVisible = true
      },
      getForumList(){
        this.$axios.get(`/forum/forumList.do?page=${this.page}&rows=10&type=0&cates=0`).then(res => {
          this.forumlist = res.rows
        })
      },
      submit(){
        let formdata = new FormData()
        formdata.append('content',this.content)
        this.$axios.post('/forum/saveForum.do',formdata).then(res => {
          // console.log(res)
          Toast(res.msg)
        })
      },
      back(){
        this.popupVisible = false
      }
    },
    created(){
      this.getForumList()
    }
  }
</script>

<style scoped lang="scss">
.liuyan{
  /*width: 100vw;*/
  background: #eeeeee;
  .liuyan-item{
    background: #ffffff;
    padding: 16px;
    margin-bottom: 10px;
    .top{
      width: 100%;
      .left{
        /*width: 33.33px;*/
        margin-right: 10px;
        img{
          width: 33.33px;
          height: 33.33px;
          border-radius: 50%;
        }
      }
      .center{
        height: 41px;
        /*width: 172.6px;*/
        /*color: #bd2c00;*/
        .username{
          font-size: 18px;
          color: #333;
        }
        .time{
          span{
            margin-right: 5px;
          }
        }
      }
      .right{
        img{
          width: 66px;
        }
      }
    }
    .content{
      padding: 10px 0;
      font-size: 16px;
    }
    .bottom{
      .span{
        display: flex;
        flex-direction: row-reverse;
        align-items: flex-end;
      span{
        margin-left: 5px;
        font-size: 14px;
        vertical-align: 2px;
      }
      }
    }
  }
  .tianjia{
    position: fixed;
    right: 10px;
    bottom: 70px;
    z-index: 999;
  }
  .form-wrap{
    width: 100vw;
  .form{
    width: 100%;
    padding: 10px;
    background: #f7f7f7;
    box-sizing: border-box;
    .textarea{
      padding: 4px;
      width: 100%;
      box-sizing: border-box;
      border-radius: 3px;
      margin-bottom: 10px;
      height: 100px;
    }
    input{
      width: 34px;
      height: 32px;
      padding: 2px 4px;
      border-radius: 3px;
      font-size: 12px;
    }
    .tijiao{
      color: #fff;
      background: #ef473a;
      border: 1px solid #ef473a;
    }
    .quxiao{
      background: white;
      float: right;
    }
  }
  }
}
</style>
