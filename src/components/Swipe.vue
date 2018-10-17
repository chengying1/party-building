<template>
<div class="swipe">
  <mt-swipe :auto="4000" >
    <mt-swipe-item v-for="(item,index) in row" :key="index">
      <img :src="item.imgUrl">
      <p class="title">{{item.title}}</p>
    </mt-swipe-item>
  </mt-swipe>
</div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  import Vue from 'vue'


  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  export default {
    name: "Swipe",
    data(){
      return{
        row:[]
      }
    },
    methods:{
      getData(){
        this.$axios.get('/carousel/carouselList.do', {type:0}).then(res => {
          console.log(res)
          if(res.data.code == 1){
            this.row = res.data.rows
          }
        })
      }
    },
    created(){
      this.getData()
    }
  }

</script>

<style scoped lang="scss">
.swipe{
  height: 192.5px;
  img {
    position: relative;
  }
  .title{
    padding: 4px;
    color: #fff;
    font-size: 13px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: rgba(0,0,0,.5);
  }
}
</style>
