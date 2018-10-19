<template>
  <div class="footer">
    <router-link to="/" class="item" :class="{active: $route.name === 'index'}">
      <i class="iconfont icon-danghui"></i>
      <div class="title">
        首页
      </div>
    </router-link>
    <router-link :to="{path:'/newsList',query:{title:'消息早知道'}}" class="item" :class="{active: $route.name === 'newsList'}">
      <i class="iconfont icon-xiaoxi"></i>
      <div class="title">
        消息早知道
      </div>
    </router-link>
    <router-link to="/personal" class="item" :class="{active: $route.name === 'personal'}">
      <i class="iconfont icon-wode-copy-copy"></i>
      <div class="title">
        我的
      </div>
    </router-link>
  </div>
</template>

<script>
  import '../iconfont/iconfont.css'
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #f1f1f1;
  display: flex;
  height: 46px;
  /*flex-direction: row;*/
  /*align-items: center;*/
  .item{
    padding-top: 4px;
    flex: 1;
    text-align: center;
    /*color: #c7000a;*/
    .iconfont{
      font-size: 22px;
    }

  }
  .active {
    border-top: 2px solid #c7000a;
    color: #c7000a;
  }
}
</style>
